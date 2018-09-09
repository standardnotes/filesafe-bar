import "standard-file-js/dist/regenerator.js";
import { StandardFile, SFAbstractCrypto, SFItemTransformer, SFHttpManager, SFItem } from 'standard-file-js';
import BridgeManager from "./BridgeManager";
import IntegrationManager from "./IntegrationManager";

export default class MessagesManager {

  /* Singleton */
  static instance = null;
  static get() {
    if (this.instance == null) { this.instance = new MessagesManager(); }
    return this.instance;
  }

  async getMessages() {
    var messages = [];

    /*
    Display messages if:
    No keys
    No integrations
    */

    var credentials = await BridgeManager.get().getCredentials();
    if(!credentials) {
      messages.push({
        message: "No encryption keys loaded. Press Expand to generate your keys.",
        css: "warning"
      })
    }

    var integrations = IntegrationManager.get().integrations;
    console.log("Integrations:", integrations);
    
    if(!integrations || integrations.length == 0) {
      messages.push({
        message: "No cloud integrations configured. Press Expand to configure your first integration.",
        css: "warning"
      })
    }

    console.log("Returning messages", messages);

    return messages;
  }
}
