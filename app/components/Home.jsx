import React from 'react';
import BridgeManager from "../lib/BridgeManager.js";
import BackupExplorer from "./BackupExplorer.js";

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    BridgeManager.get().initiateBridge(() => {
      BridgeManager.get().beginStreamingItems();
      this.reload();
    });

    BridgeManager.get().addUpdateObserver(() => {
      this.reload();
    })
  }

  reload() {
    this.forceUpdate();
  }

  render() {
    return (
      <div id="home" className="panel static">
        <div className="content">
          <BackupExplorer/>
        </div>
      </div>
    )
  }

}
