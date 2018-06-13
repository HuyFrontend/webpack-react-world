import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ReduxElements.scss';
import ReduxBookList from '../ReduxBookList/ReduxBookList';
import Stories from '../Stories/Stories';

class ReduxElements extends Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }
    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    setFamilyType = (familyType) => {
        this.props.dispatch(selectFamilyType(familyType));
    }
    render() {
        return (
            <div className={`Redux-Elements`}>
                <div className={`Redux-Counter`}>
                    <h2>Counter Session</h2>
                    <button onClick={this.decrement} className={`btn btn-secondary`}>-</button>
                    <span> {this.props.countProp} </span>
                    <button onClick={this.increment} className={`btn btn-secondary`}>+</button>
                </div>
                <ReduxBookList/>
                <Stories/>
            </div>
        )
    }
}

ReduxElements.propTypes = {
    dispatch: PropTypes.func,
    countProp: PropTypes.number,
};

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, {
        countProp: state.counter ? state.counter.count : 0,
        }, ownProps
    );
};

export default withRouter(connect(mapStateToProps)(ReduxElements));