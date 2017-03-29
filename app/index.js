import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute } from 'react-router'
import {Provider} from 'react-redux'
import MainContainer from 'MainContainer'
import mainStore from 'mainStore'
import {history} from 'mainStore'
import Home from 'Home'
import AdminView from 'AdminView'
import CheckoutView from 'CheckoutView'
import OrderHistory from 'OrderHistory'



const app = document.getElementById('app')
ReactDOM.render(
	<Provider store={mainStore}>
		<Router history={history}>
			<Route path="/" component={MainContainer}>
				<IndexRoute component={Home} />
				<Route path={'/admin'} component={AdminView} />
				<Route path={'/checkout'} component={CheckoutView} />
				<Route path={'/history'} component={OrderHistory} />
				{/*<Route path=":topicId/:topicName" component={TopicView} />*/}
			</Route>
		</Router>
	</Provider>, app)
