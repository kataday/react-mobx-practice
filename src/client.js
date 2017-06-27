import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { autorun, whyRun, action, useStrict } from 'mobx';
// 厳格モード
useStrict(true);

import App from './App';
import AppState from './AppState';

const appState = new AppState();

// 観測(observable)している値が変更されるたびに実行される。
autorun(() => {
  // console.log(appState);
  // whyRun();
});

setInterval(action.bound(function() {
  appState.timer1 += 1;
}), 1000);

ReactDOM.render((
  <AppContainer>
    <App appState={appState} />
  </AppContainer>
), document.getElementById('app'));
