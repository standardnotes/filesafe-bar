import ComponentManager from 'sn-components-api';
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFHttpManager } from 'standard-file-js';

const ComponentKeyCredentialsKey = "ComponentKeyCredentialsKey";
const ComponentKeyIntegrationsArrayKey = "ComponentKeyIntegrationsArrayKey";

export default class BridgeManager {

  /* Singleton */
  static instance = null;
  static get() {
    if (this.instance == null) { this.instance = new BridgeManager(); }
    return this.instance;
  }

  constructor(onReceieveItems) {
    this.updateObservers = [];
    this.items = [];
    this.size = null;
  }

  addUpdateObserver(callback) {
    let observer = {id: Math.random, callback: callback};
    this.updateObservers.push(observer);
    return observer;
  }

  removeUpdateObserver(observer) {
    this.updateObservers.splice(this.updateObservers.indexOf(observer), 1);
  }

  initiateBridge(onReady) {
    this.componentManager = new ComponentManager([], () => {
      onReady && onReady();
    });

    this.componentManager.acceptsThemes = false;

    this.componentManager.setSize("content", "90%", "90%");
  }

  setComponentData(key, value) {
    this.componentManager.setComponentDataValueForKey(key, value);
  }

  getComponentData(key) {
    return this.componentManager.componentDataValueForKey(key);
  }

  async loadOrCreateCredentials() {
    let credentials = this.getComponentData(ComponentKeyCredentialsKey);
    if(!credentials) {
      let bits = 256;
      let identifer = await SFJS.crypto.generateRandomKey(bits);
      let password = await SFJS.crypto.generateRandomKey(bits);
      let credentials = await SFJS.crypto.generateInitialKeysAndAuthParamsForUser(identifer, password);
      this.setComponentData(ComponentKeyCredentialsKey, credentials);
      return credentials;
    } else {
      return credentials;
    }
  }

  getItemAppDataValue(item, key) {
    return this.componentManager.getItemAppDataValue(item, key);
  }

  getSelfComponentUUID() {
    return this.componentManager.getSelfComponentUUID();
  }

  didBeginStreaming() {
    return this._didBeginStreaming;
  }

  getIntegrations() {
    var integrationStrings = this.getComponentData(ComponentKeyIntegrationsArrayKey) || [];
    var integrations = [];

    for(var integrationBase64String of integrationStrings) {
      var jsonString = atob(integrationBase64String);
      var integration = JSON.parse(jsonString);
      integrations.push(integration);
    }
    return integrations;
  }

  saveIntegration(code) {
    let integrations = this.getIntegrations();
    integrations.push(code);
    this.setComponentData(ComponentKeyIntegrationsArrayKey, integrations);
  }

  categorizedItems() {
    var types = {};
    for(var item of this.items) {
      var array = types[item.content_type];
      if(!array) {
        array = [];
        types[item.content_type] = array;
      }
      array.push(item);
    }
    return types;
  }

  beginStreamingItem() {
    this._didBeginStreaming = true;
    this.componentManager.streamContextItem((note) => {
      this.note = note;

      console.log("Received note", note);

       // Only update UI on non-metadata updates.
      if(note.isMetadataUpdate) {
        return;
      }

      this.notifyObserversOfUpdate();
    });
  }

  createItems(items, callback) {
    for(var item of items) { item.uuid = null; }
    this.componentManager.createItems(items, (createdItems) => {
      callback(createdItems);
    })
  }

  indexOfItem(item) {
    for(var index in this.items) {
      if(this.items[index].uuid == item.uuid) {
        return index;
      }
    }
    return -1;
  }

  deleteItems(items) {
    this.componentManager.deleteItems(items);
  }

  removeItemFromItems(item) {
    this.items = this.items.filter((candidate) => {return candidate.uuid !== item.uuid});
  }

  notifyObserversOfUpdate() {
    console.log("Notify observers");
    for(var observer of this.updateObservers) {
      observer.callback();
    }
  }

  humanReadableTitleForExtensionType(type, pluralize) {
    let mapping = {
      "Note" : "Note",
      "Tag" : "Tag",
      "Extension" : "Action",
      "SF|Extension" : "Server Extension",
      "SN|Theme" : "Theme",
      "SN|Editor" : "Editor",
      "SN|Component" : "Component"
    }

    var value = mapping[type];
    if(!value) {
      value = type;
    }
    else if(pluralize) {
      value += "s";
    }
    return value;
  }
}
