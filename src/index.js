import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import style from './index.css';
import './index.scss';
import RouterReduxApp from './WebpackApp';
import ReduxContainer from './ReduxContainer';

ReactDOM.render(<ReduxContainer/>, document.getElementById('webpack-redux'));

// ReactDOM.render(<RouterReduxApp/>, document.getElementById('webpack-root'));
