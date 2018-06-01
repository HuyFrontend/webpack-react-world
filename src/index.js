import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import style from './index.css';
import './index.scss';
import AppContainer from './AppContainer';
import ReduxContainer from './ReduxContainer';

ReactDOM.render(<ReduxContainer/>, document.getElementById('root'));

