import React from 'react';
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFItemParams, SFItem } from 'standard-file-js';

import BridgeManager from "../lib/BridgeManager.js";
import FileManager from '../lib/FileManager';
import IntegrationManager from '../lib/IntegrationManager';
import CredentialManager from '../lib/CredentialManager';
import Utils from '../lib/Utils';
import MessagesManager from "../lib/MessagesManager";
import MessagesView from "./MessagesView.js";
import FilesView from "./FilesView"

export default class NoteFilesView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      files: [],
      messages: []
    };

    BridgeManager.get().initiateBridge(() => {
      BridgeManager.get().beginStreamingItem();
    });

    BridgeManager.get().addEventHandler((event) => {
      this.reload();
    });
  }

  async reload() {
    var messages = await MessagesManager.get().getMessages();
    var files = FileManager.get().filesForCurrentNote();
    this.setState({
      files: files,
      messages: messages
    });
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
  }

  componentWillUnmount() {
    // TODO: Deregister window listeners
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
  }

  reset() {
    this.setState({rawData: null, decryptedItems: null, requestPassword: false});
  }

  async readFile(file) {
    const MegabyteLimit = 50;
    const BytesInMegabyte = 1000000; // 50mb
    const ByteLimit = MegabyteLimit * BytesInMegabyte;

    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      let decrypt = false;

      reader.onload = async (e) => {
        var data = e.target.result;
        if(decrypt) {
          data = JSON.parse(data);
          var item = data.items[0];
          this.decryptDraggedFile(item);
          resolve();
        } else {
          var arrayBuffer = data;
          var bytes = arrayBuffer.byteLength;
          if(bytes > ByteLimit) {
            alert(`The maximum upload size is ${MegabyteLimit} megabytes per file.`);
            this.setState({status: null});
            resolve();
            return;
          }
          var string = await SFJS.crypto.arrayBufferToBase64(arrayBuffer);
          await this.encryptFile(string, file.name, file.type);
          resolve();
        }
      }

      this.setState({status: "Reading file..."});

      if(file.name.endsWith(".sf") || file.name.endsWith(".json")) {
        decrypt = true;
        reader.readAsText(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
    })
  }

  handleDroppedFiles = async (files) => {
    if(IntegrationManager.get().integrations.length == 0) {
      alert("Please set up at least one integration before attempting to upload a file. To do this, press Expand, and select Add New in the Integrations section.");
      return;
    }

    for(let file of files) {
      if(!file) {
        // Can be the case if you're dragging some text or something
        continue;
      }

      await this.readFile(file);
    }

    setTimeout(() => {
      this.setState({status: null});
    }, 2000);
  }

  async decryptDraggedFile(item) {
    this.setState({status: "Decrypting..."});

    return FileManager.get().decryptFile(item).then((data) => {
      var item = data.decryptedItem;
      Utils.downloadData(Utils.base64toBinary(data.decryptedData), item.content.fileName, item.content.fileType);
      this.setState({status: null});
    }).catch((decryptionError) => {
      this.flashError("Error decrypting file.");
    })
  }

  async wait(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve();
      }, seconds * 1000.0);
    })
  }

  async encryptFile(data, inputFileName, fileType) {
    this.setState({status: "Encrypting..."});

    let credential = CredentialManager.get().getDefaultCredentials();

    return FileManager.get().encryptFile(data, inputFileName, fileType, credential).then(async (itemParams) => {
      this.setState({status: "Uploading..."});
      await this.wait(0.5);

      return FileManager.get().uploadFile(itemParams, inputFileName, fileType, credential).then(() => {
        this.setState({status: "Upload Success."});


      }).catch((uploadError) => {
        this.flashError("Error uploading file.");
      })
    })
  }

  flashError(error) {
    this.setState({status: error, statusClass: "danger"});
    setTimeout(() => {
      this.setState({status: null, statusClass: null});
    }, 2500);
  }

  manageIntegrationsClicked = () => {
    this.setState({expanded: !this.state.expanded});
    BridgeManager.get().toggleHeight();
  }

  render() {
    var statusClass = this.state.statusClass ? this.state.statusClass : "info";
    var hasSpinner = statusClass == "info";

    return (
      <div className="sn-component files-view">

        <div className="sk-panel-row align-top">

          <div className="files">

            {this.state.messages.length > 0 &&
              <div id="messages-container" className="sk-panel-section">
                <MessagesView messages={this.state.messages}/>
              </div>
            }

            {this.state.status &&
              <div id="file-status" className="sk-horizontal-group">
                {hasSpinner &&
                  <div className="sk-spinner info small" />
                }
                <div className={statusClass}>{this.state.status}</div>
              </div>
            }
            <div id="add-file-button-container">
              <div className="file sk-button info">
                <label className="no-style">
                  <input type="file" style={{display: "none"}} onChange={(event) => {this.handleDroppedFiles(event.target.files)}} />
                  <div className="sk-label">Attach File</div>
                </label>
              </div>
            </div>

            <FilesView files={this.state.files} />
          </div>

          <div className="sk-button neutral no-border" onClick={this.manageIntegrationsClicked}>
            <div className="sk-label">{this.state.expanded ? "Collapse" : "Expand"}</div>
          </div>

        </div>
      </div>
    )
  }
}
