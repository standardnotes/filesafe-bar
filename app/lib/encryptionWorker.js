import _ from 'lodash';
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFCryptoWeb, SFItemTransformer, SFHttpManager, SFItem, SFItemParams } from 'standard-file-js';

self.addEventListener('message', async function(e) {
  // console.log("Worker received message", e.data, self.SFJS);
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
      console.log("Finished params for sync...");
      // Encryption complete
      self.postMessage({
        itemParams: itemParams
      });
    })
  } else if(data.operation == "decrypt") {
    return SFJS.itemTransformer.decryptItem(data.item, data.keys).then(() => {
      var decryptedItem = new SFItem(data.item);
      var decryptedData = decryptedItem.content.rawData;
      self.postMessage({
        decryptedData: decryptedData
      });
    })
  }

}, false);
