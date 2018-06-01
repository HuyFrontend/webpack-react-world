import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './ReduxElements.scss';
import spinnerImg from '../../../assets/images/logo.svg';
import { selectFamilyType } from '../../stores/allActions';

import ReduxBookList from '../ReduxBookList/ReduxBookList';
import Stories from '../Stories/Stories';
import CONS_ACTION from '../../stores/constantActions';

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
                <div className={`overlay ${ this.props.isLoading ? 'active' : '' }`}>
                    <img src={spinnerImg} className={`img-overlay animation`} alt="logo" />
                </div>
                <div className={`Redux-Counter`}>
                    <h2>Counter Session</h2>
                    <button onClick={this.decrement} className={`btn btn-secondary`}>-</button>
                    <span> {this.props.countProp} </span>
                    <button onClick={this.increment} className={`btn btn-secondary`}>+</button>
                </div>

                <div className="Redux-Family-Info">
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
                <ReduxBookList/>
                <Stories/>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    console.log('ReduxElements, state', state);
    return {
      countProp: state.counter ? state.counter.count : 0,
      info: state.familyInfo ? state.familyInfo : { name: 'Nhien', age: 1, phone: ''},
      isLoading: (state.bookList && state.bookList.isLoading) | false
    };
};

// export default withRouter(connect(mapStateToProps)(ReduxElements));
export default connect(mapStateToProps)(ReduxElements);