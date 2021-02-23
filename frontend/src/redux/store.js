import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
	getPropsReducer,
	getPropDetailsReducer,
} from './reducers/propReducers';

import { categoryReducer } from './reducers/categoryReducers';

const reducer = combineReducers({
	getProps: getPropsReducer,
	getPropDetails: getPropDetailsReducer,
	currentCategory: categoryReducer,
});

const middleware = [thunk];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
