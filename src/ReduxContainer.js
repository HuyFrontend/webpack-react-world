import React, { Component } from 'react';
// import { Route, Switch, BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { Route, Switch, BrowserRouter, HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './app/stores/configStore';
import ReduxElements from './app/components/ReduxElements/ReduxElements';
import { history } from './app/constants/constants';
import { withRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
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
                <Route path="/home" name="Home" component={ReduxElements}/>
                <Route path="/about" name="Header" component={() => <h4> about</h4>} />
                <Route path="/contact" name="Inline" component={() => <h4> contact</h4>}/>
                <Route path="/" name="Default" component={() => <h4> Default</h4>}/>
              </Switch>
            </Router>
          </ConnectedRouter>
        </Provider>

        {/* <Router>
            <div className="custom-link">
              <Route exact path="/" component={() => <h4> Default A</h4>} />
              <Route path="/contact" component={() => <h4> contact</h4>} />
              <Route path="/about" component={() => <h4> about</h4>} />
            </div>
          </Router> */}
      </div>
    );
  }
}
export default ReduxContainer;