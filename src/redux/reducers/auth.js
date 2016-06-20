import {
	LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE,
	USERINFO_SUCCESS, LOGOUT_USER, USERINFO_FAILURE,
	UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE, AUTH_ERRMSG_CLEAR, AUTH_ERRMSG_UPDATE
}
from '../constants/actionTypes';
import {
	saveCookie, getCookie, signOut
}
from '../../utils/authService';
import {
	createReducer
}
from 'redux-immutablejs';
import {
	fromJS, Map, List
}
from 'immutable';

const initialState = fromJS({
	token: getCookie('token') || null,
	user: null,
	errMsg: {
		email: null,
		password: null,
		repeatpassword: null,
		result: null
	},
	success: null
})

export default createReducer(initialState, {
	[LOGIN_SUCCESS]: (state, action) => {
		return state.merge({
			errMsg: {
				email: null,
				password: null,
				repeatpassword: null,
				result: null
			},
			token: action.token
		})
	}, [LOGIN_FAILURE]: (state, action) => state.set('errMsg', action.errMsg), [USERINFO_SUCCESS]: (state, action) => {
		return state.merge({
			errMsg: {
				email: null,
				password: null,
				repeatpassword: null,
				result: null
			},
			user: action.user
		})
	}, [USERINFO_FAILURE]: (state, action) => state.set('user', null), [LOGOUT_USER]: (state, action) => initialState.set('token', null), [UPDATE_USER_FAILURE]: (state, action) => state.set('errMsg', action.errMsg), [UPDATE_USER_SUCCESS]: (state, action) => {
		return state.merge({
			errMsg: {
				email: null,
				password: null,
				repeatpassword: null,
				result: null
			},
			user: action.user
		})
	}, [REGISTER_SUCCESS]: (state, action) => {
		return state.merge({
			errMsg: {
				email: null,
				password: null,
				repeatpassword: null,
				result: null
			},
			user: action.success
		})
	}, [REGISTER_FAILURE]: (state, action) => state.set('errMsg', action.errMsg), [AUTH_ERRMSG_CLEAR]: (state, action) => {
		return state.merge({
			errMsg: {
				email: null,
				password: null,
				repeatpassword: null,
				result: null
			},
			user: null
		})
	}, [AUTH_ERRMSG_UPDATE]: (state, action) => {
		return state.merge({
			errMsg: action.errMsg
		})
	}

})