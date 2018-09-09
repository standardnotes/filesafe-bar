import React from 'react';
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer } from 'standard-file-js';
import BridgeManager from "../lib/BridgeManager.js";
import RelayManager from "../lib/RelayManager";
import IntegrationManager from "../lib/IntegrationManager";

export default class IntegrationsView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      integrations: []
    };

    BridgeManager.get().addEventHandler((event) => {
      this.reloadIntegrations();
      this.setState({relayServerUrl: RelayManager.get().getRelayUrl()});
    })
  }

  reloadIntegrations() {
    let integrations = IntegrationManager.get().integrations;
    this.setState({
      integrations: integrations || []
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
    let code = this.state.integrationCode;
    if(!code || code.length == 0) {
      return;
    }

    IntegrationManager.get().saveIntegrationFromCode(code);
    this.setState({integrationCode: null, showInputForm: false});
    this.reloadIntegrations();
  }

  addNewIntegrationClicked = () => {
    window.open(this.state.relayServerUrl, "_blank");
    this.setState({showInputForm: true});
  }

  cancelIntegrationForm = () => {
    this.setState({showInputForm: false});
  }

  deleteIntegration = (integration) => {
    IntegrationManager.get().deleteIntegration(integration);
  }

  setIntegrationAsDefaultUploadSource = (integration) => {
    IntegrationManager.get().setIntegrationAsDefault(integration);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  displayStringForIntegration(integration) {
    var comps = integration.content.source.split("_");
    var result = "";
    for(var comp of comps) {
      result += this.capitalizeFirstLetter(comp) + " ";
    }
    return result;
  }

  render() {
    var hasMultipleIntegrations = this.state.integrations.length > 1;

    return (
      <div>
        <div className="panel-row">
          <h4>Integrations ({this.state.integrations.length})</h4>
          {!this.state.showInputForm &&
            <div className="button info no-border" onClick={this.addNewIntegrationClicked}>
              <div className="info label">Add New</div>
            </div>
          }
        </div>

        <div id="integrations">
          {this.state.showInputForm &&
            <div className="notification default">
              <strong>New Integration</strong>
              <p>A new tab has opened. After you complete the authentication flow, enter the code you receive below.</p>
              <input
                className="title"
                type="text"
                placeholder={"Enter integration code"}
                value={this.state.integrationCode}
                onChange={this.handleTextChange}
                onKeyPress={this.handleKeyPress}
              />
              <div className="button-group" style={{marginTop: 10}}>
                <div className="button default" onClick={this.cancelIntegrationForm}>
                  <a className="">Cancel</a>
                </div>
                <div className="button info" onClick={this.submitIntegrationCode}>
                  <a className="info label">Submit</a>
                </div>
              </div>
            </div>
          }
        </div>

        <div>
          {this.state.integrations.map((integration) =>
            <div className="horizontal-group body-text-color">
              <p className="body-text-color">
                <span className={"body-text-color " + (integration.content.isDefaultUploadSource ? "bold" : undefined)}>{this.displayStringForIntegration(integration)}</span>
                {integration.content.isDefaultUploadSource &&
                  <span className="body-text-color"> (Default)</span>
                }
              </p>
              {hasMultipleIntegrations && !integration.content.isDefaultUploadSource &&
                <a className="info" onClick={() => {this.setIntegrationAsDefaultUploadSource(integration)}}>Make Default Upload Source</a>
              }
              <a className="danger" onClick={() => {this.deleteIntegration(integration)}}>Delete</a>
            </div>
          )}
        </div>
      </div>
    )
  }
}
