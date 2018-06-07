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

{/* <Router>
  <Switch history={history}>
    <Route exact path="/" name="ReduxElements" component={ReduxElements}/>
    <Route path="/contact" name="Contact" component={() => (
      <div>
        <h4> Contact</h4>
        <button onClick={() => history.push("/about")}>Go About</button>
      </div>)}
    />
    <Route path="/about" name="About" component={()=><p>Ab</p>}/>
  </Switch>
</Router> */}

// store.dispatch(push('/foo'))