import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './allReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

const configureStore = (preloadedState) => {
    console.log('process.env.NODE_ENV:', process.env, process.env.NODE_ENV);
    return createStore(
		rootReducer, preloadedState, composeWithDevTools(
			applyMiddleware(
				thunkMiddleware,
				loggerMiddleware
			)
		)
	)
};
export default configureStore;