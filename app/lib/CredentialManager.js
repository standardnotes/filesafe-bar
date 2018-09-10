import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFHttpManager, SFItem } from 'standard-file-js';
import BridgeManager from "./BridgeManager";
import IntegrationManager from "./IntegrationManager";

export default class CredentialManager {

  /* Singleton */
  static instance = null;
  static get() {
    if (this.instance == null) { this.instance = new CredentialManager(); }
    return this.instance;
  }

  constructor() {
    this.credentials = [];

    BridgeManager.get().addEventHandler((event) => {
      if(event == BridgeManager.BridgeEventReceivedItems) {
        this.reloadCredentials();
      }
    });
  }

  reloadCredentials() {
    var searchResults = BridgeEventSavedItem.get().filterItems(BridgeManager.FileSafeCredentialsContentType);
    if(searchResults.length == 0) {
      return;
    }

    for(var incomingCredentials of searchResults) {
      if(!_.find(this.credentials, {uuid: incomingCredentials.uuid})) {
        this.credentials.push(incomingCredentials);
      }
    }

    RelayManager.get().setCredentials(this.getDefaultCredentials());
    if(this.credentials.length > 0) {
      BridgeManager.get().notifyObserversOfEvent(BridgeManager.BridgeEventLoadedCredentials);
    }
  }

  async loadCredentials() {

  }

  async createCredentials() {
    let bits = 256;
    let identifer = await SFJS.crypto.generateRandomKey(bits);
    let password = await SFJS.crypto.generateRandomKey(bits);

    let credentialParams = await SFJS.crypto.generateInitialKeysAndAuthParamsForUser(identifer, password);
    credentialParams.relayServerUrl = window.default_relay_server_url;
    credentialParams.isDefault = this.credentials.length == 0;

    let credentials = new SFItem({
      content_type: BridgeManager.FileSafeCredentialsContentType,
      content: credentialParams
    });

    BridgeManager.get().createItem(credentials);
    BridgeManager.get().notifyObserversOfEvent(BridgeManager.BridgeEventLoadedCredentials);
    return credentials;
  }

  getDefaultCredentials = () => {
    var defaultCredentials = this.credentials.find((candidate) => {
      return candidate.content.isDefault;
    })

    if(!defaultCredentials && this.credentials.length > 0) {
      defaultCredentials = this.credentials[0];
    }

    return defaultCredentials;
  }

  saveCredentials(credentials) {
    BridgeManager.get().saveItem(credentials);
  }

  setRelayUrl(url) {
    var credentials = this.getDefaultCredentials();
    credentials.content.relayServerUrl = url;
    BridgeManager.get().saveItem(credentials);
  }

}
