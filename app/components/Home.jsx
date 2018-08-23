import React from 'react';
import BridgeManager from "../lib/BridgeManager.js";
import FilesView from "./FilesView.js";
import IntegrationsView from "./IntegrationsView";

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="home" className="panel static">
        <div className="content">
          <IntegrationsView/>
          <FilesView/>
        </div>
      </div>
    )
  }

}
