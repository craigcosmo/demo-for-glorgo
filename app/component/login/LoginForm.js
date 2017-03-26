

import React from 'react'
import '../register/registerForm.scss'
import { intlShape, injectIntl, defineMessages } from 'react-intl'
import Tooltip from 'react-tooltip'
import {findDOMNode} from 'react-dom'
import validate from 'validate'
import {Link} from 'react-router'
import L from 'locationConstant'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classnames from 'classnames'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

const messages = defineMessages({

	email: {
		id: 'registerForm.email',
		defaultMessage: 'email address'
	},
	password: {
		id: 'registerForm.password',
		defaultMessage: 'password'
	}
})

class RegisterForm extends React.Component{
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this)
		this.onPassword = this.onPassword.bind(this)
		this.onEmail = this.onEmail.bind(this)

		this.state = {
			registerModal: false,
			emailErrorMessage: '',
			passwordErrorMessage: '',
			name :'',
			email :'',
			password :'',
			passwordConfirm :''
		}
	}

	validateOnSubmit(){
		let input = [
			{value:this.state.email, check:{email:true}, callback: this.emailError.bind(this) },
			{value:this.state.password, check:{min:6}, callback: this.passwordError.bind(this) },

		]
		return validate(input)
	}
	onSubmit(e){
		e.preventDefault()

		if (!this.validateOnSubmit()) return

		let regData = {
			email: this.state.email,
			password: this.state.password,
			name: this.state.name
		}
		this.props.onData(regData)
		
	}
	
	emailError(reason){
		if (reason === 'length') {
			this.setState({emailErrorMessage : 'required'})
		}
		else if (reason === 'valid') {
			this.setState({emailErrorMessage : 'email is invalid'})
		}
		else {this.setState({emailErrorMessage : ''}) }
	}
	passwordError(reason){
		if (reason === 'length') {
			this.setState({passwordErrorMessage : 'required'})
		} 
		else if (reason === 'min') {
			this.setState({passwordErrorMessage : 'minimum 6 characers'}) 
		}
		else this.setState({passwordErrorMessage : ''}) 
	}
	
	onEmail(e){
		this.setState({email: e.target.value})
		validate({
			value:e.target.value, 
			check:{email:true}, 
			callback: this.emailError.bind(this)
		})
	}
	onPassword(e){
		this.setState({password: e.target.value})
		validate({
			value:e.target.value, 
			check:{min:6}, 
			callback: this.passwordError.bind(this)
		})
	}
	responseFacebook(response){
		console.log(response)
	}
	componentClicked(){

	}
	responseGoogle(){

	}
	render(){ 
		
		let emailStyle = classnames({
			none: !this.state.email,
			active: this.state.email,
			error: this.state.emailErrorMessage
		})
		let passwordStyle = classnames({
			none: !this.state.passwoed,
			active: this.state.passwoed,
			error: this.state.passwordErrorMessage
		})
		
		return(
			<form onSubmit={this.onSubmit} styleName="form">
				<div className="relative mb20">
					<label styleName={this.state.email ? 'active':'none'}>{this.props.intl.formatMessage(messages.email)}</label>
					<input
						autoComplete="off" 
						ref= "email"
						className="ui-input-text" 
						styleName= {emailStyle}
						type="text" 
						placeholder={this.props.intl.formatMessage(messages.email)} 
						onChange={this.onEmail}
						data-tip
						data-for="email-tip" />
					<i className="fa fa-envelope mail-icon" aria-hidden="true"></i>

					{
						this.state.emailErrorMessage && 
						<ReactCSSTransitionGroup 
							transitionName="example" 
							transitionEnterTimeout={500} 
							transitionLeaveTimeout={300} 
							transitionAppear={true} 
							transitionAppearTimeout={0}>
							<div styleName="error-message">{this.state.emailErrorMessage}</div>
						</ReactCSSTransitionGroup>
						
					}
				</div>
				
				<div className="relative mb20">
					<label styleName={this.state.password ? 'active':'none'}>{this.props.intl.formatMessage(messages.password)}</label>
					<input
						autoComplete="off" 
						ref= "password"
						className="ui-input-text"
						styleName= {passwordStyle}
						type="password" 
						placeholder={this.props.intl.formatMessage(messages.password)} 
						onChange={this.onPassword}
						data-tip
						data-for="password-tip" />
					<i className="fa fa-lock lock-icon" aria-hidden="true"></i>

					{
						this.state.passwordErrorMessage && 
						<ReactCSSTransitionGroup 
							transitionName="example" 
							transitionEnterTimeout={500} 
							transitionLeaveTimeout={300} 
							transitionAppear={true} 
							transitionAppearTimeout={0}>
							<div styleName="error-message">{this.state.passwordErrorMessage}</div>
						</ReactCSSTransitionGroup>
						
					}
				</div>
				<div className="mb20">
					<button styleName="register-btn">Login</button>
				</div>
				<div className="row mb20">
					<div className="col-xs-7 vac">
						<Link to="/register" className="ib vam">Don't have an account yet?</Link>
					</div>
				</div>
				<div styleName="top-border">
					
					<div className="mb30">
						<FacebookLogin
							appId="874548529292218"
							autoLoad={true}
							fields="name,email,picture"
							onClick={this.componentClicked.bind(this)}
							callback={this.responseFacebook.bind(this)}
							textButton="Login with Facebook"
							cssClass="fb-login-btn" />
					</div>
					<div>
						<GoogleLogin
							clientId="927836081945-6k3n63vjb9hnq0tponffd4hgief1nr7l.apps.googleusercontent.com"
							buttonText="Login with Google"
							className="gg-login-btn"
							onSuccess={this.responseGoogle.bind(this)}
							onFailure={this.responseGoogle.bind(this)}
						/>
					</div>
				</div>
			</form>
		)
	}
}

RegisterForm.propTypes = {
	intl: intlShape.isRequired,
	onData: React.PropTypes.func.isRequired
}


export default injectIntl(RegisterForm)