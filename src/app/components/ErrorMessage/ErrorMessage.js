import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ErrorMessage.scss';

class ErrorMessage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const validate = this.props && this.props.validate;
        if ( validate.invalid ) {
            return (
                <div className={`Error-Message ${validate.invalid ? 'error' : ''}`}>
                    <span className='help-block'>{validate.message}</span>
                </div>
            )
        } else {
            return null;
        }
    }
}
ErrorMessage.propTypes = {
    validate: PropTypes.object
};
export default ErrorMessage;