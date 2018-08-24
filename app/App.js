import React from 'react';
import Home from './components/Home';
import _ from 'lodash';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sn-component">
        <Home />
      </div>
    );
  }
}
