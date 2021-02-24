import * as actionTypes from '../constants/propConstants';

export const getPropsReducer = (state = { props: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_PROPS_REQUEST:
			return {
				loading: true,
				props: [],
			};
		case actionTypes.GET_PROPS_SUCCESS:
			return {
				loading: false,
				props: action.payload.docs,
				pageDetails: {
					page: action.payload.page,
					totalPages: action.payload.totalPages,
					hasNextPage: action.payload.hasNextPage,
					nextPage: action.payload.nextPage,
				},
			};
		case actionTypes.GET_PROPS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case actionTypes.UPDATE_PROPS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.UPDATE_PROPS_SUCCESS:
			return {
				...state,
				loading: false,
				props: [...state.props, ...action.payload.docs],
				pageDetails: {
					page: action.payload.page,
					totalPages: action.payload.totalPages,
					hasNextPage: action.payload.hasNextPage,
					nextPage: action.payload.nextPage,
				},
			};
		case actionTypes.UPDATE_PROPS_FAIL:
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
				prop: {},
			};
		default:
			return state;
	}
};
