import React, { Component } from 'react';

import { Provider } from 'react-redux';
import configureStore from './stores/configStore';
import ReduxCounter from './components/ReduxCounter/ReduxCounter';
// import ReduxBookList from './components/ReduxBookList/ReduxBookList';

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
          {/* <ReduxBookList/> */}
        </Provider>
      </div>
    );
  }
}

export default ReduxContainer;
