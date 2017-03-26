import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute } from 'react-router'
import {Provider} from 'react-redux'
import MainContainer from 'MainContainer'
import mainStore from 'mainStore'
import Register from 'Register'
import {IntlProvider} from 'react-intl-redux'
import {history} from 'mainStore'
import sv from 'sv.json'
import store from 'store'
import Home from 'Home'
import ChangePassword from 'ChangePassword'
import Login from 'Login'
import ForgotPassword from 'ForgotPassword'
import Account from 'Account'
import Forum from 'Forum'
import CreateDiscussion from 'CreateDiscussion'
import TopicView from 'TopicView'
import CreatePoll from 'CreatePoll'
import L from 'locationConstant'
import Profile from 'Profile'


function checkIfLoggedIn(){
	return store.get('user') ? true : false
}
function redirectIfNotLoggedIn(nextState, replace){
	if(checkIfLoggedIn() === false ) replace('login')
}

function redirectIfLoggedIn(nextState, replace){
	if (checkIfLoggedIn() === true) replace('')
}
function redirectIndexRoute(nextState, replace){
	if(checkIfLoggedIn() === false ) replace('login')
	if(checkIfLoggedIn() === true ) replace('forum/barista-trade-fair')
}


const locale='en'
const message = ''

const app = document.getElementById('app')
ReactDOM.render(
	<Provider store={mainStore}>
		<IntlProvider locale={locale} message={message}>
			<Router history={history}>
				<Route path="/" component={MainContainer}>
					<IndexRoute component={Home} />
					<Route path={L.LOGIN} component={Login} onEnter={redirectIfLoggedIn} />
					<Route path={L.REGISTER} component={Register} onEnter={redirectIfLoggedIn} />
					<Route path={L.ACCOUNT} component={Account} onEnter={redirectIfNotLoggedIn} />
					<Route path={L.PROFILE} component={Profile} onEnter={redirectIfNotLoggedIn} />
					<Route path="forum/:forum" component={Forum} onEnter={redirectIfNotLoggedIn} />
					<Route path=":topicId/:topicName" component={TopicView} onEnter={redirectIfNotLoggedIn} />
					<Route path={L.CREATE_TOPIC} component={CreateDiscussion} onEnter={redirectIfNotLoggedIn} />
					<Route path={L.CREATE_POLL} component={CreatePoll} onEnter={redirectIfNotLoggedIn} />
				</Route>
			</Router>
		</IntlProvider>
	</Provider>, app)
