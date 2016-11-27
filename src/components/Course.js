/**
 * Created by ttnd on 27/11/16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
class Course extends Component {
    render() {
        return (
            <div>
            <h1>{this.props.course.title}</h1>
            <Link to={this.props.course.title} ><img src={this.props.course.img} /></Link>
        </div>
    );
    }
}

export default Course;