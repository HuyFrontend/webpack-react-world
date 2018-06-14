import React, { Component, } from 'react';
import { withRouter } from 'react-router-dom';
import './AdvancedPatterns.scss';
// import PropTypes from 'prop-types';
import Toggle from './Toggle/Toggle';
import StateHoisting from './StateHoisting/StateHoisting';
import ChildrenPass from './ChildrenPass/ChildrenPass';
class AdvancedPatterns extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`AdvancedPatterns`}>
                <h2>Advanced Elements</h2>
                <Toggle/>
                
                <h3>State Hoisting</h3>
                <StateHoisting/>
                
                <h3>Children Pass</h3>
                <ChildrenPass/>
            </div>
        )
    }
}

AdvancedPatterns.propTypes = {

}
export default withRouter(AdvancedPatterns);