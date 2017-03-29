import i from 'actionConstant'

const defaultState= {
	loading: false
}

export default (state = defaultState, action) => {
	switch(action.type){
		case i.SAVEBOOK:
			return{...state, loading:true}
		case i.SAVING:
			return{...state, loading:true}
		case i.SAVED:
			return {...state, loading:'success'}
	}
	return state
}
