import * as actionTypes from '../constants/categoryConstants';

export const updateCategory = cat => dispatch => {
	dispatch({
		type: actionTypes.UPDATE_CURRENT_CATEGORY,
		payload: cat,
	});
};
