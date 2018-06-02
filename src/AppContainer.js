import React, { Component } from 'react';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import './AppContainer.scss';
import Header from './app/components/Header/Header';
import Footer from './app/components/Footer/Footer';
import ReduxElements from './app/components/ReduxElements/ReduxElements';
import { history } from './app/constants/constants';
import { connect } from 'react-redux';
class AppContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="AppContainer">
        <Header location={location}/>
        {/* <ReduxElements/> */}
        <div className="page-content">
          <div className="container">
            <Switch history={history} location={location}>
              <Route exact path="/" name="ReduxElements" component={ReduxElements}/>
              <Route path="/home" name="Home" component={ReduxElements}/>
              <Route path="/about" name="about" component={(props) => <h4> About</h4>} />
              <Route path="/contact" name="contact" component={(props) => <h4> Contact</h4>}/>
              <Route path="/link" name="link" component={() => <h4> Link</h4>} />
            </Switch>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log('AppContainer state', state);
  return state;
};
// export default AppContainer;
export default withRouter(connect(mapStateToProps)(AppContainer));