import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AppState from './AppState';

ReactDOM.render((
  <App appState={AppState} />
), document.getElementById('app'));
