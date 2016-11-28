import { LOADING, LOADED } from '../constants/constants';

const initialState = {}

function apiReducer(state = initialState, action) {
	switch (action.type) {
		case LOADING:
			return {isFetching: true};
		case LOADED:
			return {isFetching: false};
		default:
			return state;
	}
}

export default apiReducer;