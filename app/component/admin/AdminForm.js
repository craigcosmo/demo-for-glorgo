import React from 'react'
import './adminForm.scss'
import { intlShape, injectIntl, defineMessages } from 'react-intl'
import Tooltip from 'react-tooltip'
import {findDOMNode} from 'react-dom'
import validate from 'validate'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classnames from 'classnames'
import {HotKeys} from 'react-hotkeys'


export default class AdminForm extends React.Component{
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this)
		this.onTitleChange = this.onTitleChange.bind(this)
		this.onAuthorChange = this.onAuthorChange.bind(this)

		this.state = {
			titleErrorMessage: '',
			authorErrorMessage:'',

			title :'',
			author:''
		}
	}

	validateOnSubmit(){

		this.input = [
			{value:this.state.title, callback: this.handleTitleError.bind(this) },
			{value:this.state.author, callback: this.handleAuthorError.bind(this) },
			
		]
		return validate(this.input)

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
	handleChange(e, callback, name, creditCard='', email=''){
		this.setState({[name]: e.target ? e.target.value : e})
		return validate({
			value:e.target ? e.target.value : e,
			callback: callback,
			check: {creditCard: creditCard ? true : false, email: email ? true : false}
		})
	}
	handleTitleError(reason){
		if (reason)this.setState({titleErrorMessage : 'required'})
		else {this.setState({titleErrorMessage : ''})}
	}
	handleAuthorError(reason){
		if (reason)this.setState({authorErrorMessage : 'required'})
		else {this.setState({authorErrorMessage : ''})}
	}

	onTitleChange(e){
		return this.handleChange(e, this.handleTitleError.bind(this), 'title')
	}
	onAuthorChange(e){
		return this.handleChange(e, this.handleAuthorError.bind(this), 'author')
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
						<label styleName={this.state.title ? 'active':'none'}>title</label>
						<input
							autoComplete="off" 
							styleName= {titleStyle} 
							type="text" 
							placeholder="title"
							onChange={this.onTitleChange} />
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
						<label styleName={this.state.author ? 'active':'none'}>author</label>
						<input
							autoComplete="off" 
							styleName= {authorStyle}
							type="text" 
							placeholder="author"
							onChange={this.onAuthorChange} />
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
	onData: React.PropTypes.func.isRequired
}


