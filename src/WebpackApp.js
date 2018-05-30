import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import logo from './assets/images/logo.svg';
import './WebpackApp.scss';
import windowiImgUrl from './assets/images/Screenshot_1.png';

import ReduxContainer from './ReduxContainer';
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
          <Route path="/home" name="Redux" component={ReduxContainer} />
          <Route path="/about" name="Header" component={WebpackApp} />
          <Route path="/contact" name="Inline" component={InlineCSS}/>
          <Route path="/" name="Default" component={ReduxContainer} />
        </Switch>
      </HashRouter>
    );
  }
}

const InlineCSS = () => {
  const divStyle = { color: 'blue', backgroundImage: 'url(' + windowiImgUrl + ')', height: 20 + 'px'
  };
  return <div className="hello-class">
    <p>Hello Webpack!</p>
    <a>Click me!</a>
    <div style={divStyle}>Inline Style</div>
  </div>;
};
export default RouterApp;
