import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import logo from './assets/images/logo.svg';
import './WebpackApp.scss';

class WebpackApp extends Component {
  render() {
    return (
      <div className="WebpackApp">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
        </header>
      </div>
    );
  }
}
// export default WebpackApp;

class RouterApp extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {/* <Route exact path="/login" name="Login Page" component={Login} /> */}
          <Route path="/home" name="Home" component={WebpackApp} />
        </Switch>
      </HashRouter>
    );
  }
}
export default RouterApp;
