import {
	LRDIALOGUI, LEFTNAVUI, GET_CAPTCHAURL
}
from '../constants/globalTypes';

import {
	API_ROOT
}
from '../../config';


export function lrdialogSwitch(open, index = 0) {
	return {
		type: LRDIALOGUI,
		open: open,
		index: index
	}
}

export function leftnavSwitch(open) {
	return {
		type: LEFTNAVUI,
		open: open
	}
}

//获取验证码
export function getCaptchaUrl() {
	return {
		type: GET_CAPTCHAURL,
		captchaUrl: API_ROOT + 'users/getCaptcha?' + Math.random()
	}
}