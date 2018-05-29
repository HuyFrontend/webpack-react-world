import React, { Component } from 'react';
import { Route, Switch, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter, syncHistoryWithStore } from 'react-router-redux';
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
            <Switch history={history}>
              <Route exact path='/' component={() => <h1> LOGIN</h1>} />
              <Route path='/roster' component={() => <h1> LOGIN</h1>}/>
              <Route path='/schedule' component={() => <h1> LOGIN</h1>}/>
            </Switch>
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}

export default ReduxContainer;