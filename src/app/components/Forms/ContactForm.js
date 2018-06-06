import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Validations from '../../validations/Validations';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validate: {
                email: {
                    invalid: true,
                    message: 'Email wrong format'
                }
            }
        };
    }
    onSubmitForm = () => {
        console.log('submit form');
    }
    handleChange = (type, event) => {
        console.log('event.target.value', event.target.value);
        const value = event.target.value;
        const isValid = Validations.valid(type, value);
        console.log('isvalid', isValid);
    }
    onBlurEmail = (event) => {
        const value = event.target.value;

    }
    render() {
        // const validateEmail = { invalid: true, message: 'This field is required.'}
        const validateEmail = this.state.validate.email;
        return (
            <div className="contact-form col-md-4">
               <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Email" onBlur={(event) => { this.handleChange('email', event); }}/>
                        <ErrorMessage validate={validateEmail}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Another label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('State form', state);
    return { state };
}
export default withRouter(connect(mapStateToProps)(ContactForm));