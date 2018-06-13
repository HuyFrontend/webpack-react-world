import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './OverLay.scss';
import spinnerImg from '../../../assets/images/logo.svg';

class OverLay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`overlay ${ this.props.isLoading ? 'active' : '' }`}>
                <img src={spinnerImg} className={`img-overlay animation`} alt="logo" />
            </div>
        )
    }
}
OverLay.defaultProps = {
    isLoading: false
}
OverLay.propTypes = {
    isLoading: PropTypes.bool
}
export default connect()(OverLay);