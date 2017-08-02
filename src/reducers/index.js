import attacks from './attacks-reducer.js';
import slides from './slides-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	attacks,
	slides
});

export default rootReducer;