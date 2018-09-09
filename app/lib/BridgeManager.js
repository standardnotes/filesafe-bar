import ComponentManager from 'sn-components-api';
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFHttpManager, SFItem } from 'standard-file-js';
import RelayManager from "./RelayManager";

const DefaultHeight = 75;

export default class BridgeManager {
  static FileItemContentTypeKey = "SN|FileSafe|File";
  static FileSafeCredentialsContentType = "SN|FileSafe|Credentials";
  static FileItemMetadataContentTypeKey = "SN|FileSafe|FileMetadata";
  static FileSafeIntegrationContentTypeKey = "SN|FileSafe|Integration";

  static BridgeEventLoadedCredentials = "BridgeEventLoadedCredentials";
  static BridgeEventReceivedItems = "BridgeEventReceivedItems";
  static BridgeEventReceivedNote = "BridgeEventReceivedNote";
  static BridgeEventSavedItem = "BridgeEventSavedItem";

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

  addEventHandler(callback) {
    let observer = {id: Math.random, callback: callback};
    this.updateObservers.push(observer);
    return observer;
  }

  removeUpdateObserver(observer) {
    this.updateObservers.splice(this.updateObservers.indexOf(observer), 1);
  }

  notifyObserversOfEvent(event) {
    for(var observer of this.updateObservers) {
      observer.callback(event);
    }
  }

  initiateBridge(onReady) {
    this.componentManager = new ComponentManager([], () => {
      onReady && onReady();
    });

    this.componentManager.setSize("container", "100%", DefaultHeight);
  }

  async createCredentials() {
    let bits = 256;
    let identifer = await SFJS.crypto.generateRandomKey(bits);
    let password = await SFJS.crypto.generateRandomKey(bits);
    let credentialParams = await SFJS.crypto.generateInitialKeysAndAuthParamsForUser(identifer, password);
    credentialParams.relayServerUrl = window.default_relay_server_url;
    let credentials = new SFItem({
      content_type: BridgeManager.FileSafeCredentialsContentType,
      content: credentialParams
    });

    this.saveItem(credentials);
    this.notifyObserversOfEvent(BridgeManager.BridgeEventLoadedCredentials);
    return credentials;
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
        this.notifyObserversOfEvent(BridgeManager.BridgeEventSavedItem);
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

  beginStreamingItem() {
    this._didBeginStreaming = true;

    this.componentManager.streamContextItem((note) => {
      this.handleReceiveNoteMessage(note);
    });

    const contentTypes = [
      BridgeManager.FileItemMetadataContentTypeKey,
      BridgeManager.FileSafeCredentialsContentType,
      BridgeManager.FileSafeIntegrationContentTypeKey
    ];

    this.componentManager.streamItems(contentTypes, (items) => {
      console.log("Received items", items);
      this.handleStreamItemsMessage(items);
    })
  }

  handleReceiveNoteMessage(note) {
    this.note = new SFItem(note);

     // Only update UI on non-metadata updates.
    if(this.note.isMetadataUpdate) { return; }

    this.notifyObserversOfEvent(BridgeManager.BridgeEventReceivedNote);
  }

  async handleStreamItemsMessage(items) {
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
      var searchResults = this.filterItems(BridgeManager.FileSafeCredentialsContentType);
      let credentials = searchResults.length > 0 && searchResults[0];
      if(credentials) {
        this.authParams = credentials.content.authParams;
        this.keys = credentials.content.keys;
        this.credentials = credentials;
        RelayManager.get().setCredentials(credentials);
        this.notifyObserversOfEvent(BridgeManager.BridgeEventLoadedCredentials);
      }
    }

    this.notifyObserversOfEvent(BridgeManager.BridgeEventReceivedItems);
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
      callback && callback(createdItems);
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

  deleteItem(item, callback) {
    this.deleteItems([item], callback);
  }

  deleteItems(items, callback) {
    this.componentManager.deleteItems(items, callback);
  }

  removeItemFromItems(item) {
    this.items = this.items.filter((candidate) => {return candidate.uuid !== item.uuid});
  }
}
