import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
    {
        id: "1",
        title: "Java Script",
        img: "http://schoolspedia.com/spedia/images/nokia/images/courses/1.png",
        courseDetails:[
            {
                id: "1",
                title: "React JS",
                img: "http://schoolspedia.com/spedia/images/nokia/images/courses/1.png",
            },
            {
                id: "2",
                title: "Node JS",
                img: "http://schoolspedia.com/spedia/images/nokia/images/courses/1.png",
            },
            {
                id: "3",
                title: "Angular JS",
                img: "http://schoolspedia.com/spedia/images/nokia/images/courses/1.png",
            }, {
                id: "4",
                title: "Electron JS",
                img: "http://schoolspedia.com/spedia/images/nokia/images/courses/1.png",
            }
        ]
    },
    {
        id: "2",
            title: "Database",
        img: "http://schoolspedia.com/spedia/images/nokia/images/courses/2.png",
        courseDetails:[
            {
                id: "1",
                title: "Mongo DB",
                img: "http://schoolspedia.com/spedia/images/nokia/images/courses/2.png",
            },
            {
                id: "2",
                title: "Mysql",
                img: "http://schoolspedia.com/spedia/images/nokia/images/courses/2.png",
            },
            {
                id: "3",
                title: "Redis",
                img: "http://schoolspedia.com/spedia/images/nokia/images/courses/2.png",
            },
            {
            id: "4",
            title: "NEO4J",
            img: "http://schoolspedia.com/spedia/images/nokia/images/courses/2.png",
            }
        ]
    },
    {
        id: "3",
            title: "JAVA",
        img: "http://schoolspedia.com/spedia/images/nokia/images/courses/3.png",
        courseDetails: [
            {
                id: "1",
                title: "Spring",
                img: "http://schoolspedia.com/spedia/images/nokia/images/courses/3.png",
            },
            {
                id: "2",
                title: "Hibernate",
                img: "http://schoolspedia.com/spedia/images/nokia/images/courses/3.png",
            },
            {
                id: "3",
                title: "JSP",
                img: "http://schoolspedia.com/spedia/images/nokia/images/courses/3.png",
            }, {
            id: "4",
            title: "Servlet",
            img: "http://schoolspedia.com/spedia/images/nokia/images/courses/3.png",
        }
        ]
    },
    {
        id: "4",
            title: "Server",
        img: "http://schoolspedia.com/spedia/images/nokia/images/courses/4.png",
        courseDetails:[
            {
                id: "1",
                title: "Jboss",
                img: "http://schoolspedia.com/spedia/images/nokia/images/courses/4.png",
            },
            {
                id: "2",
                title: "Tomcat",
                img: "http://schoolspedia.com/spedia/images/nokia/images/courses/4.png",
            },
            {
                id: "3",
                title: "Websphere",
                img: "http://schoolspedia.com/spedia/images/nokia/images/courses/4.png",
            }, {
            id: "4",
            title: "Apache",
            img: "http://schoolspedia.com/spedia/images/nokia/images/courses/4.png",
        }
        ]
    }
];

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(Object.assign([], courses));
        }, delay);
    });
    }
}
export default CourseApi;
