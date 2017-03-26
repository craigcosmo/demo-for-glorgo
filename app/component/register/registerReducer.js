import i from 'actionConstant'
import R from 'ramda'


const defaultState= {
	registerFormData: {}
}

export default (state = defaultState, action) => {
	switch(action.type){
		case i.REGISTER_SUBMIT:
			return {...state, registerFormData : action.payload}
	}
	return state
}
