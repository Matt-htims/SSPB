import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
	getPropsReducer,
	getPropDetailsReducer,
} from './reducers/propReducers';

const reducer = combineReducers({
	getProps: getPropsReducer,
	getPropDetails: getPropDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
