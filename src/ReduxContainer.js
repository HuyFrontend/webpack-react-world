import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, HashRouter } from 'react-router-dom';
// import { Route, Switch, BrowserRouter, HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './app/stores/configStore';
import ReduxElements from './app/components/ReduxElements/ReduxElements';
import { history } from './app/constants/constants';
const store = configureStore();
class ReduxContainer extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return (
      <div className={`ReduxContainer`}>
        {/* <Provider store={store}>
          <ReduxElements/>
        </Provider> */}
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Router>
              <Switch history={history}>
                <Route exact path="/" name="ReduxElements" component={ReduxElements}/>
                <Route path="/home" name="Home" component={ReduxElements}/>
                <Route path="/about" name="about" component={() => <h4> About</h4>} />
                <Route path="/contact" name="contact" component={() => <h4> Contact</h4>}/>
              </Switch>
            </Router>
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}
export default ReduxContainer;