import React, { Component } from 'react';

import { observer } from 'mobx-react';

import DevTool from 'mobx-react-devtools';

@observer
export default class App extends Component {
  render() {
    return (
      <div>
        <DevTool />
        <button onClick={this.onReset}>
          {this.props.appState.timer1}
        </button>
        <button onClick={this.onResetAsync}>
          {this.props.appState.timer2}
        </button>
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }

  onResetAsync = () => {
    this.props.appState.resetTimerAsync();
  }
}
