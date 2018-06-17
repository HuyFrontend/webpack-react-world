import React from 'react';
import PropTypes from 'prop-types';
import './OverLay.scss';
import spinnerImg from '../../../assets/images/logo.svg';
// import spinnerImg from '../../../assets/images/angular_logo.png';
const OverLay = ({isLoading}) => (
    <div className={`overlay ${ isLoading ? 'active' : '' }`}>
        <img src={spinnerImg} className={`img-overlay animation`} alt="logo" />
    </div>
);
OverLay.propTypes = {
    isLoading: PropTypes.bool
};
export default OverLay;