import React from 'react';
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer } from 'standard-file-js';
import BridgeManager from "../lib/BridgeManager.js";
import RelayManager from "../lib/RelayManager";
import Utils from "../lib/Utils";
import IntegrationManager from "../lib/IntegrationManager";
import CredentialManager from "../lib/CredentialManager";

export default class KeysView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {credentials: []};

    BridgeManager.get().addEventHandler((event) => {
      this.setState({credentials: CredentialManager.get().getAllCredentials()});
    })
  }

  exportCredential = (credential) => {
    var base64 = btoa(JSON.stringify(credential, null, 2));
    var data = Utils.base64toBinary(base64);
    Utils.downloadData(data, `sn-filesafe-keys-${credential.created_at.toISOString()}.json`, 'text/json');
  }

  deleteCredential = (credential) => {
    if(this.numFilesForCredential(credential) != 0) {
      alert("This key has files encrypted with it and cannot be deleted. First delete any associated files, then try again.");
      return;
    }

    CredentialManager.get().deleteCredential(credential);
  }

  createNewKeys = () => {
    CredentialManager.get().createNewCredentials();
  }

  labelForCredential = (credential) => {
    return credential.created_at.toLocaleString();
  }

  numFilesForCredential = (credential) => {
    return CredentialManager.get().numberOfFilesEncryptedWithCredential(credential);
  }

  setCredentialAsDefault = (credential) => {
    CredentialManager.get().setCredentialAsDefault(credential);
  }

  render() {
    return (
      <div>
        <div className="sk-panel-row">
          <div className="sk-h3">Keys ({this.state.credentials.length})</div>
          <div className="sk-button info no-border" onClick={this.createNewKeys}>
            <div className="sk-label">Create New</div>
          </div>
        </div>

        <div>
          {this.state.credentials.map((credential) =>
            <div className="sk-panel-row">
              <div className="sk-horizontal-group">
                <div className={credential.content.isDefault ? "bold" : undefined}>{this.labelForCredential(credential)}</div>
                {credential.content.isDefault &&
                  <span> (Default)</span>
                }
              {this.state.credentials.length > 1 && !credential.content.isDefault &&
                <a className="info" onClick={() => {this.setCredentialAsDefault(credential)}}>Make Default</a>
              }
                <div>({this.numFilesForCredential(credential)} encrypted files)</div>
                <a className="info" onClick={() => {this.exportCredential(credential)}}>Export</a>
                <a className="danger" onClick={() => {this.deleteCredential(credential)}}>Delete</a>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
