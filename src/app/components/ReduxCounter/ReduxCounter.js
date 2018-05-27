import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectFamilyType } from '../../stores/allActions';

import ReduxBookList from '../ReduxBookList/ReduxBookList';

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
                    <button onClick={this.decrement}>-</button>
                    <span> {this.props.countProp} </span>
                    <button onClick={this.increment}>+</button>
                </div>

                <div className="Info">
                    <h2>Family Info</h2>
                    <div>
                        <p> Name: {this.props.info.name}</p>
                        <p> Age: {this.props.info.age}</p>
                        <p> Phone: {this.props.info.phone}</p>
                        <div className="action">
                            <button onClick={() => this.setFamilyType('CHILD')}>Show Child</button>
                            <button onClick={() => this.setFamilyType('FATHER')}>Show Father</button>
                        </div>
                    </div>
                </div>

                <ReduxBookList/>
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