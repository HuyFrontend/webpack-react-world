import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './app/stores/configStore';
// import ReduxElements from './app/components/ReduxElements/ReduxElements';
import { history } from './app/constants/constants';
import AppContainer from './AppContainer';
const store = configureStore();
class ReduxContainer extends Component {
	constructor(props) {
		super(props);
	}
  render() {
    return (
      <div className={`ReduxContainer`}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Router>
              <AppContainer/>
            </Router>
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}

export default ReduxContainer;