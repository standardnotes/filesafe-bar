import React from 'react';
import BridgeManager from "../lib/BridgeManager.js";
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFItemParams, SFItem } from 'standard-file-js';
import { Base64 } from 'js-base64';
import RelayManager from '../lib/RelayManager';

export default class FilesView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {files: []};

    BridgeManager.get().initiateBridge(() => {
      BridgeManager.get().beginStreamingItem();
    });

    BridgeManager.get().addUpdateObserver(() => {
      this.reload();
    })
  }

  reload() {
    var files = BridgeManager.get().filesForCurrentNote();
    console.log("Loaded files", files);
    this.setState({files: files});
  }

  componentDidMount() {
    this.configureFileForm();

    // Allow user to drag anywhere in the window
    window.addEventListener("dragover", this.onWindowDragOver, false);
    // window.addEventListener("dragleave", this.dropContainerOnExit, false);
    window.addEventListener("drop", this.onWindowDrop, false);
  }

  componentWillUnmount() {
    window.removeEventListener("dragover", this.onWindowDragOver, false);
    // window.removeEventListener("dragleave", this.dropContainerOnExit, false);
    window.removeEventListener("drop", this.onWindowDrop, false);
  }

  onWindowDragOver = (evt) => {
    console.log("on wdinwo drag over");
    evt.preventDefault();
    var id = evt.target.id;

    // this.dropContainerOnEnter();
    this.dropContainer.classList.add('is-dragover');

    evt = evt || event;
  }

  onWindowDrop = (evt) => {
    console.log("On window drop");
    evt.preventDefault();

    // this.dropContainerOnExit();

    this.handledFiles = true;
    this.dropContainer.classList.add('is-uploading');

    this.fileInput.files = evt.dataTransfer.files;
    this.handleDroppedFiles(evt.dataTransfer.files);

  }

  // dropContainerOnEnter = () => {
  //   this.dropContainer.classList.add('is-dragover');
  // }

  dropContainerOnExit = (evt) => {
    evt.preventDefault();
    this.dragging = false;
    this.dropContainer.classList.remove('is-dragover');
  }

  get dropContainer() {
    return document.getElementById("files-view");
  }

  get fileInput() {
    return document.getElementById("file-input");
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

    // dropContainer.ondragover = dropContainer.ondragenter = (evt) => {
    //   this.dropContainerOnEnter();
    //   evt.preventDefault();
    // };
    //
    // dropContainer.ondragleave = dropContainer.ondragend = this.dropContainerOnEnter;
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

  async encryptFile(data, inputFileName, fileType) {
    return BridgeManager.get().uploadFile(data, inputFileName, fileType);
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

  downloadFile = (metadata) => {
    BridgeManager.get().downloadFile(metadata).then((data) => {
      this.downloadData(this.dataURItoBinary(data), metadata.content.fileName, metadata.content.fileType);
    })
  }

  deleteFile = (metadata) => {
    if(confirm(`Are you sure you want to delete "${metadata.content.fileName}"?`)) {
      BridgeManager.get().deleteFile(metadata);
    }
  }

  render() {

    let additionalColumns = [
      {label: "Type", key: "content_type", width: 100}
    ];

    return (
      <div id="files-view">
        <div className="panel-row">
          <h3>Files ({this.state.files.length})</h3>
          <label>
            <input type="file" style={{display: "none"}} onChange={(event) => {this.handleDroppedFiles(event.target.files)}} />
            <a><i>Drag and drop a file anywhere to attach</i></a>
          </label>

        </div>
        <div>
          {this.state.files.map((file) =>
            <div>
              <p>File name:
                <strong> {file.content.fileName}</strong>
              </p>
              <div className="horizontal-group">
                  <a className="label info" onClick={() => {this.downloadFile(file)}}>Download</a>
                  <a className="danger" onClick={() => {this.deleteFile(file)}}>Delete</a>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
