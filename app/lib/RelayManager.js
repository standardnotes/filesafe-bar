import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFHttpManager } from 'standard-file-js';

export default class RelayManager {

  /* Singleton */
  static instance = null;
  static get() {
    if (this.instance == null) { this.instance = new RelayManager(); }
    return this.instance;
  }

  constructor() {
    this.httpManger = new SFHttpManager();
    this.httpManger.setJWTRequestHandler(() => {});

    this.relayServerUrl = "http://localhost:3020";
  }

  uploadFile(name, item, integration, callback) {
    // integration.source
    // integration.authorization

    let url = `${this.relayServerUrl}/integrations/save-item`;
    let params = {
      file: {
        name: name,
        item: item
      },
      source: integration.source,
      authorization: integration.authorization
    }

    console.log("Uploading params to relay server", params);

    this.httpManger.postAbsolute(url, params, (response) => {
      console.log("Upload success response", response);
    }, (errorResponse) => {
      console.log("Upload error response", errorResponse);
    })
  }

}
