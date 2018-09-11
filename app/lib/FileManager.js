import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFHttpManager, SFItem } from 'standard-file-js';
import RelayManager from "./RelayManager";
import BridgeManager from "./BridgeManager";
import IntegrationManager from "./IntegrationManager";
import CredentialManager from "./CredentialManager"

// const EncryptionWorker = require("worker-loader?name=hash.worker.js!./encryption.worker");
import EncryptionWorker from './encryption.worker.js';

export default class FileManager {
  static FileItemContentTypeKey = "SN|FileSafe|File";
  static FileItemMetadataContentTypeKey = "SN|FileSafe|FileMetadata";

  /* Singleton */
  static instance = null;
  static get() {
    if (this.instance == null) { this.instance = new FileManager(); }
    return this.instance;
  }

  // Returns the metadata objects associated with the current note
  filesForCurrentNote() {
    return BridgeManager.get().getFileItems().filter((metadataItem) => {
      return metadataItem.hasRelationshipWithItem(BridgeManager.get().note);
    })
  }

  filesEncryptedWithCredential(credential) {
    var allFiles = BridgeManager.get().getFileItems();
    return allFiles.filter((file) => {
      return _.find(file.content.references, {uuid: credential.uuid});
    })
  }

  async deleteFile(metadataItem) {
    return new Promise((resolve, reject) => {
      BridgeManager.get().deleteItems([metadataItem], (response) => {
        if(response.deleted) {
          let integration = IntegrationManager.get().integrationForFile(metadataItem);
          if(integration) {
            RelayManager.get().deleteFile(metadataItem, integration).then((relayResponse) => {
              resolve();
            })
          }
        } else {
          resolve(response);
        }
      });
    })
  }

  async uploadFile(itemParams, inputFileName, fileType, credential) {
    var integration = IntegrationManager.get().getDefaultUploadSource();
    var outputFileName = `${inputFileName}.sf.json`;

    return new Promise((resolve, reject) => {
      const worker = new EncryptionWorker();

      worker.addEventListener("message", (event) => {
        var data = event.data;
        if(data.error) {
          reject(data.error);
          return;
        }
        var metadataItem = new SFItem({
          content_type: BridgeManager.FileItemMetadataContentTypeKey,
          content: {
            serverMetadata: event.data.metadata,
            fileName: inputFileName,
            fileType: fileType
          }
        });

        metadataItem.addItemAsRelationship(BridgeManager.get().note);
        metadataItem.addItemAsRelationship(credential);
        BridgeManager.get().createItem(metadataItem);
        resolve();
      });

      var operation = "upload";
      var params = {
        outputFileName: outputFileName,
        itemParams: itemParams,
        integration: integration,
        operation: operation,
        credentials: CredentialManager.get().getDefaultCredentials()
      };

      worker.postMessage(params);
    })
  }

  async downloadFile(metadataItem) {
    // TODO: Use web worker for this as well?
    var integration = IntegrationManager.get().integrationForFile(metadataItem);
    if(!integration) {
      var serverMetadata = metadataItem.content.serverMetadata;
      if(serverMetadata) {
        alert(`Unable to find integration named '${serverMetadata.source}'.`);
      } else {
        alert(`Unable to find integration for this file.`);
      }
      throw "Unable to find integration";
      return;
    }
    return RelayManager.get().downloadFile(metadataItem, integration).then((data) => {
      var item = data.items[0];
      return item;
    })
  }

  async encryptFile(data, inputFileName, fileType, credential) {
    return new Promise((resolve, reject) => {
      const worker = new EncryptionWorker();

      worker.addEventListener("message", function (event) {
        resolve(event.data.itemParams);
      });

      worker.postMessage({
        operation: "encrypt",
        keys: credential.content.keys,
        authParams: credential.content.authParams,
        contentType: BridgeManager.FileItemContentTypeKey,
        fileData: data,
        fileName: inputFileName,
        fileType: fileType
      });
    })
  }

  async decryptFile(item, credential) {
    return new Promise((resolve, reject) => {
      const worker = new EncryptionWorker();

      worker.addEventListener("message", function (event) {
        var data = event.data;
        if(data.error) {
          reject(data.error);
          return;
        }

        resolve(data);
      });

      worker.postMessage({
        operation: "decrypt",
        keys: credential.content.keys,
        item: item
      });
    })
  }

}
