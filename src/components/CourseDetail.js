import React, {Component} from 'react';
import {connect} from 'react-redux'
import CourseList from './course.list.component';
import store from '../store/configure.store';
import {filterCourse} from '../actions/course.actions';
class CourseDetail extends Component {
	constructor(props) {
		super(props);
		store.dispatch(filterCourse(this.props.params.id));
	}
	render() {
		const {courses} = this.props;
		return (
			<div>
			<CourseList courses={courses} />
			</div>
	);
	}
}

const mapStateToProps = (state) => {
	return {
		courses: state.course,
		isFetching: state.api.isFetching
	}
}

export default connect(mapStateToProps)(CourseDetail);
