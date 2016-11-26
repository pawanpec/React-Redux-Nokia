import { COURSE_LOADED ,FILTER_COURSE_LOADED} from '../constants/constants';

const initialState = []

function courseReducer(state = initialState, action) {
	switch (action.type) {
		case COURSE_LOADED:
			return action.courses;
		case FILTER_COURSE_LOADED:
			return action.courses;
		default:
			return state;
	}
}

export default courseReducer;