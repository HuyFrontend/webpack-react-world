import React, { Component } from 'react';
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

export default WebpackApp;
