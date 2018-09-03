import _ from 'lodash';
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFCryptoWeb, SFItemTransformer, SFHttpManager, SFItem, SFItemParams } from 'standard-file-js';
import RelayManager from "./RelayManager";

self.addEventListener('message', async function(e) {
  var data = e.data;

  if(data.operation == "encrypt") {
    var fileItem = new SFItem({
      content_type: data.contentType,
      content: {
        rawData: data.fileData,
        fileName: data.fileName,
        fileType: data.fileType
      }
    });

    var itemParamsObject = new SFItemParams(fileItem, data.keys, data.authParams);
    itemParamsObject.paramsForSync().then((itemParams) => {
      // Encryption complete
      self.postMessage({
        itemParams: itemParams
      });
    })
  } else if(data.operation == "decrypt") {
    SFJS.itemTransformer.decryptItem(data.item, data.keys).then(() => {
      var decryptedItem = new SFItem(data.item);
      var decryptedData = decryptedItem.content.rawData;
      if(decryptedItem.errorDecrypting) {
        self.postMessage({error: {message: "Error decrypting."}});
      } else {
        self.postMessage({
          decryptedData: decryptedData,
          decryptedItem: decryptedItem
        });
      }
    }).catch((error) => {
      console.log("Decryption error:", error);
      self.postMessage({error: error});
    })
  } else if(data.operation == "upload") {
    RelayManager.get().setCredentials(data.credentials);
    RelayManager.get().uploadFile(data.outputFileName, data.itemParams, data.integration).then((metadata) => {
      self.postMessage({metadata});
    }).catch((error) => {
      self.postMessage({error: error});
      console.log("Upload exception", error);
    });
  }

}, false);
