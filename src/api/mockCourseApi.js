import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
    {
        id: "1",
        title: "Java Script",
        img: "images/courses/1.png",
        courseDetails:[
            {
                id: "1",
                title: "React JS",
                img: "images/courses/1.png",
            },
            {
                id: "2",
                title: "Node JS",
                img: "images/courses/1.png",
            },
            {
                id: "3",
                title: "Angular JS",
                img: "images/courses/1.png",
            }, {
                id: "4",
                title: "Electron JS",
                img: "images/courses/1.png",
            }
        ]
    },
    {
        id: "2",
            title: "Database",
        img: "images/courses/2.png",
        courseDetails:[
            {
                id: "1",
                title: "Mongo DB",
                img: "images/courses/2.png",
            },
            {
                id: "2",
                title: "Mysql",
                img: "images/courses/2.png",
            },
            {
                id: "3",
                title: "Redis",
                img: "images/courses/2.png",
            },
            {
            id: "4",
            title: "NEO4J",
            img: "images/courses/2.png",
            }
        ]
    },
    {
        id: "3",
            title: "JAVA",
        img: "images/courses/3.png",
        courseDetails: [
            {
                id: "1",
                title: "Spring",
                img: "images/courses/3.png",
            },
            {
                id: "2",
                title: "Hibernate",
                img: "images/courses/3.png",
            },
            {
                id: "3",
                title: "JSP",
                img: "images/courses/3.png",
            }, {
            id: "4",
            title: "Servlet",
            img: "images/courses/3.png",
        }
        ]
    },
    {
        id: "4",
            title: "Server",
        img: "images/courses/4.png",
        courseDetails:[
            {
                id: "1",
                title: "Jboss",
                img: "images/courses/4.png",
            },
            {
                id: "2",
                title: "Tomcat",
                img: "images/courses/4.png",
            },
            {
                id: "3",
                title: "Websphere",
                img: "images/courses/4.png",
            }, {
            id: "4",
            title: "Apache",
            img: "images/courses/4.png",
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
