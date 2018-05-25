import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxCounter from './components/ReduxCounter/ReduxCounter';
import configureStore from './stores/configStore';

const store = configureStore();
console.log('store', store.getState());

class ReduxContainer extends React.Component {
	constructor(props) {
		super(props);
		console.log('constructor');
	}
  render() {
    return (
      <div className="WebpackApp">
        <Provider store={store}>
					<ReduxCounter/>
        </Provider>
      </div>
    );
  }
}

export default ReduxContainer;
