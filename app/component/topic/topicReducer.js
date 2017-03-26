import i from 'actionConstant'

const defaultState= {
	postCollection: [],
	currentTopic: ''
}

export default (state = defaultState, action) => {
	switch(action.type){
		case i.GET_POST_COLLECTION_SUCCESS:
		// console.log('aya',action.payload)
			return {...state, postCollection : action.payload}
		case i.GET_POST_COLLECTION_FAIL:
			return {...state, postCollection : action.payload}
		case i.STORE_CURRENT_TOPIC:
			return {...state, currentTopic: action.payload}


	}
	return state
}
