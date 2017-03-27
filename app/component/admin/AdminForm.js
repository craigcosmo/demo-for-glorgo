

import React from 'react'
import './adminForm.scss'
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
	title: {
		id: 'adminForm.title',
		defaultMessage: 'title'
	},
	author: {
		id: 'adminForm.author',
		defaultMessage: 'author'
	}
})

class AdminForm extends React.Component{
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this)
		this.onName = this.onName.bind(this)
		this.onAuthor = this.onAuthor.bind(this)

		this.state = {
			registerModal: false,
			nameErrorMessage: '',
			authorErrorMessage:'',

			name :'',
			author:''
		}
	}

	validateOnSubmit(){
		let input = [
			{value:this.state.name, callback: this.nameError.bind(this) },
			{value:this.state.author, callback: this.authorError.bind(this) },
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
	authorError(reason){
		if (reason === 'length'){ 
			this.setState({authorErrorMessage : 'required'})
		}
		else {this.setState({authorErrorMessage : ''})}
	}
	getRandom(length) {
		return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1))
	}
	onName(e){
		this.setState({name: e.target.value})
		validate({
			value:e.target.value,
			callback: this.nameError.bind(this)
		})
	}
	onAuthor(e){
		this.setState({author: e.target.value})
		validate({
			value:e.target.value,
			callback: this.authorError.bind(this)
		})
	}
	
	render(){ 
		const nameStyle = classnames({
			none: !this.state.name,
			active: this.state.name,
			error: this.state.nameErrorMessage
		})
		const authorStyle = classnames({
			none: !this.state.author,
			active: this.state.author,
			error: this.state.authorErrorMessage
		})
		
		return(
			<form onSubmit={this.onSubmit} styleName="form">
				<div styleName="relative user-wrapper">
					<label styleName={this.state.name ? 'active':'none'}>{this.props.intl.formatMessage(messages.title)}</label>
					<input
						autoComplete="off" 
						ref= "name" 
						styleName= {nameStyle} 
						type="text" 
						placeholder={this.props.intl.formatMessage(messages.title)} 
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
					<label styleName={this.state.author ? 'active':'none'}>{this.props.intl.formatMessage(messages.author)}</label>
					<input
						autoComplete="off" 
						styleName= {authorStyle}
						type="text" 
						placeholder={this.props.intl.formatMessage(messages.author)} 
						onChange={this.onAuthor} />
					<i className="fa fa-envelope mail-icon" aria-hidden="true"></i>

					{
						this.state.authorErrorMessage && 
						<ReactCSSTransitionGroup 
							transitionName="example" 
							transitionAppear={true} 
							transitionAppearTimeout={300}
							transitionEnterTimeout={300}
							transitionLeaveTimeout={300}>
							<div styleName="error-message">{this.state.authorErrorMessage}</div>
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
	onData: React.PropTypes.func.isRequired
}


export default injectIntl(AdminForm)