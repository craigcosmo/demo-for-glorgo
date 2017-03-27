import i from 'actionConstant'
import config from 'config'
import store from 'store'
import request from 'request'


// export function submitBook(data){
// 	console.log('ada')
// 	return (dispatch) => {
// 		return new Promise( (resolve, reject) => {
// 			dispatch({
// 				type: i.SAVEBOOK,
// 				payload: data
// 			})
// 		})

// 	}
// }

// export function submitBook(data){
// 	return (dispatch) => {
// 		dispatch({
// 			type: i.SAVEBOOK,
// 			payload: data
// 		})
// 	}
// }

export function submitBook(data){
	return {
		type: i.SAVEBOOK,
		payload: data
	}
}
function submittingBook(){
	return {
		type:i.SAVING
	}
}
export function submittedBook(){
	return {
		type:i.SAVED
	}
}
