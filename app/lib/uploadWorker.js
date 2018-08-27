import _ from 'lodash';
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFCryptoWeb, SFItemTransformer, SFHttpManager, SFItem, SFItemParams } from 'standard-file-js';

self.addEventListener('message', async function(e) {
  // console.log("Worker received message", e.data, self.SFJS);
  var data = e.data;

  RelayManager.get().uploadFile(data.outputFileName, data.itemParams, data.integration).then((metadata) => {
    var metadataItem = new SFItem({
      content_type: BridgeManager.FileItemMetadataContentTypeKey,
      content: {
        serverMetadata: metadata,
        fileName: inputFileName,
        fileType: fileType
      }
    });

    metadataItem.addItemAsRelationship(this.note);
    this.saveItems([metadataItem]);
  }).catch((error) => {

  });
}, false);
