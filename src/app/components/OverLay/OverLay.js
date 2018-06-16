import React from 'react';
import './OverLay.scss';
import spinnerImg from '../../../assets/images/logo.svg';
const OverLay = ({isLoading}) => (
    <div className={`overlay ${ isLoading ? 'active' : '' }`}>
        <img src={spinnerImg} className={`img-overlay animation`} alt="logo" />
    </div>
);
export default OverLay;