import React from 'react';
import BridgeManager from "../lib/BridgeManager.js";
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer } from 'standard-file-js';

export default class IntegrationsView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {integrations: []};

    BridgeManager.get().addUpdateObserver(() => {
      this.reloadIntegrations();
    })
  }

  reloadIntegrations() {
    let integrations = BridgeManager.get().getIntegrations();
    console.log("Loaded integrations", integrations);
    this.setState({
      integrations: integrations
    })
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.submitIntegrationCode();
    }
  }

  handleTextChange = (event) => {
    var text = event.target.value;
    this.setState({integrationCode: text});
  }

  submitIntegrationCode = () => {
    BridgeManager.get().saveIntegration(this.state.integrationCode);
    this.reloadIntegrations();
  }

  render() {
    return (
      <div>
        <div id="integrations">
          <input
            type="text"
            value={this.state.integrationCode}
            onChange={this.handleTextChange}
            onKeyPress={this.handleKeyPress}
          />
          <a onClick={this.submitIntegrationCode}>Submit</a>
        </div>

        <div>
          {this.state.integrations.map((integration) =>
            <p>
              Integration source: {integration.source}
            </p>
          )}
        </div>
      </div>
    )
  }
}
