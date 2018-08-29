import React from 'react';
import BridgeManager from "../lib/BridgeManager.js";
import FilesView from "./FilesView.js";
import IntegrationsView from "./IntegrationsView";
import KeysView from "./KeysView";

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="home" className="panel static">
        <div className="content">

          <div className="panel-section">
            <FilesView/>
          </div>

          <div className="panel-section">
            <IntegrationsView/>
          </div>

          <div className="panel-section">
            <KeysView/>
          </div>

        </div>
      </div>
    )
  }

}
