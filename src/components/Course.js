/**
 * Created by ttnd on 27/11/16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
const styles = {
    gridTile: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position : 'relative'
    },
    imgGrid : {
        width:'100%',
        height: '100%',
        paddingTop : '25px'
    },
    linkStyle : {
        display : 'inline-block',
        width: '100%',
        height : '100%'
    },
    heading : {
        position : 'absolute',
        top : '0px',
        left : '0px',
        padding : '10px',
        background : 'rgba(0,0,0,1)',
        color : '#ffffff',
        width:'100%',
        display : 'inline-block'
    },
};
class Course extends Component {

    render() {
        return (
            <div style={styles.gridTile}>
                <span style={styles.heading}>{this.props.course.title}</span>
                <Link style={styles.linkStyle} to={this.props.course.title} ><img style={styles.imgGrid} src={this.props.course.img} /></Link>
           </div>
    );
    }
}

export default Course;