import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap';
import style from './index.css';
import './index.scss';
import RouterApp from './WebpackApp';
import ReduxContainer from './ReduxContainer';

ReactDOM.render(<ReduxContainer/>, document.getElementById('webpack-redux'));
ReactDOM.render(<RouterApp/>, document.getElementById('webpack-root'));

registerServiceWorker();