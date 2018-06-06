import React, { Component } from 'react';
import './ErrorMessage.scss';

class ErrorMessage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const validate = this.props.validate;
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

export default ErrorMessage;