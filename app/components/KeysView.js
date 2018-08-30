import React from 'react';
import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer } from 'standard-file-js';
import BridgeManager from "../lib/BridgeManager.js";
import RelayManager from "../lib/RelayManager";
import Utils from "../lib/Utils";
import IntegrationManager from "../lib/IntegrationManager";

export default class KeysView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {credentials: {}};

    BridgeManager.get().addUpdateObserver(() => {
      this.setState({credentials: BridgeManager.get().getCredentials()});
    })
  }

  exportCredentials = () => {
    var base64 = btoa(JSON.stringify(this.state.credentials, null, 2));
    var data = Utils.base64toBinary(base64);
    Utils.downloadData(data, `sn-filesafe-keys-${this.state.credentials.created_at.toISOString()}.json`, 'text/json');
  }

  render() {
    var credentials = this.state.credentials;
    var keysLabel = (credentials && credentials.created_at) ? credentials.created_at.toLocaleString() : "";

    return (
      <div>
        <div className="panel-row">
          <h4>Keys</h4>
        </div>

        <div>
          <div className="horizontal-group">
            <p>{keysLabel}</p>
            <a className="info" onClick={this.exportCredentials}>Export</a>
          </div>
        </div>
      </div>
    )
  }
}
