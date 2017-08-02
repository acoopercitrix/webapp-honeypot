import * as types from './action-types';

export const addAttack = (attack) => {
	return {
		type: types.ADD_ATTACK,
		attack
	};
}
