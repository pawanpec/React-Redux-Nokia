import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Course from '../src/components/Course';
import store from '../src/store/configure.store';
let wrapper;
const course= [
    {
        id: "1",
        title: "Java",
        img: "images/courses/1.png"
    }];
const showDetails=true;
describe('<Course />', () => {
            beforeEach(() => {
            // Prevent duplication
            wrapper = shallow(<Course key={course.id} title={course.title} course={course}/>);
  
           });

            it('Course should exist', () => {
                expect(wrapper).to.exist;
            });

            it('should have an image to display', () => {
                 expect(wrapper.find('img')).to.have.length(1);
            });
            it('should have props for title and course', function () {
                expect(wrapper.props().title).to.be.defined;
                expect(wrapper.props().course).to.be.defined;
            });

        

});