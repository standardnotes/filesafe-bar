import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFHttpManager, SFItem } from 'standard-file-js';
import BridgeManager from "./BridgeManager";
const ComponentKeyIntegrationsArrayKey = "ComponentKeyIntegrationsArrayKey";

export default class IntegrationManager {

  /* Singleton */
  static instance = null;
  static get() {
    if (this.instance == null) { this.instance = new IntegrationManager(); }
    return this.instance;
  }

  get integrations() {
    return BridgeManager.get().getComponentData(ComponentKeyIntegrationsArrayKey) || [];
  }

  saveIntegrations(integrations) {
    BridgeManager.get().setComponentData(ComponentKeyIntegrationsArrayKey, integrations || this.integrations);
  }

  integrationForFile(metadata) {
    return this.integrations.find((integration) => {
      return metadata.content.serverMetadata && integration.source == metadata.content.serverMetadata.source;
    });
  }

  parseIntegrationCode(code) {
    var jsonString = atob(code);
    var integration = JSON.parse(jsonString);
    integration.rawCode = code;
    return integration;
  }

  saveIntegration(code) {
    let integrations = this.integrations;
    var integration = this.parseIntegrationCode(code);

    if(integrations.length == 0) {
      integration.isDefaultUploadSource = true;
    }

    integrations.push(integration);

    this.saveIntegrations(integrations);
  }

  getDefaultUploadSource() {
    return this.integrations.find((integration) => {
      return integration.isDefaultUploadSource;
    });
  }

  setIntegrationAsDefault(integration) {
    var currentDefault = this.getDefaultUploadSource();
    if(currentDefault) {
      currentDefault.isDefaultUploadSource = false;
    }

    integration.isDefaultUploadSource = true;
    this.saveIntegrations();
  }

  deleteIntegration(integrationObject) {
    let integrations = this.integrations;
    _.remove(integrations, {rawCode: integrationObject.rawCode});
    this.saveIntegrations();
  }
}
