import * as actionTypes from '../constants/categoryConstants';

export const categoryReducer = (state = { cat: 'all' }, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_CURRENT_CATEGORY:
			return {
				cat: action.payload,
			};
		default:
			return state;
	}
};
