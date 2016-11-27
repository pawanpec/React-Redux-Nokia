import 'babel-polyfill';
import React from 'react';
import {Router, browserHistory} from 'react-router';
import {render} from 'react-dom';
import routes from './routes';
import {Provider} from 'react-redux';
import App from './components/App';
import store from '../src/store/configure.store';
render(
	<Provider store={store}>
		<Router routes={routes} history={browserHistory} />
	</Provider>,
	document.getElementById("app")
);
