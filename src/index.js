import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap';
import style from './index.css';
import './index.scss';
import windowiImgUrl from './assets/images/Screenshot_1.png';
import logo from './assets/images/logo.svg';
import WebpackApp from './WebpackApp';
import ReduxContainer from './ReduxContainer';
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + windowiImgUrl + ')',
  height: 20 + 'px'
};

const Index = () => {
  return <div className="hello-class">
    <p>Hello Webpack!</p>
    <a>Click me!</a>
    <div className="icon">
      <img src={logo} />
    </div>
    <div style={divStyle}>Inline Style</div>
  </div>;
};

ReactDOM.render(<Index/>, document.getElementById('index-app'));

ReactDOM.render(<WebpackApp/>, document.getElementById('webpack-root'));

ReactDOM.render(<ReduxContainer/>, document.getElementById('webpack-redux'));

registerServiceWorker();