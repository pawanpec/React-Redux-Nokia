import React, {Component} from 'react';
import {connect} from 'react-redux'
import CourseList from './Course.list.component.js';
import store from '../store/configure.store';
import {filterCourse} from '../actions/course.actions';
class CourseDetail extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		store.dispatch(filterCourse(this.props.params.name));
	}
	render() {
		const {courses} = this.props;
		const showDetails=true;
		return (
			<div>
			<CourseList courses={courses} showDetails={showDetails} title={this.props.params.name}/>
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
