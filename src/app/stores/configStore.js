import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import {  routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './allReducers';
import { rootEpic } from '../stores/allEpics';
const loggerMiddleware = createLogger();
const epicMiddleware = createEpicMiddleware(rootEpic);
export const history = createHistory();
const historyMiddleware = routerMiddleware(history)
const configureStore = (preloadedState) => {
    return createStore(
		rootReducer, preloadedState, composeWithDevTools(
			applyMiddleware(
				thunkMiddleware,
				loggerMiddleware,
				epicMiddleware,
				historyMiddleware
			)
		)
	)
};
export default configureStore;