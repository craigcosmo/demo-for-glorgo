import i from 'actionConstant'
import config from 'config'
import store from 'store'


export function submitBook(data){
	return (dispatch) => {
		return new Promise( (resolve, reject) => {
			dispatch({
				type: i.SAVEBOOK,
				payload: data
			})
		})
		
	}
}
