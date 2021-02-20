import * as actionTypes from '../constants/propConstants';

export const getPropsReducer = (state = { props: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_PROPS_REQUEST:
			return {
				loading: true,
				products: [],
			};
		case actionTypes.GET_PROPS_SUCCESS:
			return {
				loading: false,
				props: action.payload,
			};
		case actionTypes.GET_PROP_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getPropDetailsReducer = (state = { prop: {} }, action) => {
	switch (action.type) {
		case actionTypes.GET_PROP_DETAILS_REQUEST:
			return {
				loading: true,
			};
		case actionTypes.GET_PROP_DETAILS_SUCCESS:
			return {
				loading: false,
				prop: action.payload,
			};
		case actionTypes.GET_PROP_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case actionTypes.GET_PROP_DETAILS_RESET:
			return {
				products: {},
			};
		default:
			return state;
	}
};
