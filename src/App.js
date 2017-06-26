import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class extends Component {
  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          {this.props.appState.timer}
        </button>
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
}
