import React from 'react';
import BridgeManager from "../lib/BridgeManager.js";
import RelayManager from "../lib/RelayManager";

export default class ServerSettingsView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {credentials: {}};

    BridgeManager.get().addUpdateObserver(() => {
      this.setState({relayUrl: RelayManager.get().getRelayUrl()});
    })
  }

  changeUrlPressed = () => {
    this.setState({showForm: true});
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.submitServerChange();
    }
  }

  handleTextChange = (event) => {
    var text = event.target.value;
    this.setState({newRelayUrl: text});
  }

  submitServerChange = () => {
    let url = this.state.newRelayUrl;
    if(!url || url.length == 0) {
      return;
    }

    if(!confirm(`Change relay server to '${url}'?`)) {
      return;
    }

    BridgeManager.get().setRelayUrl(url);

    this.setState({relayUrl: url, showForm: false, newRelayUrl: null});
  }

  render() {
    var relayUrl = this.state.relayUrl;
    return (
      <div>
        <div className="panel-row">
          <h4>Relay Server Settings</h4>
        </div>

        <div className="horizontal-group">
          {this.state.showForm &&
            <input
              className="title"
              type="url"
              placeholder={"Enter relay server URL"}
              value={this.state.newRelayUrl}
              onChange={this.handleTextChange}
              onKeyPress={this.handleKeyPress}
            />
          }
          <p>{relayUrl}</p>
          <a className="info" onClick={this.changeUrlPressed}>Change</a>
        </div>
        <p className="faded">
          The relay server is responsible for communicating between this FileSafe extension and your configured cloud providers.
          The relay server only ever handles encrypted data and serves as a temporary transfer space without retaining any information.
        </p>
      </div>
    )
  }
}
