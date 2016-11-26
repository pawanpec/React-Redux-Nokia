import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Course from './components/Course';
import CourseDetail from './components/CourseDetail';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Course} />
		<Route path="/" component={Course} />
		<Route path=":id" component={CourseDetail} />
	</Route>
)