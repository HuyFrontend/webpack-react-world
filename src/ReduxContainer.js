import React, { Component } from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import configureStore from './app/stores/configStore';
import ReduxElements from './app/components/ReduxElements/ReduxElements';
import { history } from './app/stores/configStore';
const store = configureStore();

class ReduxContainer extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return (
      <div className={`ReduxContainer`}>
        <Provider store={store}>
					<ReduxElements/>
        </Provider>
      </div>
    );
  }
}
const Test = () => {
  return (
    <h2>Harry Vo</h2>
  );
}
export default ReduxContainer;


{/* <Provider store={store}>
  <ConnectedRouter history={history}>
    <div>
      <Route path="/about" component={Test}/>
    </div>
  </ConnectedRouter>
</Provider> */}