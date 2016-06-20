import {
	combineReducers
}
from 'redux';
import {
	routerReducer
}
from 'react-router-redux';


import auth from './auth';
import globalUI from './globalUI'
	// import globalVal from './globalVal';

const rootReducers = combineReducers({

	auth,
	globalUI,
	routing: routerReducer
})

export default rootReducers