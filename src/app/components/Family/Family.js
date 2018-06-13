import React, { Component } from 'react';
import './Family.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CONS_ACTION from '../../stores/constantActions';
import { selectFamilyType } from '../../stores/allActions';
class Family extends Component {
    constructor(props) {
        super(props);
    }
    setFamilyType = (familyType) => {
        this.props.dispatch(selectFamilyType(familyType));
    }
    render() {
        return (
            <div className="Family-Info">
                <h2>Family Info Session</h2>
                <div>
                    <p> Name: {this.props.info.name}</p>
                    <p> Age: {this.props.info.age}</p>
                    <p> Phone: {this.props.info.phone}</p>
                    <div className="action">
                        <button onClick={() => this.setFamilyType(CONS_ACTION.CHILD)} className={`btn btn-danger`}>Show Child</button>
                        <button onClick={() => this.setFamilyType(CONS_ACTION.MOM)} className={`btn btn-success`}>Show Mom</button>
                        <button onClick={() => this.setFamilyType(CONS_ACTION.FATHER)} className={`btn btn-info`}>Show Father</button>
                    </div>
                </div>
            </div>
        )
    }
}
Family.propTypes = {
    info: PropTypes.object,
    dispatch: PropTypes.func,
}
Family.defaultProp = {
    info: {}
}
const mapStateToProps = (state) => {
    return {
        info: state && state.familyInfo ? state.familyInfo : { name: 'Nhien', age: 1, phone: '' },
    };
}
export default withRouter(connect(mapStateToProps)(Family));