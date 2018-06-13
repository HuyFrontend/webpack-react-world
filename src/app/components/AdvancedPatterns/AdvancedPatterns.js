import React, { Component, } from 'react';
import { withRouter } from 'react-router-dom';
import './AdvancedPatterns.scss';
// import PropTypes from 'prop-types';
import Toggle from './Toggle/Toggle';
class AdvancedPatterns extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`AdvancedPatterns`}>
                <h2>Advanced Elements</h2>
                <Toggle/>
            </div>
        )
    }
}

AdvancedPatterns.propTypes = {

}
export default withRouter(AdvancedPatterns);