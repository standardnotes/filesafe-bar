import React from 'react';
import BridgeManager from "../lib/BridgeManager.js";
import FileManager from "../lib/FileManager.js";
import FilesView from "./FilesView";

export default class AllFilesView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {files: []};

    BridgeManager.get().addEventHandler((event) => {
      this.setState({files: FileManager.get().getAllFiles()})
    });
  }

  toggleVisibility = () => {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    return (
      <div className="files-view">
        <div className="panel-row justify-left">
          <div className="horizontal-group">
            <h4>All Files ({this.state.files.length})</h4>
            <a className="info" onClick={this.toggleVisibility}>{this.state.expanded ? "Hide" : "Show"}</a>
          </div>
        </div>

        {this.state.expanded && 
          <div className="panel-row">
            <div className="files">
              <FilesView files={this.state.files}/>
            </div>
          </div>
        }

      </div>
    )
  }
}
