import {
	GET_CAPTCHAURL, LOGIN_SUCCESS, LOGIN_FAILURE, USERINFO_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILURE, AUTH_ERRMSG_CLEAR,
	AUTH_ERRMSG_UPDATE, LOGOUT_USER
}
from '../constants/actiontypes';
import {
	API_ROOT
}
from '../../config';
// import {
// 	pushPath
// }
// from 'redux-simple-router';
import {
	push
}
from 'react-router-redux';

import {
	saveCookie, getCookie, signOut
}
from '../../utils/authService';


//注册
function registerSuccess(json) {
	return {
		type: REGISTER_SUCCESS,
		success: json.success
	}
}

function registerFailure(err) {
	return {
		type: REGISTER_FAILURE,
		errMsg: err.error_msg || {
			email: null,
			password: null,
			repeatpassword: null,
			result: '注册失败'
		}

	}
}

export function register(userInfo) {
	return (dispatch, getState) => {
		return fetch(API_ROOT + 'users/register', {
				method: 'post',
				credentials: 'include',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userInfo)
			}).then(response => response.json().then(json => ({
				json, response
			})))
			.then(({
				json, response
			}) => {
				if (!response.ok) {
					return dispatch(registerFailure(json))
				}
				dispatch(registerSuccess(json))
					// dispatch(pushPath('/'))
					// //得到token,并存储
					// saveCookie('token', json.token)
					// 	//获取用户信息
					// dispatch(getUserInfo(json.token))
					// dispatch(loginSuccess(json.token))
					// dispatch(pushPath('/'))
			}).catch(err => {
				//登录异常
				return dispatch(registerFailure(err))
			})
	}
}


//登录
function loginSuccess(token) {
	return {
		type: LOGIN_SUCCESS,
		token: token
	}
}

function loginFailure(err) {
	return {
		type: LOGIN_FAILURE,
		errMsg: err.error_msg || {
			email: null,
			password: null,
			repeatpassword: null,
			result: '登录失败'
		}
	}
}

//发起登录请求
export function localLogin(userInfo) {
	return (dispatch, getState) => {
		return fetch(API_ROOT + 'auth/local', {
				method: 'post',
				credentials: 'include',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userInfo)
			}).then(response => response.json().then(json => ({
				json, response
			})))
			.then(({
				json, response
			}) => {
				if (!response.ok) {
					return dispatch(loginFailure(json))
				}
				//得到token,并存储
				saveCookie('token', json.token)
					//获取用户信息
				dispatch(getUserInfo(json.token))
				dispatch(loginSuccess(json.token))
					// dispatch(pushPath('/'))
				dispatch(push('/'))
			}).catch(err => {
				//登录异常
				return dispatch(loginFailure(err))
			})
	}

}


//清除错误信息
export function auth_errmsg_clear() {
	return {
		type: AUTH_ERRMSG_CLEAR,
	}
}

export function auth_errmsg_update(errMsg) {
	return {
		type: AUTH_ERRMSG_UPDATE,
		errMsg: errMsg,
	}
}


//获取验证码
export function getCaptchaUrl() {
	return {
		type: GET_CAPTCHAURL,
		captchaUrl: API_ROOT + 'users/getCaptcha?' + Math.random()
	}
}

//获取用户信息
function receiveUserInfo(user) {
	return {
		type: USERINFO_SUCCESS,
		user: user
	}
}

function failureUserInfo() {
	return {
		type: USERINFO_FAILURE
	}
}


//发起获取用户信息
export function getUserInfo(token) {
	return (dispatch, getState) => {
		return fetch(API_ROOT + 'users/me', {
				credentials: 'include',
				headers: {
					'Authorization': `Bearer ${token}`
				}
			}).then(response => response.json().then(json => ({
				json, response
			})))
			.then(({
				json, response
			}) => {
				if (!response.ok) {
					return dispatch(failureUserInfo())
				}
				return dispatch(receiveUserInfo(json))
			}).catch(err => {
				//登录异常
				return dispatch(failureUserInfo())
			})
	}
}

export function logout() {
	return dispatch => {
		signOut()
		dispatch({
			type: LOGOUT_USER
		})
		dispatch(push('/'))
	}
}
//修改用户资料
function failureUpdateUser(err) {
	return {
		type: UPDATE_USER_FAILURE,
		errMsg: err.error_msg || '更新用户资料失败'
	}
}

function successUpdateUser(user) {
	return {
		type: UPDATE_USER_SUCCESS,
		user: user
	}
}
export function updateUser(userInfo) {
	return (dispatch, getState) => {
		return fetch(API_ROOT + 'users/updateuser', {
				method: 'put',
				credentials: 'include',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${getCookie('token')}`
				},
				body: JSON.stringify(userInfo)
			}).then(response => response.json().then(json => ({
				json, response
			})))
			.then(({
				json, response
			}) => {
				if (!response.ok) {
					return dispatch(failureUpdateUser(json.data))
				}
				return dispatch(successUpdateUser(json.data))
			}).catch(err => {
				return dispatch(failureUpdateUser(err))
			})
	}
}


//获取sns
function receiveSnsLogins(logins) {
	return {
		type: SUCCESS_GET_SNSLOGINS,
		logins: logins
	}
}

function failureSnsLogins() {
	return {
		type: FAILURE_GET_SNSLOGINS,
	}
}
export function getSnsLogins() {
	return (dispatch, getState) => {
		return fetch(API_ROOT + 'users/snsLogins')
			.then(response => response.json().then(json => ({
				json, response
			})))
			.then(({
				json, response
			}) => {
				if (!response.ok) {
					return dispatch(failureSnsLogins())
				}
				return dispatch(receiveSnsLogins(json.data))
			}).catch(e => {
				return dispatch(failureSnsLogins())
			})
	}
}