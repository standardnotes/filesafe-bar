import ComponentManager from 'sn-components-api';
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFHttpManager, SFItem } from 'standard-file-js';
import RelayManager from "./RelayManager";

// const DefaultRelayServer = isDevelopmentEnv ? "http://localhost:3020" : "https://filesafe.standardnotes.org";

const DefaultHeight = 75;

export default class BridgeManager {
  static FileItemContentTypeKey = "SN|FileSafe|File";
  static FileSafeCredentialsContentType = "SN|FileSafe|Credentials";
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
    });

    this.componentManager.setSize("content", "90%", "90%");
    this.componentManager.setSize("container", "100%", DefaultHeight);
  }

  async loadOrCreateCredentials() {
    var searchResults = this.filterItems(BridgeManager.FileSafeCredentialsContentType);
    let credentials = searchResults.length > 0 && searchResults[0];
    if(!credentials) {
      let bits = 256;
      let identifer = await SFJS.crypto.generateRandomKey(bits);
      let password = await SFJS.crypto.generateRandomKey(bits);
      let credentialParams = await SFJS.crypto.generateInitialKeysAndAuthParamsForUser(identifer, password);
      credentialParams.relayServerUrl = window.default_relay_server_url;

      credentials = new SFItem({
        content_type: BridgeManager.FileSafeCredentialsContentType,
        content: credentialParams
      });

      this.saveItem(credentials);
      return credentials;
    } else {
      return credentials;
    }
  }

  getCredentials = () => {
    return this.credentials;
  }

  saveCredentials() {
    this.saveItem(this.getCredentials());
  }

  setRelayUrl(url) {
    var credentials = this.getCredentials();
    credentials.content.relayServerUrl = url;
    this.saveItem(credentials);
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
    this.componentManager.setSize("container", "100%", 500);
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

  async saveItem(item) {
    return this.saveItems([item]);
  }

  async saveItems(items) {
    return new Promise((resolve, reject) => {
      this.componentManager.saveItems(items, (response) => {
        resolve(response);
      })
    })
  }

  filterItems(contentType) {
    return this.items.filter((item) => {
      return item.content_type == contentType;
    })
  }

  getFileItems() {
    return this.filterItems(BridgeManager.FileItemMetadataContentTypeKey);
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
      this.handleReceiveNoteMessage(note);
    });

    const contentTypes = [BridgeManager.FileItemMetadataContentTypeKey, BridgeManager.FileSafeCredentialsContentType];
    this.componentManager.streamItems(contentTypes, (items) => {
      this.handleStreamItemsMessage(items);
    })
  }

  handleReceiveNoteMessage(note) {
    this.note = new SFItem(note);

     // Only update UI on non-metadata updates.
    if(this.note.isMetadataUpdate) { return; }

    this.notifyObserversOfUpdate();
  }

  handleStreamItemsMessage(items) {
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

    if(!this.credentials) {
      this.loadOrCreateCredentials().then((credentials) => {
        this.authParams = credentials.content.authParams;
        this.keys = credentials.content.keys;
        this.credentials = credentials;
        RelayManager.get().setCredentials(credentials);
        this.notifyObserversOfUpdate();
      });
    }

    this.notifyObserversOfUpdate();
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
