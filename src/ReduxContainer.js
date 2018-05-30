import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
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
          <HashRouter>
            <Switch history={history}>
              <Route path="/home" name="Home" component={ReduxElements}/>
              <Route path="/about" name="Header" component={() => <h4> about</h4>} />
              <Route path="/contact" name="Inline" component={() => <h4> contact</h4>}/>
              <Route path="/" name="Default" component={() => <h4> Default</h4>}/>
            </Switch>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default ReduxContainer;