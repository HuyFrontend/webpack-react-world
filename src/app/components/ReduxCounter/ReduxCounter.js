import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ReduxCounter.scss';
import { selectFamilyType } from '../../stores/allActions';

import ReduxBookList from '../ReduxBookList/ReduxBookList';
import Stories from '../Stories/Stories';
class ReduxCounter extends Component {
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
            <div>
                <div className="counter">
                    <h2>Counter Session</h2>
                    <button onClick={this.decrement} className={`btn btn-danger`}>-</button>
                    <span> {this.props.countProp} </span>
                    <button onClick={this.increment} className={`btn btn-info`}>+</button>
                </div>

                <div className="Info">
                    <h2>Family Info</h2>
                    <div>
                        <p> Name: {this.props.info.name}</p>
                        <p> Age: {this.props.info.age}</p>
                        <p> Phone: {this.props.info.phone}</p>
                        <div className="action">
                            <button onClick={() => this.setFamilyType('CHILD')} className={`btn btn-danger`}>Show Child</button>
                            <button onClick={() => this.setFamilyType('FATHER')} className={`btn btn-info`}>Show Father</button>
                        </div>
                    </div>
                </div>

                <ReduxBookList/>
                <Stories/>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
      countProp: state.counter.count,
      info: state.familyInfo
    };
};

export default connect(mapStateToProps)(ReduxCounter);