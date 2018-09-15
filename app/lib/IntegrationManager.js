import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFHttpManager, SFItem } from 'standard-file-js';
import BridgeManager from "./BridgeManager";
import CredentialManager from "./CredentialManager";

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
    var creds = CredentialManager.get().getDefaultCredentials();
    if(creds) {
      var integrations = creds.content.integrations;
      if(integrations && integrations.length > 0) {
        for(var oldIntegration of integrations) {
          var newIntegration = this.createAndSaveIntegrationObject(oldIntegration);
        }
        creds.content.integrations = null;
        CredentialManager.get().saveCredential(creds);
      }
    }
  }

  get integrations() {
    return BridgeManager.get().filterItems(BridgeManager.FileSafeIntegrationContentTypeKey);
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

  async saveIntegrationFromCode(code) {
    var content = this.parseIntegrationCode(code);

    if(this.integrations.length == 0) {
      content.isDefaultUploadSource = true;
    }

    let integration = this.createAndSaveIntegrationObject(content);
    return integration;
  }

  createAndSaveIntegrationObject(content) {
    let integration = new SFItem({
      content_type: BridgeManager.FileSafeIntegrationContentTypeKey,
      content: content
    });

    BridgeManager.get().createItems([integration]);
    return integration;
  }

  getDefaultUploadSource() {
    return this.integrations.find((integration) => {
      return integration.content.isDefaultUploadSource;
    });
  }

  setIntegrationAsDefault(integration) {
    var currentDefault = this.getDefaultUploadSource();
    if(currentDefault) {
      currentDefault.content.isDefaultUploadSource = false;
    }

    integration.content.isDefaultUploadSource = true;
    BridgeManager.get().saveItem(integration);
  }

  deleteIntegration(integrationObject) {
    var isDefault = integrationObject.content.isDefaultUploadSource;
    BridgeManager.get().deleteItem(integrationObject, (response) => {
      if(response.deleted && isDefault) {
        if(this.integrations.length > 0) {
          for(var currentIntegration of this.integrations) {
            if(currentIntegration != integrationObject) {
              this.setIntegrationAsDefault(currentIntegration);
              break;
            }
          }
        }
      }
    });
  }
}
