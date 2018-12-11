import ComponentManager from 'sn-components-api';
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFHttpManager, SFItem } from 'standard-file-js';
import RelayManager from "./RelayManager";

const BaseHeight = 60;

const FileHeight = 75;
const MessageHavingHeight = 28;
const PerMessageHeight = 22;
const ExpandedHeight = 305;

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

  defaultRelayServerUrl() {
    return window.default_relay_server_url;
  }

  getPlatform() {
    return this.componentManager.platform;
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

    if(event == BridgeManager.BridgeEventReceivedItems) {
      this.recomputeHeight();
    }
  }

  recomputeHeight() {
    var totalHeight = BaseHeight;

    var credentials = this.filterItems(BridgeManager.FileSafeCredentialsContentType);
    if(credentials.length == 0) {
      totalHeight += PerMessageHeight;
    }

    var integrations = this.filterItems(BridgeManager.FileSafeIntegrationContentTypeKey);
    if(integrations.length == 0) {
      totalHeight += PerMessageHeight;
    }

    if(integrations.length == 0 || credentials.length == 0) {
      totalHeight += MessageHavingHeight;
    }

    if(this.expanded) {
      totalHeight = ExpandedHeight;
    }

    this.componentManager.setSize("container", "100%", totalHeight);
  }

  initiateBridge(onReady) {
    this.componentManager = new ComponentManager([], () => {
      onReady && onReady();
    });

    this.recomputeHeight();
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
    this.recomputeHeight();
  }

  setHeightCollapsed() {
    this.expanded = false;
    this.recomputeHeight();
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
      this.handleStreamItemsMessage(items);
    });
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

  createItem(item, callback) {
    this.createItems([item], callback);
  }

  createItems(items, callback) {
    for(var item of items) { item.uuid = null; }
    this.componentManager.createItems(items, (createdItems) => {
      callback && callback(createdItems);
    })
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
