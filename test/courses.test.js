import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import CourseList from '../src/components/Course.list.component';
import store from '../src/store/configure.store';
let wrapper;
const courses= [
    {
        id: "1",
        title: "Java Script",
        img: "images/courses/1.png"
    }];
const showDetails=true;
const courseName='JAVA';
describe('<CourseList />', () => {
            beforeEach(() => {
            // Prevent duplication
            wrapper = shallow(<CourseList courses={courses} showDetails={showDetails} title={courseName} store={store} />);
    wrapper.setState({
        course: courses
    });
           });

        it('CourseList should exist', () => {
            expect(wrapper).to.exist;
        });
        it('CourseList set state', () => {
            
            expect(wrapper.state().course).to.be.instanceof(Array);
        });

});