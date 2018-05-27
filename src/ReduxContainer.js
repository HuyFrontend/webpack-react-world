import React, { Component } from 'react';

import { Provider } from 'react-redux';
import configureStore from './app/stores/configStore';
import ReduxCounter from './app/components/ReduxCounter/ReduxCounter';

const store = configureStore();

class ReduxContainer extends React.Component {
	constructor(props) {
		super(props);
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
