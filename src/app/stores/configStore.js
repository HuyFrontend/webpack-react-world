import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {  routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './allReducers';
import { rootEpic } from '../stores/allEpics';
import CONSTANT from '../constants/constants';
import { history, isProduction } from '../constants/constants';

const loggerMiddleware = createLogger();
const epicMiddleware = createEpicMiddleware(rootEpic);
const historyMiddleware = routerMiddleware(history);
const configureStore = (preloadedState) => {
	// mode development
	if (!isProduction) {
		return createStore(
			rootReducer, preloadedState, composeWithDevTools(
				applyMiddleware(thunkMiddleware,
					loggerMiddleware,
					epicMiddleware,
					historyMiddleware
				)
			)
		)
	} else {
		// mode production
		return createStore(
			rootReducer, preloadedState, composeWithDevTools(
				applyMiddleware(thunkMiddleware,
					epicMiddleware,
					historyMiddleware
				)
			)
		)
	}
};
export default configureStore;