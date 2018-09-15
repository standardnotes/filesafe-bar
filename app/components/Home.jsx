import React from 'react';
import KeysView from "./KeysView";
import NoteFilesView from "./NoteFilesView.js";
import AllFilesView from "./AllFilesView";
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
            <NoteFilesView/>
          </div>

          <div className="panel-section">
            <IntegrationsView/>
          </div>

          <div className="panel-section">
            <KeysView/>
          </div>

          <div className="panel-section">
            <AllFilesView/>
          </div>

        </div>
      </div>
    )
  }

}
