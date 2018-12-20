import React from 'react';
import KeysView from "./KeysView";
import NoteFilesView from "./NoteFilesView.js";
import AllFilesView from "./AllFilesView";
import IntegrationsView from "./IntegrationsView";
import BridgeManager from "../lib/BridgeManager.js";

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {messages: []};

    BridgeManager.get().addEventHandler((event) => {
      let platform = BridgeManager.get().getPlatform();
      if(this.state.platform != platform) {
        this.setState({platform: platform});
        this.applyPlatformClass();
      }
    })
  }

  applyPlatformClass() {
    document.querySelector("html").classList.add(this.state.platform);
    this.reloadScrollBars();
  }

  reloadScrollBars() {
    // For some reason, scrollbars don't update when the className for this.state.platform is set dynamically.
    // We're doing everything right, but on Chrome Windows, the scrollbars don't reload if adding className after
    // the page already loaded. So this seems to work in manually reloading.
    var container = document.querySelector("body");
    container.style.display = "none";
    setTimeout(() => {
      container.style.display = "block";
    }, 0);
  }

  render() {
    return (
      <div id="home" className={"sk-panel static"}>
        <div id="main-content" className="sk-panel-content">

          <div className="sk-panel-section">
            <NoteFilesView/>
          </div>

          <div className="sk-panel-section">
            <IntegrationsView/>
          </div>

          <div className="sk-panel-section">
            <KeysView/>
          </div>

          <div className="sk-panel-section">
            <AllFilesView/>
          </div>

        </div>
      </div>
    )
  }

}
