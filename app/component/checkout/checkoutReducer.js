import i from 'actionConstant'

const defaultState= {
	loading: false
}

export default (state = defaultState, action) => {
	switch(action.type){
		case i.SUBMIT_ORDER:
			return{...state, loading:true}
		case i.SUBMITING_ORDER:
			return{...state, loading:true}
		case i.SUBMITTED_ORDER:
			return {...state, loading:false}
	}
	return state
}
