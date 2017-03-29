import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {intlReducer} from 'react-intl-redux'
import adminReducer from 'adminReducer'
import checkoutReducer from 'checkoutReducer'


// reducers
import registerReducer from 'registerReducer'

export default combineReducers({
	checkout:checkoutReducer,
	admin: adminReducer,
	routing: routerReducer,
	intl: intlReducer
})

export const mapStateToProps = state => ({
	checkout: state.checkout,
	admin: state.admin,
	routing: state.routing,
	intl: state.intl
})



