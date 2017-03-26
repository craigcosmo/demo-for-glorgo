import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {intlReducer} from 'react-intl-redux'




// reducers
import registerReducer from 'registerReducer'
import topicReducer from 'topicReducer'
import loginReducer from 'loginReducer'
import forumReducer from 'forumReducer'


export const mapStateToProps = (state) => {
	return {
		register: state.register,
		topic: state.topic,
		login: state.login,
		forum: state.forum,

	}
}
export default combineReducers({
	register: registerReducer,
	topic: topicReducer,
	login: loginReducer,
	forum: forumReducer,
	routing: routerReducer,
	intl: intlReducer
})

