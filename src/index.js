import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';
import './index.scss';
const Index = () => {
  return <div className="hello-class">
    <div className="icon">
      <img src="./assets/images/Screenshot_1.png"/>
    </div>
    <p>Hello React Harry Vo!</p>
    <a>Click me!</a>
  </div>;
};

ReactDOM.render(<Index />, document.getElementById('index'));