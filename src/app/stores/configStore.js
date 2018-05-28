import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './allReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from '../stores/allEpics';
const loggerMiddleware = createLogger();

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = (preloadedState) => {
    return createStore(
		rootReducer, preloadedState, composeWithDevTools(
			applyMiddleware(
				thunkMiddleware,
				loggerMiddleware,
				epicMiddleware
			)
		)
	)
};
export default configureStore;