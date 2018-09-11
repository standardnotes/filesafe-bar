import React from 'react';
import KeysView from "./KeysView";
import FilesView from "./FilesView.js";
import IntegrationsView from "./IntegrationsView";

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {messages: []};
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
