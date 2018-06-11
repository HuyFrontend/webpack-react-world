import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import './AppContainer.scss';
import Header from './app/components/Header/Header';
import Footer from './app/components/Footer/Footer';
// import ReduxElements from './app/components/ReduxElements/ReduxElements';
import { history } from './app/constants/constants';
import { connect } from 'react-redux';
// import ContactForm from './app/components/Forms/ContactForm';
import routes from './app/routes/routes';

class AppContainer extends Component {
    constructor() {
		super();
	}
	render() {
		return (
			<div className="AppContainer">
				<Header location={location} />
				<div className="page-content">
					<div className="container">
						<Switch history={history} location={location}>
							{ routes.map((route, idx) => {
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
							<Redirect from="/" to="/home" />
						</Switch>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	const obj = Object.assign({}, state, ownProps);
	return obj;

};
export default withRouter(connect(mapStateToProps)(AppContainer));