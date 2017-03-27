import i from 'actionConstant'

const defaultState= {
	data: {}
}

export default (state = defaultState, action) => {
	switch(action.type){
		case i.LOGIN_SUBMIT_SUCCESS:
			return {...state, data : action.payload}
	}
	return state
}
