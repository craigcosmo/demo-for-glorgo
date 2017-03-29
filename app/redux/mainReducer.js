import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import adminReducer from 'adminReducer'
import checkoutReducer from 'checkoutReducer'


export default combineReducers({
	checkout:checkoutReducer,
	admin: adminReducer,
	routing: routerReducer
})

export const mapStateToProps = state => ({
	checkout: state.checkout,
	admin: state.admin,
	routing: state.routing
})



