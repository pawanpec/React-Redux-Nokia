/**
 * Created by ttnd on 27/11/16.
 */
import React, {Component} from 'react';
class Course extends Component {
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            </div>
          /*  <GridTile
        titlePosition="top"
        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        key={this.props.course.id}
        title={this.props.course.title}
        titleStyle={styles.titleStyle}
    >
    <Link to={this.props.course.title} isActive={isActive}><img src={this.props.course.img} /></Link>
        </GridTile>*/
    );
    }
}

export default Course;