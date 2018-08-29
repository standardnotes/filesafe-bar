import ComponentManager from 'sn-components-api';
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFHttpManager, SFItem } from 'standard-file-js';
import RelayManager from "./RelayManager";

const ComponentKeyCredentialsKey = "ComponentKeyCredentialsKey";

const DefaultHeight = 235;

export default class BridgeManager {
  static FileItemContentTypeKey = "SN|FileSafe|File";
  static FileItemMetadataContentTypeKey = "SN|FileSafe|FileMetadata";

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

      this.loadOrCreateCredentials().then((credentials) => {
        this.authParams = credentials.authParams;
        this.keys = credentials.keys;
        this.credentials = credentials;
      });
    });

    this.componentManager.setSize("content", "90%", "90%");
    this.componentManager.setSize("container", "100%", DefaultHeight);
  }

  async loadOrCreateCredentials() {
    let credentials = this.getComponentData(ComponentKeyCredentialsKey);
    if(!credentials) {
      let bits = 256;
      let identifer = await SFJS.crypto.generateRandomKey(bits);
      let password = await SFJS.crypto.generateRandomKey(bits);
      let credentials = await SFJS.crypto.generateInitialKeysAndAuthParamsForUser(identifer, password);
      credentials.createdAt = new Date();
      this.setComponentData(ComponentKeyCredentialsKey, credentials);
      return credentials;
    } else {
      return credentials;
    }
  }

  getCredentials = () => {
    return this.credentials;
  }

  toggleHeight() {
    if(this.expanded) {
      this.setHeightCollapsed();
    } else {
      this.setHeightExpanded();
    }
  }

  setHeightExpanded() {
    this.expanded = true;
    this.componentManager.setSize("container", "100%", 200);
  }

  setHeightCollapsed() {
    this.expanded = false;
    this.componentManager.setSize("container", "100%", DefaultHeight);
  }

  setComponentData(key, value) {
    this.componentManager.setComponentDataValueForKey(key, value);
    this.notifyObserversOfUpdate();
  }

  getComponentData(key) {
    return this.componentManager.componentDataValueForKey(key);
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

  async saveItems(items) {
    return new Promise((resolve, reject) => {
      this.componentManager.saveItems(items, (response) => {
        resolve(response);
      })
    })
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
      this.note = new SFItem(note);

      console.log("Received note", this.note);

       // Only update UI on non-metadata updates.
      if(this.note.isMetadataUpdate) {
        return;
      }

      this.notifyObserversOfUpdate();
    });

    this.componentManager.streamItems([BridgeManager.FileItemMetadataContentTypeKey], (items) => {
      for(var item of items) {
        item = new SFItem(item);

        if(item.deleted) {
          this.removeItemFromItems(item);
          continue;
        }
        if(item.isMetadataUpdate) {
          continue;
        }

        var index = this.indexOfItem(item);
        if(index >= 0) {
          this.items[index] = item;
        } else {
          this.items.push(item);
        }
      }

      this.notifyObserversOfUpdate();
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

  removeItemFromItems(item) {
    this.items = this.items.filter((candidate) => {return candidate.uuid !== item.uuid});
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

  deleteItems(items, callback) {
    this.componentManager.deleteItems(items, callback);
  }

  removeItemFromItems(item) {
    this.items = this.items.filter((candidate) => {return candidate.uuid !== item.uuid});
  }

  notifyObserversOfUpdate() {
    for(var observer of this.updateObservers) {
      observer.callback();
    }
  }
}
