import React from 'react';
import FileManager from '../lib/FileManager';
import CredentialManager from '../lib/CredentialManager';
import Utils from '../lib/Utils';

export default class FilesView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  downloadFile = async (metadata) => {
    this.setState({status: "Downloading..."});

    let credential = CredentialManager.get().credentialForFile(metadata);

    return FileManager.get().downloadFile(metadata).then((item) => {
      this.setState({status: "Decrypting..."});
      return FileManager.get().decryptFile(item, credential).then((data) => {
        Utils.downloadData(Utils.base64toBinary(data.decryptedData), metadata.content.fileName, metadata.content.fileType);
        this.setState({status: null, selectedFile: null});
      }).catch((decryptionError) => {
        this.flashError("Error decrypting file.");
      })
    }).catch((downloadError) => {
      console.log("Error downloading file", downloadError);
      this.flashError("Error downloading file.");
    })
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

  flashError(error) {
    this.setState({status: error, statusClass: "danger"});
    setTimeout(() => {
      this.setState({status: null, statusClass: null});
    }, 2500);
  }

  deleteFile = (metadata) => {
    FileManager.get().deleteFile(metadata);
  }

  isFileSelected = (metadata) => {
    return this.state.selectedFile == metadata;
  }

  elementForFile = (file) => {
    return (
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
    )
  }

  render() {
    var statusClass = this.state.statusClass ? this.state.statusClass : "info";
    var hasSpinner = statusClass == "info";

    var elements = [];

    if(this.state.status) {
      elements.push((
        <div id="file-status" className="horizontal-group">
          {hasSpinner &&
            <div className="spinner info small" />
          }
          <div className={statusClass}>{this.state.status}</div>
        </div>
      ))
    }

    var fileElements = this.props.files.map((file) => {return this.elementForFile(file)});
    if(fileElements.length > 0) {
      elements = elements.concat(fileElements);
    }
    return elements;
  }
}
