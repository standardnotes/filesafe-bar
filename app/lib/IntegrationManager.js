import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFHttpManager, SFItem } from 'standard-file-js';
import BridgeManager from "./BridgeManager";

const IntegrationContentTypeKey = "SN|FileSafe|Integration";

export default class IntegrationManager {

  /* Singleton */
  static instance = null;
  static get() {
    if (this.instance == null) { this.instance = new IntegrationManager(); }
    return this.instance;
  }

  constructor() {
    BridgeManager.get().addEventHandler((event) => {
      if(event == BridgeManager.BridgeEventLoadedCredentials) {
        this.migrateIntegrationsFromCredentials();
      }
    });
  }

  migrateIntegrationsFromCredentials() {
    console.log("Performing migration");
    var creds = BridgeManager.get().getCredentials();
    if(creds) {
      var integrations = creds.content.integrations;
      if(integrations && integrations.length > 0) {
        for(var oldIntegration of integrations) {
          var newIntegration = this.createIntegrationObject(oldIntegration);
          console.log("Migratating old", oldIntegration, "to new", newIntegration);
          this.saveIntegration(newIntegration);
        }
        // creds.content.integrations = null;
        BridgeManager.get().saveCredentials();
      }
    }
  }

  get integrations() {
    return BridgeManager.get().filterItems(IntegrationContentTypeKey);
  }

  integrationForFile(metadata) {
    return this.integrations.find((integration) => {
      return metadata.content.serverMetadata && integration.content.source == metadata.content.serverMetadata.source;
    });
  }

  parseIntegrationCode(code) {
    var jsonString = atob(code);
    var integration = JSON.parse(jsonString);
    integration.rawCode = code;
    return integration;
  }

  async saveIntegration(code) {
    var content = this.parseIntegrationCode(code);

    if(this.integrations.length == 0) {
      content.isDefaultUploadSource = true;
    }

    let integration = this.createIntegrationObject(content);
    return BridgeManager.get().saveItem(integration);
  }

  createIntegrationObject(content) {
    let integration = new SFItem({
      content_type: IntegrationContentTypeKey,
      content: content
    });
    return integration;
  }

  getDefaultUploadSource() {
    return this.integrations.find((integration) => {
      return integration.content.isDefaultUploadSource;
    });
  }

  saveIntegration(integration) {
    BridgeManager.get().saveItem(integration);
  }

  setIntegrationAsDefault(integration) {
    var currentDefault = this.getDefaultUploadSource();
    if(currentDefault) {
      currentDefault.content.isDefaultUploadSource = false;
    }

    integration.content.isDefaultUploadSource = true;
    this.saveIntegration(integration);
  }

  deleteIntegration(integrationObject) {
    BridgeManager.get().deleteItem(integrationObject);
  }
}
