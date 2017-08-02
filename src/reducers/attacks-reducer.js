import * as types from '../actions/action-types';

export default (state = [], action) => {
	switch (action.type) {
		case types.ADD_ATTACK:
			// See http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html
			return [...state, Object.assign({}, action.attack)];
		default:
			return state;
	}
};