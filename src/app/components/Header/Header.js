import React, { Component, StrictMode } from 'react';
import './Header.scss';
// import logo from '../../../assets/images/logo.svg';
import logo from '../../../assets/images/angular_logo.png';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import navigations from '../../constants/navigations';
import { Helpers } from '../../helpers/helpers';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    handleClickEvent = (path) => {
        this.props.dispatch(push(`/${path}`));
    }
    get navigations() {
        return Helpers.sortArrayByKey(navigations, 'index');
    }
    render() {
        return (
            <StrictMode>
                <header className="Header">
                    <div className="container">
                        <nav className="navbar navbar-dark bg-dark fixed-top">
                            <div className="row">
                                <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <div className="header-img">
                                        <img src={logo} className="logo" alt="logo"/>
                                    </div>
                                </div>
                                <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9 float-right">
                                    
                                    <NaviItem list={this.navigations} targetEvent={this.handleClickEvent}/>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </StrictMode>
        );
    }
}
Header.propTypes = {
    dispatch: PropTypes.func
}
const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, state, ownProps);
};
const NaviItem = ({list, targetEvent}) => {
    return list && list.length ?
        list.map((item, index) => {
            return (
                <li key={index} className="navbar-brand">
                    <a onClick={() => targetEvent(item.path)}>{item.name}</a>
                </li>
            )
        }) : null;
};
export default withRouter(connect(mapStateToProps)(Header));