import * as actionTypes from '../constants/propConstants';
import axios from 'axios';

export const getProps = () => async dispatch => {
	try {
		dispatch({ type: actionTypes.GET_PROPS_REQUEST });

		const { data } = await axios.get(`/api/props?p=1`);

		dispatch({
			type: actionTypes.GET_PROPS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PROPS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const updateProps = page => async dispatch => {
	try {
		dispatch({ type: actionTypes.UPDATE_PROPS_REQUEST });

		const { data } = await axios.get(`api/props?p=${page}`);

		dispatch({
			type: actionTypes.UPDATE_PROPS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.UPDATE_PROPS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getPropsByCat = (p, q, q2, q3, q4) => async dispatch => {
	try {
		dispatch({ type: actionTypes.GET_PROPS_REQUEST });

		const { data } = await axios.get(
			`/api/props/category?p=${p}&q=${q}&q=${q2}&q=${q3}&q=${q4}`
		);

		dispatch({
			type: actionTypes.GET_PROPS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PROPS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const updatePropsByCat = (p, q, q2, q3, q4) => async dispatch => {
	try {
		dispatch({ type: actionTypes.UPDATE_PROPS_REQUEST });

		const { data } = await axios.get(
			`/api/props/category?p=${p}&q=${q}&q=${q2}&q=${q3}&q=${q4}`
		);

		dispatch({
			type: actionTypes.UPDATE_PROPS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.UPDATE_PROPS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getPropDetails = id => async dispatch => {
	try {
		dispatch({
			type: actionTypes.GET_PROP_DETAILS_REQUEST,
		});

		const { data } = await axios.get(`/api/props/${id}`);

		dispatch({
			type: actionTypes.GET_PROP_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PROP_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const removePropDetails = () => dispatch => {
	dispatch({
		type: actionTypes.GET_PROP_DETAILS_RESET,
	});
};
