import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import './AppContainer.scss';
import Header from './app/components/Header/Header';
import Footer from './app/components/Footer/Footer';
import { history } from './app/constants/constants';
import { connect } from 'react-redux';
import routes from './app/routes/routes';
import OverLay from './app/components/OverLay/OverLay';
import PropTypes from 'prop-types';
class AppContainer extends Component {
    constructor() {
		super();
	}
	get routes() {
		return routes;
	}
	render() {
		return (
			<div className="AppContainer">
				<Header location={location} />
				<div className="page-content">
					<div className="container">
						<Switch history={history} location={location}>
							{ this.routes.map((route, idx) => {
								if (route.component) {
									return (
										<Route
											key={idx}
											path={route.path}
											exact={route.exact}
											name={route.name}
											render={(props) => (<route.component {...props}/>)}
										/>
									)
								} else {
									return null;
								}
							})}
							<Redirect from="/" to="/advanced" />
						</Switch>
					</div>
				</div>
				<Footer/>
				<OverLay isLoading={this.props.isLoading}/>
			</div>
		);
	}
}
AppContainer.defaultProps = {
	isLoading: false
};
AppContainer.propTypes = {
	isLoading: PropTypes.bool
};
const mapStateToProps = (state, ownProps) => {
	const bookList = state.bookList;
    return {
		state,
        isLoading: bookList && bookList.isLoading ? true : false,
        ...ownProps
    }
};
export default withRouter(connect(mapStateToProps)(AppContainer));