import rootReducer from '../reducers';
import {createStore} from 'redux';

export default (initialState) => {
	// Disable dev mode for now, I think it is using up too much memory
	// Also see here for how to use the composer, I was missing it: https://medium.com/@zalmoxis/improve-your-development-workflow-with-redux-devtools-extension-f0379227ff83
	//return createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
	return createStore(rootReducer, initialState);
};