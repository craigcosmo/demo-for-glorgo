import i from 'actionConstant'
import config from 'config'
import store from 'store'
import request from 'request'

export function submitOrder(data){
	return (dispatch) => {
		dispatch(checkingout(data))
		return request().post(config.submitOrderApi, data).then( response => {
			if(response.status === 200){
				dispatch(checkedout(data))
				return response.data
			}
		}).catch(error => {
			dispatch(checkoutError(error))
			return error
		})
	}
}
export function checkingout(data){
	return {
		type: i.SUBMITING_ORDER,
		payload: data
	}
}
export function checkedout(data){
	return {
		type:i.SUBMITTED_ORDER,
		payload: data
	}
}
export function checkoutError(data){
	return {
		type:i.SUBMITTED_ORDER_ERROR,
		payload: data
	}
}