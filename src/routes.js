import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import CourseList from './components/Course.list.component';
import CourseDetail from './components/CourseDetail';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={CourseList} />
		<Route path="/" component={CourseList} />
		<Route path=":name" component={CourseDetail} />
	</Route>
)