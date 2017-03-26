import i from 'actionConstant'
import config from 'config'
import request from 'request'
import store from 'store'

export function submitLogin(data){
	return dispatch => {
		request().post(config.loginAPI, data)
		.then( response => {
			dispatch({
				type:i.LOGIN_SUBMIT_SUCCESS,
				payload:response.data
			})
		})
		.catch( err => {
			dispatch({
				type: i.LOGIN_SUBMIT_FAIL,
				payload:err
			})
		})
	}
}

