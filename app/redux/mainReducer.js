import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {intlReducer} from 'react-intl-redux'
import adminReducer from 'adminReducer'



// reducers
import registerReducer from 'registerReducer'

export default combineReducers({
	admin: adminReducer,
	routing: routerReducer,
	intl: intlReducer
})

export const mapStateToProps = state => ({
	admin: state.admin,
	routing: state.routing,
	intl: state.intl
})



