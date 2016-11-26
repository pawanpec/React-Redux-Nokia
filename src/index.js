import 'babel-polyfill';
import React from 'react';
import {Router, browserHistory} from 'react-router';
import {render} from 'react-dom';
import routes from './routes';
import {Provider} from 'react-redux';
import store from './store/configure.store';
import App from './components/App';

import {filterCourse} from '../src/actions/course.actions';

store.dispatch(filterCourse(1));

render(
	<Provider store={store}>
		<Router routes={routes} history={browserHistory} />
	</Provider>,
	document.getElementById("app")
);
