import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import * as thunk from 'redux-thunk'; 

const logger = (store: any) => (next: any) => (action: any) => {
	console.group(action.type);
	console.info('dispatching', action);
	let result = next(action);  
	console.log('next state', store.getState());
	console.groupEnd();

	return result;};

export const createAppStore = () => createStore(rootReducer, 
	compose( 
	applyMiddleware(thunk.default, logger),
	    /**
     * Conditionally add the Redux DevTools extension enhancer
     * if it is installed.
     */
     // eslint-disable-next-line
    (<any>window).devToolsExtension ? (<any>window).devToolsExtension() : (f: any) => f));
