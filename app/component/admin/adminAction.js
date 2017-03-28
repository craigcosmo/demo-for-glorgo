import i from 'actionConstant'
import config from 'config'
import store from 'store'
import request from 'request'

// export function saveBook(data){
// 	return (dispatch) => {
// 		dispatch({
// 			type: i.SAVEBOOK,
// 			payload: data
// 		})
// 	}
// }

export function saveBook(data){
	return {
		type: i.SAVEBOOK,
		payload: data
	}
}
export function savingBook(){
	console.log('mama')
	return {
		type:i.SAVING
	}
}
export function savedBook(){
	return {
		type:i.SAVED
	}
}
