

import React from 'react'
import './adminForm.scss'
import { intlShape, injectIntl, defineMessages } from 'react-intl'
import Tooltip from 'react-tooltip'
import {findDOMNode} from 'react-dom'
import validate from 'validate'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classnames from 'classnames'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import PropTypes from 'prop-types'

const messages = defineMessages({
	name: {
		id: 'registerForm.name',
		defaultMessage: 'full name'
	},
	email: {
		id: 'registerForm.email',
		defaultMessage: 'email address'
	},
	password: {
		id: 'registerForm.password',
		defaultMessage: 'password'
	},
	passwordConfirm: {
		id: 'registerForm.passwordConfirm',
		defaultMessage: 'confirm password'
	}
})

class AdminForm extends React.Component{
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this)
		this.onName = this.onName.bind(this)
		this.onPassword = this.onPassword.bind(this)
		this.onPasswordConfirm = this.onPasswordConfirm.bind(this)
		this.onEmail = this.onEmail.bind(this)

		this.state = {
			registerModal: false,
			nameErrorMessage: '',
			emailErrorMessage: '',
			passwordErrorMessage: '',
			passwordConfirmErrorMessage: '',
			name :'',
			email :'',
			password :'',
			passwordConfirm :''
		}
	}

	validateOnSubmit(){
		let input = [
			{value:this.state.name, callback: this.nameError.bind(this) },
			{value:this.state.email, check:{email:true}, callback: this.emailError.bind(this) },
			{value:this.state.password, check:{min:4}, callback: this.passwordError.bind(this) },
			{
				value: this.state.passwordConfirm,
				check:{match:this.state.password},
				callback: this.passwordConfirmError.bind(this)
			}
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
	nameError(reason){
		if (reason === 'length'){ 
			this.setState({nameErrorMessage : 'required'})
		}
		else {this.setState({nameErrorMessage : ''})}
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
	passwordConfirmError(reason){
		if (reason === 'length') { 
			this.setState({passwordConfirmErrorMessage : 'required'})
		}
		else if (reason === 'match') {
			this.setState({passwordConfirmErrorMessage : 'must match password'}) 
		}
		else this.setState({passwordConfirmErrorMessage : ''}) 
	}
	onEmail(e){
		this.setState({email: e.target.value})
		validate({
			value:e.target.value, 
			check:{email:true}, 
			callback: this.emailError.bind(this)
		})
	}
	onName(e){
		this.setState({name: e.target.value})
		validate({
			value:e.target.value,
			callback: this.nameError.bind(this)
		})
	}
	onPasswordConfirm(e){
		this.setState({passwordConfirm: e.target.value})
		validate( {
			value:e.target.value, 
			check: {match: this.state.password}, 
			callback: this.passwordConfirmError.bind(this)
		})
	}
	onPassword(e){
		this.setState({password: e.target.value})
		validate({
			value:e.target.value, 
			check:{min:4}, 
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
		let nameStyle = classnames({
			none: !this.state.name,
			active: this.state.name,
			error: this.state.nameErrorMessage
		})
		let emailStyle = classnames({
			none: !this.state.email,
			active: this.state.email,
			error: this.state.emailErrorMessage
		})
		let passwordStyle = classnames({
			none: !this.state.password,
			active: this.state.password,
			error: this.state.passwordErrorMessage
		})
		let passwordConfirmStyle = classnames({
			none: !this.state.passwordConfirm,
			active: this.state.passwordConfirm,
			error: this.state.passwordConfirmErrorMessage
		})
		return(
			<form onSubmit={this.onSubmit} styleName="form">
				<div styleName="relative user-wrapper">
					<label styleName={this.state.name ? 'active':'none'}>{this.props.intl.formatMessage(messages.name)}</label>
					<input
						autoComplete="off" 
						ref= "name" 
						styleName= {nameStyle} 
						type="text" 
						placeholder={this.props.intl.formatMessage(messages.name)} 
						onChange={this.onName} />
					<i className="fa fa-user" aria-hidden="true"></i>
					{
						this.state.nameErrorMessage && 
						<ReactCSSTransitionGroup 
							transitionName="example" 
							transitionAppear={true} 
							transitionAppearTimeout={300}
							transitionEnterTimeout={300}
							transitionLeaveTimeout={300}>
							<div styleName="error-message">{this.state.nameErrorMessage}</div>
						</ReactCSSTransitionGroup>
					}
				</div>
				<div styleName="relative">
					<label styleName={this.state.email ? 'active':'none'}>{this.props.intl.formatMessage(messages.email)}</label>
					<input
						autoComplete="off" 
						ref= "email" 
						styleName= {emailStyle}
						type="text" 
						placeholder={this.props.intl.formatMessage(messages.email)} 
						onChange={this.onEmail} />
					<i className="fa fa-envelope mail-icon" aria-hidden="true"></i>

					{
						this.state.emailErrorMessage && 
						<ReactCSSTransitionGroup 
							transitionName="example" 
							transitionAppear={true} 
							transitionAppearTimeout={300}
							transitionEnterTimeout={300}
							transitionLeaveTimeout={300}>
							<div styleName="error-message">{this.state.emailErrorMessage}</div>
						</ReactCSSTransitionGroup>
						
					}
				</div>
				
				<div styleName="relative pass-wrapper">
					<label styleName={this.state.password ? 'active':'none'}>{this.props.intl.formatMessage(messages.password)}</label>
					<input
						autoComplete="off" 
						ref= "password"
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
							transitionAppear={true} 
							transitionAppearTimeout={300}
							transitionEnterTimeout={300}
							transitionLeaveTimeout={300}>
							<div styleName="error-message">{this.state.passwordErrorMessage}</div>
						</ReactCSSTransitionGroup>
						
					}
				</div>
				<div styleName="relative pass-wrapper">
					<label styleName={this.state.passwordConfirm ? 'active':'none'}>{this.props.intl.formatMessage(messages.passwordConfirm)}</label>
					<input
						autoComplete="off" 
						ref= "passwordConfirm" 
						styleName= {passwordConfirmStyle}
						type="password" 
						placeholder={this.props.intl.formatMessage(messages.passwordConfirm)} 
						onChange={this.onPasswordConfirm}
						data-tip
						data-for="password-confirm-tip" />
					<i className="fa fa-lock lock-icon" aria-hidden="true"></i>

					{
						this.state.passwordConfirmErrorMessage && 
						<ReactCSSTransitionGroup 
							transitionName="example" 
							transitionAppear={true} 
							transitionAppearTimeout={300}
							transitionEnterTimeout={300}
							transitionLeaveTimeout={300}>
							<div styleName="error-message">{this.state.passwordConfirmErrorMessage}</div>
						</ReactCSSTransitionGroup>	
					}
				</div>
				<div>
					<button styleName="register-btn">submit</button>
				</div>
			</form>
		)
	}
}

AdminForm.propTypes = {
	intl: intlShape.isRequired,
	onData: PropTypes.func.isRequired
}


export default injectIntl(AdminForm)