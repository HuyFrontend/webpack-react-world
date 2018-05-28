import React, { Component } from 'react';

import { Provider } from 'react-redux';
import configureStore from './app/stores/configStore';
import ReduxElements from './app/components/ReduxElements/ReduxElements';

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

export default ReduxContainer;
