// async await
import "babel-polyfill";
import "babel-core/register";

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { autorun, whyRun, action, useStrict } from 'mobx';
// 厳格モード
useStrict(true);

import App from './App';
import AppState from './AppState';

import RouterTest from './RouterTest';

const appState = new AppState();

// 観測(observable)している値が変更されるたびに実行される。
autorun(() => {
  // console.log(appState.timer1);
  // console.log(appState.timer2);
  // whyRun();
});

// mobx.useStrict(true) の場合、@observableな値の変更は、action~()を通して行う。関心の分離。
const tickTimer = action.bound(function() {
  appState.timer1 += 1;
});
setInterval(tickTimer, 1000);

ReactDOM.render((
  <AppContainer>
    <App appState={appState} />
  </AppContainer>
), document.getElementById('app'));

// ReactDOM.render((
//   <AppContainer>
//     <RouterTest />
//   </AppContainer>
// ), document.getElementById('app'));
