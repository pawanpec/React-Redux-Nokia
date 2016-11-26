import React, {Component} from 'react';
import {connect} from 'react-redux'
import CourseList from './course.list.component';
class CourseDetail extends Component {
	render() {
		const {courses} = this.props;
		return (
			<div>
		<p>
		we got:
		{
			this.props.params.name
		}
	</p>		
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
