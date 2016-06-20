import React, {
	Component
}
from 'react';
import {
	Provider
}
from 'react-redux';
import {
	Router, Route, IndexRoute, browserHistory
}
from 'react-router'
import {
	syncHistoryWithStore, routerReducer
}
from 'react-router-redux'


// import Index from './index';
import configureStore from './redux/store/configureStore';

import AppRoutes from './containers/app-routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
                <Router history={history}>
                  {AppRoutes}
                </Router>
			</Provider>
		)
	}
}