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
				{/* <ReduxElements/> */}
				<div className="page-content">
					<div className="container">
						{/* <Switch history={history} location={location}>
							<Route exact path="/" name="ReduxElements" component={ReduxElements} />
							<Route path="/home" name="Home" component={ReduxElements} />
							<Route path="/about" name="about" component={() => <h4> About</h4>} />
							<Route path="/contact" name="contact" component={ContactForm} />
							<Route path="/link" name="link" component={() => <h4> Link</h4>} />
						</Switch> */}
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
								// return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
								// 	<route.component {...props} />
								// )} />)
								// : (null);
							},
							) }
							<Redirect from="/" to="/dashboard" />
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