import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {  routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './allReducers';
import { rootEpic } from '../stores/allEpics';
import { history } from '../constants/constants';

const loggerMiddleware = createLogger();
const epicMiddleware = createEpicMiddleware(rootEpic);
const historyMiddleware = routerMiddleware(history);
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