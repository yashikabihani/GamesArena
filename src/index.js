import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <MuiThemeProvider>
    <div>
      <AppBar title="Sapient Games Arena" showMenuIconButton={false} />
      <App />
    </div>
  </MuiThemeProvider>
),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
