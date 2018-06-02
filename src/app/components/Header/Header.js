import React, { Component } from 'react';
import './Header.scss';
import logo from '../../../assets/images/logo.svg';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
class Header extends Component {
    constructor(props) {
        super(props);
    }
    handleClickEvent = (path) => {
        console.log('path', path);
        this.props.dispatch(push(`/${path}`));
        // this.props.history.push(`/${path}`);
    }
    render() {
        return (
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
                                <li className="navbar-brand">
                                    {/* <NavLink exact activeClassName="active" to='/'>Home</NavLink> */}
                                    <a onClick={() => this.handleClickEvent('')}>Home</a>
                                </li>
                                <li className="navbar-brand">
                                    <NavLink exact activeClassName="active" to='/about'>About</NavLink>
                                </li>
                                <li className="navbar-brand">
                                    <a href={`/link`}>Link</a>
                                </li>
                                <li className="navbar-brand">
                                    <NavLink exact activeClassName="active" to='/contact'>Contact</NavLink>
                                </li>
                                <li className="navbar-brand">
                                    <a onClick={() => this.handleClickEvent('contact')}>Contact</a>
                                </li>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log('Header state', state);
    return state;
};
// export default withRouter(connect(mapStateToProps)(Header));
export default connect(mapStateToProps)(Header);