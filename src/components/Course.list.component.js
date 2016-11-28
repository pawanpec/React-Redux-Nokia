import React, {Component} from 'react';
import Course from './Course'
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {GridList,GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Link} from 'react-router';
import store from '../store/configure.store';
import {fetchCourse} from '../actions/course.actions';
const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	gridList: {
		width: '650',
		height: 'auto'
	},
	titleStyle: {
		color: 'rgb(0,0,255)',
	}
}; 
class CourseList extends Component {
	constructor(props) {
		super(props);
		console.log("this.props.showDetails "+this.props.showDetails);
	}
	componentDidMount() {
			store.dispatch(fetchCourse());
	}
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}
	_getCourses() {
		return this.props.courses.map(( course ) => {
		return (
			<Course key={course.id} title={course.title} course={course}/>
			);
			});
	}
	render() {
		const courses = this._getCourses();
		let isActive=false;
		let subHeaderText='Click to view your favorite course';
		let title='All Courses';
		let titleNode;
		if(!this.props.showDetails){
			isActive=true;
			titleNode=<AppBar title={title} iconClassNameRight="muidocs-icon-navigation-expand-more" />
		}else{
			subHeaderText='Use browser back to go back to Course List';
			title=this.props.title;
			titleNode=<AppBar title={title} />
		}
		return (
			<div style={styles.root}>
				{titleNode}
			<GridList cellHeight={300} padding={25} style={styles.gridList}>
	<Subheader>{subHeaderText}</Subheader>
		{courses}
	</GridList>
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

export default connect(mapStateToProps)(CourseList);
CourseList.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};