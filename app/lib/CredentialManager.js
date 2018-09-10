import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFHttpManager, SFItem } from 'standard-file-js';
import BridgeManager from "./BridgeManager";
import IntegrationManager from "./IntegrationManager";
import RelayManager from "./RelayManager";
import FileManager from "./FileManager";

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
    // clear current credentials, search results should contain all items and not just new incoming stuff.
    this.credentials = [];

    var searchResults = BridgeManager.get().filterItems(BridgeManager.FileSafeCredentialsContentType);
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
      this.didLoadCredentials();
    }
  }

  async createNewCredentials() {
    let bits = 256;
    let identifer = await SFJS.crypto.generateRandomKey(bits);
    let password = await SFJS.crypto.generateRandomKey(bits);

    let credentialParams = await SFJS.crypto.generateInitialKeysAndAuthParamsForUser(identifer, password);
    credentialParams.isDefault = this.credentials.length == 0;

    let credentials = new SFItem({
      content_type: BridgeManager.FileSafeCredentialsContentType,
      content: credentialParams
    });

    BridgeManager.get().saveItem(credentials);
    this.didLoadCredentials();
    return credentials;
  }

  didLoadCredentials() {
    BridgeManager.get().notifyObserversOfEvent(BridgeManager.BridgeEventLoadedCredentials);

    this.migrateRelayUrlsFromCredentialsToIntegrations();
  }

  migrateRelayUrlsFromCredentialsToIntegrations() {
    // Migrate from old format where relay url was saved into credentials.
    // We now want to save relay urls as part of individual integrations.

    var toSave = [];

    var integrations = IntegrationManager.get().integrations;
    for(var credential of this.credentials) {
      if(credential.content.relayServerUrl) {
        for(var integration of integrations) {
          integration.content.relayUrl = credential.content.relayServerUrl;
          delete credential.content.relayServerUrl;
          toSave.push(integration);
        }

        toSave.push(credential);
      }
    }

    BridgeManager.get().saveItems(toSave);
  }

  numberOfFilesEncryptedWithCredential(credential) {
    return FileManager.get().filesEncryptedWithCredential(credential).length;
  }

  credentialForFile(file) {
    return this.credentials.find((candidate) => {
      return _.find(file.content.references, {uuid: candidate.uuid});
    })
  }

  getAllCredentials() {
    return this.credentials;
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

  setCredentialAsDefault = (credential) => {
    let currentDefault = this.getDefaultCredentials();
    if(currentDefault) {
      currentDefault.content.isDefault = false;
    }
    credential.content.isDefault = true;

    BridgeManager.get().saveItems([currentDefault, credential]);
  }

  deleteCredential = (credential) => {
    BridgeManager.get().deleteItem(credential);
  }

  saveCredential(credentials) {
    BridgeManager.get().saveItem(credentials);
  }

}
