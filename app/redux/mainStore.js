import {createStore} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'
import middleware from 'middleware'
import mainReducer from 'mainReducer'


const store = createStore(mainReducer, middleware)
export const history = syncHistoryWithStore(browserHistory, store)

export default store
