import i from 'actionConstant'
import config from 'config'
import store from 'store'
import request from 'request'

export function submitOrder(data){
	return (dispatch) => {
		dispatch({
			type: i.SUBMIT_ORDER,
			payload: data
		})
	}
}
export function checkingout(data){
	return {
		type: i.SUBMITING_ORDER,
		payload: data
	}
}
export function checkedout(){
	return {
		type:i.SUBMITED_ORDER
	}
}
