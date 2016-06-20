import {
	LRDIALOGUI, LEFTNAVUI, GET_CAPTCHAURL
}
from '../constants/globalTypes';

import {
	createReducer
}
from 'redux-immutablejs';

import {
	fromJS, Map, List
}
from 'immutable';

import {
	API_ROOT
}
from '../../config';


import {
	combineReducers
}
from 'redux'



const initialStateLRD = fromJS({
	open: false,
	index: 0,
	captchaUrl: API_ROOT + 'users/getCaptcha?'
})

const lrdialogUI = createReducer(initialStateLRD, {
	[LRDIALOGUI]: (state, action) => {
		return state.merge({
			open: action.open,
			index: action.index
		})
	}, [GET_CAPTCHAURL]: (state, action) => state.set('captchaUrl', action.captchaUrl)
})


const initialStateLEFT = fromJS({
	open: false,
})

const leftnavUI = createReducer(initialStateLEFT, {
	[LEFTNAVUI]: (state, action) => {
		return state.merge({
			open: action.open,

		})
	}
})



const globalUI = combineReducers({
	lrdialogUI,
	leftnavUI
})

export default globalUI