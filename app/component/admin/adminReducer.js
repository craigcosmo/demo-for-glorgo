import i from 'actionConstant'

const defaultState= {
	data: {}
}

export default (state = defaultState, action) => {
	switch(action.type){
		case i.SAVED:
			return {...state, data : action.payload}
	}
	return state
}
