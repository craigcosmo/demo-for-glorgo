import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute } from 'react-router'
import {Provider} from 'react-redux'
import MainContainer from 'MainContainer'
import mainStore from 'mainStore'
import {IntlProvider} from 'react-intl-redux'
import {history} from 'mainStore'
import sv from 'sv.json'
import Home from 'Home'
import L from 'locationConstant'
import AdminView from 'AdminView'
import CheckoutView from 'CheckoutView'
import OrderHistory from 'OrderHistory'


const locale='en'
const message = ''

const app = document.getElementById('app')
ReactDOM.render(
	<Provider store={mainStore}>
		<IntlProvider locale={locale} message={message}>
			<Router history={history}>
				<Route path="/" component={MainContainer}>
					<IndexRoute component={Home} />
					<Route path={'/admin'} component={AdminView} />
					<Route path={'/checkout'} component={CheckoutView} />
					<Route path={'/history'} component={OrderHistory} />
					{/*<Route path=":topicId/:topicName" component={TopicView} />*/}
				</Route>
			</Router>
		</IntlProvider>
	</Provider>, app)
