import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Link} from 'react-router';
const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	gridList: {
		width: 500,
		height: 450,
		overflowY: 'auto',
	},
};
export default class CourseList extends Component {
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}
	render() {
		return (
            <div style={styles.root}>
    <AppBar
        title="All Courses"
        iconClassNameRight="muidocs-icon-navigation-expand-more" />
    <GridList cellHeight={180} style={styles.gridList}>
	<Subheader>Click to view your favorite course</Subheader>
		{this.props.courses.map((course) => (
		<GridTile
		key={course.id}
		title={course.title}
	>
    <Link to={course.id}><img src={course.img} /></Link>
	</GridTile>
	))}
	</GridList>
		</div>
			/*<table>
			<thead>
				<tr>
					<th>id</th>
					<th>title</th>
				</tr>
			</thead>
			<tbody>
			{
				this.props.courses.map((course) => {
					return(
						<tr>
							<td> {course.id} </td>
							<td> {course.title} </td>
						</tr>
					)
				})
			}
			</tbody>
			</table>*/
		);
	}
}
CourseList.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};