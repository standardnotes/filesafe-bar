import { StandardFile, SFAbstractCrypto, SFItemTransformer } from 'standard-file-js';

let AppDomain = "org.standardnotes.filevault";

export default class Item {

  constructor(json_obj) {
    this.appData = {};
    this.updateFromJSON(json_obj);

    if(!this.uuid) {
      this.uuid = SFJS.crypto.generateUUIDSync();
    }
  }

  static sortItemsByDate(items) {
    items.sort(function(a,b){
      return new Date(b.created_at) - new Date(a.created_at);
    });
  }

  get contentObject() {
    if(!this.content) {
      return {};
    }

    if(this.content !== null && typeof this.content === 'object') {
      // this is the case when mapping localStorage content, in which case the content is already parsed
      return this.content;
    }

    try {
      return JSON.parse(this.content);
    } catch (e) {
      console.log("Error parsing json", e);
      return {};
    }
  }

  get key() {
    return this.uuid;
  }

  updateFromJSON(json) {
    // _.merge(this, json);
    Object.assign(this, json);

    if(this.created_at) {
      this.created_at = new Date(this.created_at);
      this.updated_at = new Date(this.updated_at);
    } else {
      this.created_at = new Date();
      this.updated_at = new Date();
    }

    // Allows the getter to be re-invoked
    this._client_updated_at = null;

    if(json.content) {
      this.mapContentToLocalProperties(this.contentObject);
    }
  }

  refreshContentObject() {
    // Before an item can be duplicated or cloned, we must update this.content (if it is an object) with the object's
    // current physical properties, because updateFromJSON, which is what all new items must go through,
    // will call this.mapContentToLocalProperties(this.contentObject), which may have stale values if not explicitly updated.

    this.content = this.structureParams();
  }

  markAllReferencesDirty() {
    this.allReferencedObjects().forEach(function(reference){
      reference.setDirty(true);
    })
  }

  mapContentToLocalProperties(contentObj) {
    this.appData = contentObj.appData;
    if(!this.appData) {
      this.appData = {};
    }

    this.rawData = contentObj.rawData;
    this.fileName = contentObj.fileName;
    this.fileType = contentObj.fileType;
  }

  createContentJSONFromProperties() {
    return this.structureParams();
  }

  referenceParams() {
    // must override
  }

  structureParams() {
    return {
      fileName: this.fileName,
      fileType: this.fileType,
      rawData: this.rawData,
      references: this.referenceParams(),
      appData: this.appData
    }
  }

  addItemAsRelationship(item) {
    // must override
  }

  removeItemAsRelationship(item) {
    // must override
  }

  isBeingRemovedLocally() {

  }

  removeAndDirtyAllRelationships() {
    // must override
    this.setDirty(true);
  }

  removeReferencesNotPresentIn(references) {

  }

  informReferencesOfUUIDChange(oldUUID, newUUID) {
    // optional override
  }

  potentialItemOfInterestHasChangedItsUUID(newItem, oldUUID, newUUID) {
    // optional override
  }

  allReferencedObjects() {
    // must override
    return [];
  }

  createdAt() {
    return this.dateToString(this.created_at, true);
  }

  updatedAt() {
    return this.dateToString(this.client_updated_at, true);
  }

  dateToString(date, withTime) {
    return date.toLocalizedString();
  }

  doNotEncrypt() {
    return false;
  }

  /*
  App Data
  */

  setDomainDataItem(key, value, domain) {
    var data = this.appData[domain];
    if(!data) {
      data = {}
    }
    data[key] = value;
    this.appData[domain] = data;
  }

  getDomainDataItem(key, domain) {
    var data = this.appData[domain];
    if(data) {
      return data[key];
    } else {
      return null;
    }
  }

  setAppDataItem(key, value) {
    this.setDomainDataItem(key, value, AppDomain);
  }

  getAppDataItem(key) {
    return this.getDomainDataItem(key, AppDomain);
  }
}
