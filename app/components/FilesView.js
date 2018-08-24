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
    // console.log("Loaded files", files);
    this.setState({files: files});
  }

  componentDidMount() {
    this.configureFileForm();

    const body = document.getElementsByTagName('body')[0];

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      window.addEventListener(eventName, preventDefaults, false)
    })

    function preventDefaults (e) {
      e.preventDefault()
      e.stopPropagation()
    }

    var highlight = (e) => {
      body.classList.add('highlight');
      body.classList.add('border-color');
    }

    var unhighlight = (e) => {
      body.classList.remove('highlight');
      body.classList.remove('border-color');
    }

    ['dragenter', 'dragover'].forEach((eventName) => {
      window.addEventListener(eventName, highlight, false)
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      window.addEventListener(eventName, highlight, false)
    });

    ['dragleave', 'drop'].forEach(eventName => {
      window.addEventListener(eventName, unhighlight, false)
    });

    var handleDrop = (e) => {
      let dt = e.dataTransfer;
      let files = dt.files;

      this.handleDroppedFiles(files)
    }

    window.addEventListener('drop', handleDrop, false)


    // Allow user to drag anywhere in the window
    // window.addEventListener("dragover", this.onWindowDragOver, false);
    // // window.addEventListener("dragleave", this.dropContainerOnExit, false);
    // window.addEventListener("drop", this.onWindowDrop, false);
  }

  componentWillUnmount() {
    // window.removeEventListener("dragover", this.onWindowDragOver, false);
    // // window.removeEventListener("dragleave", this.dropContainerOnExit, false);
    // window.removeEventListener("drop", this.onWindowDrop, false);
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

  selectFile = (event, metadata) => {
    var element = event.target;
    element.focus();
    if(this.state.selectedFile == metadata) {
      this.setState({selectedFile: null})
    } else {
      this.setState({selectedFile: metadata});
    }
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

  manageIntegrationsClicked = () => {
    BridgeManager.get().toggleHeight();
  }

  isFileSelected = (metadata) => {
    return this.state.selectedFile == metadata;
  }

  render() {

    let additionalColumns = [
      {label: "Type", key: "content_type", width: 100}
    ];

    return (
      <div className="sn-component" id="files-view">
        <div className="panel-row">

          <div className="files">
            <div id="add-file-button-container">
              <div className="file button success">
                <label className="no-style">
                  <input type="file" style={{display: "none"}} onChange={(event) => {this.handleDroppedFiles(event.target.files)}} />
                  <div className="label">Attach File</div>
                </label>
              </div>
            </div>

            {this.state.files.map((file) =>
              <div className="segmented-buttons">
                <div onClick={(event) => {this.selectFile(event, file)}} className={"file button info " + (this.isFileSelected(file) ? "selected border-color" : undefined)}>
                  <div className="label">
                    {file.content.fileName}
                  </div>
                </div>

                {this.isFileSelected(file) &&
                  [
                    <div onClick={() => {this.downloadFile(file)}} className="button info no-border">
                      <div className="label">Download</div>
                    </div>,

                    <div onClick={() => {this.deleteFile(file)}} className="button danger no-border">
                      <div className="label">Delete</div>
                    </div>
                  ]
                }
              </div>
            )}

          </div>

          <div className="button default no-border" onClick={this.manageIntegrationsClicked}>
            <div className="label">Settings</div>
          </div>

        </div>
      </div>
    )
  }
}
