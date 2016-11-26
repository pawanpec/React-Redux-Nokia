import {
	LOAD_COURSE,
	COURSE_LOADED,
	LOADING,
	FILTER_COURSE_LOADED
} from '../constants/constants';

import CourseApi from '../api/mockCourseApi';

export function loadCourse() {
	return {
		type: LOAD_COURSE
	}
}

export function courseLoaded(courses) {
	return {
		type: COURSE_LOADED,
		courses
	}
}
export function filterCourseLoaded(courses) {
	return {
		type: FILTER_COURSE_LOADED,
		courses
	}
}
export function showLoader() {
	return {
		type: LOADING
	}
}

export function fetchCourse() {
	return (dispatch) => {
		return CourseApi.getAllCourses()
			.then((courses) => {
				dispatch(courseLoaded(courses));
			})
			.catch((err) => {

			})
	}
}
export function filterCourse(id) {
	console.log("id "+id);
	return (dispatch) => {
		return CourseApi.getAllCourses()
				.then((courses) => {
			     let filterCourses=courses.filter(course => course.id == id);
		        console.log("filterCourses "+JSON.stringify(filterCourses[0].courseDetails));
				dispatch(filterCourseLoaded(filterCourses[0].courseDetails));
	})
	.catch((err) => {

		})
	}
}