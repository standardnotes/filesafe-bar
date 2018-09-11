import React from 'react';

export default class KeysView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="messages">
        <ul>
          {this.props.messages.map((message) =>
            <li className={message.css}>
              {message.message}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
