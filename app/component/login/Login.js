
import React from 'react'
import {findDOMNode} from 'react-dom'
import {Link} from 'react-router'
import Header from 'Header'
import './login.scss'
import Modal from 'react-modal'
import ToolTip from 'react-tooltip'
import {validate} from 'validate'
import L from 'locationConstant'
import LoginForm from 'LoginForm'
import Footer from 'Footer'
// import 'tooltip.scss'

export default class Login extends React.Component {
	constructor(){
		super()
	}
	onData(data){
		this.setState({loader:true})
		this.props.submitRegistration(data)
		.then( ()=> {
			this.setState({registerModal:true})
			this.setState({loader:false})
		})
	}
	render(){
		return (
			<div styleName="login">
				<Header {...this.props} />
				<main>
					<h1>Log in to your account</h1>
					<LoginForm onData={this.onData.bind(this)} />
				</main>
				<Footer />
			</div>
		)
	}
}

Login.contextTypes = {
	router: React.PropTypes.object.isRequired
}