import {applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import {browserHistory } from 'react-router'
import {epicMiddleware} from 'mainEpic'


let middleware = applyMiddleware(thunk, epicMiddleware,logger(), routerMiddleware(browserHistory))

if (process.env.NODE_ENV === 'production') {
	middleware = applyMiddleware(thunk, epicMiddleware, routerMiddleware(browserHistory))
}

export default middleware
