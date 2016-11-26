import {combineReducers} from 'redux'
import course  from './course.reducer';
import api from './api.reducer';

const rootReducer = combineReducers({
	course,
	api
});

export default rootReducer;