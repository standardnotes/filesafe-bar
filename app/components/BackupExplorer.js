import React from 'react';
import BridgeManager from "../lib/BridgeManager.js";
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer } from 'standard-file-js';
import Item from "../lib/item";
import { Base64 } from 'js-base64';

export default class BackupExplorer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    SFJS.crypto.generateInitialKeysAndAuthParamsForUser("me@bitar.io", "password").then((results) => {
      console.log("Computed initial values:", results);
      let keys = results.keys;
      let auth_params = results.auth_params;

      this.keys = keys;
      this.auth_params = auth_params;

      var item = new Item({
        content_type: "SN|FileVault|File",
        content: {
          rawData: "Hello, world."
        }
      });

      SFJS.itemTransformer.encryptItem(item, this.keys).then((encryptedItem) => {
        console.log("Encrypted item", encryptedItem);
        encryptedItem.uuid = item.uuid;
        SFJS.itemTransformer.decryptItem(encryptedItem, this.keys).then(() => {
          console.log("Decrypted item", encryptedItem);
          console.assert(!encryptedItem.errorDecrypting);
        });
      });
    });
  }

  componentDidMount() {
    this.configureFileForm();

    // Allow user to drag anywhere in the window
    window.addEventListener("dragover", this.onWindowDragOver, false);
    window.addEventListener("drop", this.onWindowDrop, false);
  }

  componentWillUnmount() {
    window.removeEventListener("dragover", this.onWindowDragOver, false);
    window.removeEventListener("drop", this.onWindowDrop, false);
  }

  onWindowDragOver = (evt) => {
    this.dropContainerOnEnter();
    evt = evt || event;
    evt.preventDefault();
  }

  onWindowDrop = (evt) => {
    this.dropContainerOnExit();

    this.handledFiles = true;
    this.dropContainer.classList.add('is-uploading');

    this.fileInput.files = evt.dataTransfer.files;
    this.handleDroppedFiles(evt.dataTransfer.files);

    evt.preventDefault();
  }

  get dropContainer() {
    return document.getElementById("drop-container");
  }

  get fileInput() {
    return document.getElementById("file-input");
  }

  dropContainerOnEnter = () => {
    this.dropContainer.classList.add('is-dragover');
  }

  dropContainerOnExit = () => {
    this.dropContainer.classList.remove('is-dragover');
  }

  configureFileForm() {
    var fileInput = this.fileInput;
    var dropContainer = this.dropContainer;
    if(!fileInput) {
      return;
    }

    fileInput.onchange = (event) => {
      // On firefox, this event doesnt get triggered. INstead we handle it on window.addEventListener("drop")
      // Which gets called on all browsers
      let files = event.target.files;
      if(!this.handledFiles) {
        this.handleDroppedFiles(files);
      }
    };

    dropContainer.ondragover = dropContainer.ondragenter = (evt) => {
      this.dropContainerOnEnter();
      evt.preventDefault();
    };

    dropContainer.ondragleave = dropContainer.ondragend = this.dropContainerOnEnter;
  }


  reset() {
    this.setState({rawData: null, decryptedItems: null, requestPassword: false});
  }

  handleDroppedFiles = (files) => {
    let file = files[0];
    // console.log("Dropped file", file);

    var reader = new FileReader();
    var decrypt = false;

    reader.onload = (e) => {
      var data = e.target.result;
      // console.log("Read file data", data);
      if(decrypt) {
        this.decryptFile(data);
      } else {
        this.encryptFile(data, file.name, file.type);
      }
    }

    if(file.name.endsWith(".sf") || file.name.endsWith(".json")) {
      decrypt = true;
      reader.readAsText(file);
    } else {
      reader.readAsDataURL(file);
    }
  }

  encryptFile(data, fileName, fileType) {
    var writeData = data;
    var item = new Item({
      content_type: "SN|FileVault|File",
      content: {
        rawData: writeData,
        fileName: fileName,
        fileType: fileType
      }
    });

    SFJS.itemTransformer.encryptItem(item, this.keys).then((encryptedItem) => {
      encryptedItem.uuid = item.uuid;
      this.downloadData(JSON.stringify(encryptedItem, null, 2 /* pretty print */), `${fileName}.sf.json`);
    })
  }

  decryptFile(data) {
    let parsedData = JSON.parse(data);

    SFJS.itemTransformer.decryptItem(parsedData, this.keys).then(() => {
      var decryptedItem = new Item(parsedData);
      // console.log("Decrypted item result:", decryptedItem);

      var urlData = decryptedItem.rawData;
      // console.log("Decrypted raw data", urlData);
      this.downloadData(this.dataURItoBinary(urlData), decryptedItem.fileName, decryptedItem.fileType);
    })
  }

  dataURItoBinary(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Uint8Array(array);
}

  downloadData(data, fileName, fileType) {
    var link = document.createElement('a');
    link.setAttribute('download', fileName);
    link.href = this.hrefForData(data, fileType);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  hrefForData(data, fileType) {
    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (this.textFile !== null) {
      window.URL.revokeObjectURL(this.textFile);
    }

    this.textFile = window.URL.createObjectURL(new Blob([data], {type: fileType ? fileType : 'text/json'}));

    // returns a URL you can use as a href
    return this.textFile;
  }

  render() {

    let additionalColumns = [
      {label: "Type", key: "content_type", width: 100}
    ];

    return (
      <div id="backups">
        <div id="drop-container" className="notification info dashed">
          <div>
            <form id="file-attacher-form">
              <label class="file-input-wrapper">
                <h3 class="instructions-label"><strong>Drag and Drop</strong> or select a file to add it to your vault.</h3>
                <input id="file-input" type="file" name="file" class="file-input" />
              </label>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
