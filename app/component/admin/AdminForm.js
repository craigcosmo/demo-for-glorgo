

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
import {HotKeys} from 'react-hotkeys'

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
		this.onTitle = this.onTitle.bind(this)
		this.onAuthor = this.onAuthor.bind(this)

		this.state = {
			titleErrorMessage: '',
			authorErrorMessage:'',

			title :'',
			author:''
		}
	}

	validateOnSubmit(){
		let input = [
			{value:this.state.title, callback: this.onTitleError.bind(this) },
			{value:this.state.author, callback: this.onAuthorError.bind(this) },
		]
		return validate(input)
	}
	onSubmit(e){
		e.preventDefault()

		if (!this.validateOnSubmit()) return

		let data = {
			title: this.state.title,
			author: this.state.author
		}
		this.props.onData(data)
		
	}
	onTitleError(reason){
		if (reason)this.setState({titleErrorMessage : 'required'})
		else {this.setState({titleErrorMessage : ''})}
	}
	onAuthorError(reason){
		if (reason)this.setState({authorErrorMessage : 'required'})
		else {this.setState({authorErrorMessage : ''})}
	}
	getRandom(length) {
		return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1))
	}
	onTitle(e){
		this.setState({title: e.target.value})
		validate({
			value:e.target.value,
			callback: this.titleError.bind(this)
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

		const keyMap = {
			'submitForm': 'command+enter'
		}
		const handlers = {
			'submitForm': this.onSubmit.bind(this)
		}

		const titleStyle = classnames({
			none: !this.state.title,
			active: this.state.title,
			error: this.state.titleErrorMessage
		})
		const authorStyle = classnames({
			none: !this.state.author,
			active: this.state.author,
			error: this.state.authorErrorMessage
		})
		
		return(
			<HotKeys keyMap={keyMap} handlers={handlers}>
				<form onSubmit={this.onSubmit} styleName="form">
					<div styleName="relative user-wrapper">
						<label styleName={this.state.title ? 'active':'none'}>{this.props.intl.formatMessage(messages.title)}</label>
						<input
							autoComplete="off" 
							styleName= {titleStyle} 
							type="text" 
							placeholder={this.props.intl.formatMessage(messages.title)} 
							onChange={this.onTitle} />
						<i className="fa fa-user" aria-hidden="true"></i>
						{
						this.state.titleErrorMessage && 
						<ReactCSSTransitionGroup 
							transitionName="example" 
							transitionAppear={true} 
							transitionAppearTimeout={300}
							transitionEnterTimeout={300}
							transitionLeaveTimeout={300}>
							<div styleName="error-message">{this.state.titleErrorMessage}</div>
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
						<button styleName="register-btn">Add Book</button>
					</div>
				</form>
			</HotKeys>
		)
	}
}

AdminForm.propTypes = {
	intl: intlShape.isRequired,
	onData: React.PropTypes.func.isRequired
}


export default injectIntl(AdminForm)