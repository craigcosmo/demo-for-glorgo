import React from 'react'
import './checkoutForm.scss'
import validate from 'validate'
import {Link} from 'react-router'
import L from 'locationConstant'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classnames from 'classnames'
import {HotKeys} from 'react-hotkeys'

export default class AdminForm extends React.Component{
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this)
		this.onNameChange = this.onNameChange.bind(this)
		this.onAddressChange = this.onAddressChange.bind(this)
		this.onCreditCardChange = this.onCreditCardChange.bind(this)
		this.onEmailChange = this.onEmailChange.bind(this)
		this.onBillingAddressChange = this.onBillingAddressChange.bind(this)
		this.input
		this.state = {
			nameErrorMessage: '',
			creditCardErrorMessage:'',
			emailErrorMessage:'',
			addressErrorMessage:'',
			billingAddressErrorMessage:'',

			name :'',
			email:'',
			address:'',
			billingAddress:'',
			creditCard:''
		}

	}

	validateOnSubmit(){

		this.input = [
			{value:this.state.name, callback: this.handleNameError.bind(this) },
			{value:this.state.email, check:{email:true}, callback: this.handlEmailError.bind(this) },
			{value:this.state.address, callback: this.handleAddressError.bind(this) },
			{value:this.state.billingAddress, callback: this.handleBillingAddressError.bind(this) },
			// {value:this.state.creditCard, check:{creditCard:true}, callback: this.handleCreditCardError.bind(this) },
			{value:this.state.creditCard, check:{creditCard:false}, callback: this.handleCreditCardError.bind(this) },
			
		]
		return validate(this.input)
	
	}
	onSubmit(e){
		e.preventDefault()

		if (!this.validateOnSubmit()) return

		let data = {
			name: this.state.name,
			address: this.state.address,
			billingAddress: this.state.billingAddress,
			email: this.state.email,
			creditCard: this.state.creditCard
		}
		this.props.onData(data)
		
	}
	handleNameError(reason){
		if (reason==='required') this.setState({nameErrorMessage : 'required'})
		else {this.setState({nameErrorMessage : ''})}
	}
	handleAddressError(reason){
		if (reason==='required') this.setState({addressErrorMessage : 'required'})
		else {this.setState({addressErrorMessage:''})}
	}
	handleCreditCardError(reason){
		if (reason==='invalid') this.setState({creditCardErrorMessage : 'invalid credit card'})
		else if (reason==='required') this.setState({creditCardErrorMessage : 'required'})
		else {this.setState({creditCardErrorMessage:''})}
	}
	handlEmailError(reason){
		if (reason==='required') this.setState({emailErrorMessage : 'required'})
		else if (reason==='invalid') this.setState({emailErrorMessage : 'invalid emaill address'})
		else {this.setState({emailErrorMessage:''})}
	}
	handleBillingAddressError(reason){
		if (reason==='required') this.setState({billingAddressErrorMessage : 'required'})
		else {this.setState({billingAddressErrorMessage:''})}
	}
	handleChange(e, callback, name, creditCard='', email=''){
		this.setState({[name]: e.target ? e.target.value : e})
		let a = validate({
			value:e.target ? e.target.value : e,
			callback: callback,
			check: {creditCard: creditCard ? true : false, email: email ? true : false}
		})
	}
	onNameChange(e){
		this.handleChange(e, this.handleNameError.bind(this), 'name')
	}
	onEmailChange(e){
		this.handleChange(e, this.handlEmailError.bind(this), 'email', '', 'email' )
	}
	onAddressChange(e){
		this.handleChange(e, this.handleAddressError.bind(this), 'address' )
	}
	onCreditCardChange(e){
		this.handleChange(e, this.handleCreditCardError.bind(this), 'creditCard', 'creditCard' )
		this.handleChange(e, this.handleCreditCardError.bind(this), 'creditCard', '' )
	}
	onBillingAddressChange(e){
		this.handleChange(e, this.handleBillingAddressError.bind(this), 'billingAddress' )
	}
	
	render(){ 
		const keyMap = {
			'submitForm': 'command+enter'
		}
		const handlers = {
			'submitForm': this.onSubmit.bind(this)
		}

		const nameStyle = classnames({
			none: !this.state.name,
			active: this.state.name,
			error: this.state.nameErrorMessage
		})
		const emailStyle = classnames({
			none: !this.state.email,
			active: this.state.email,
			error: this.state.emailErrorMessage
		})
		const addressStyle = classnames({
			none: !this.state.address,
			active: this.state.address,
			error: this.state.addressErrorMessage
		})
		const billingAddressStyle = classnames({
			none: !this.state.billingAddress,
			active: this.state.billingAddress,
			error: this.state.billingAddressErrorMessage
		})
		const creditCardStyle = classnames({
			none: !this.state.creditCard,
			active: this.state.creditCard,
			error: this.state.creditCardErrorMessage
		})
		
		return(
			<HotKeys keyMap={keyMap} handlers={handlers}>
				<form onSubmit={this.onSubmit} styleName="form">
					<div styleName="relative user-wrapper">
						<label styleName={nameStyle}>name</label>
						<input
							autoComplete="off" 
							styleName= {nameStyle} 
							type="text" 
							placeholder="name"
							onChange={this.onNameChange} />
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
						<label styleName={this.state.email ? 'active':'none'}>email address</label>
						<input
							autoComplete="off" 
							styleName= {emailStyle}
							type="text" 
							placeholder="email address"
							onChange={this.onEmailChange} />
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
					<div styleName="relative">
						<label styleName={addressStyle}>Delivery Address</label>
						<input
							autoComplete="off" 
							styleName= {addressStyle}
							type="text" 
							placeholder="Delivery Address"
							onChange={this.onAddressChange} />
						<i className="fa fa-envelope mail-icon" aria-hidden="true"></i>

						{
						this.state.addressErrorMessage && 
						<ReactCSSTransitionGroup 
							transitionName="example" 
							transitionAppear={true} 
							transitionAppearTimeout={300}
							transitionEnterTimeout={300}
							transitionLeaveTimeout={300}>
							<div styleName="error-message">{this.state.addressErrorMessage}</div>
						</ReactCSSTransitionGroup>	
					}
					</div>
					<div styleName="relative">
						<label styleName={billingAddressStyle}>Billing Address</label>
						<input
							autoComplete="off" 
							styleName= {billingAddressStyle}
							type="text" 
							placeholder="Billing Address"
							onChange={this.onBillingAddressChange} />
						<i className="fa fa-envelope mail-icon" aria-hidden="true"></i>

						{
						this.state.billingAddressErrorMessage && 
						<ReactCSSTransitionGroup 
							transitionName="example" 
							transitionAppear={true} 
							transitionAppearTimeout={300}
							transitionEnterTimeout={300}
							transitionLeaveTimeout={300}>
							<div styleName="error-message">{this.state.billingAddressErrorMessage}</div>
						</ReactCSSTransitionGroup>	
					}
					</div>
					<div styleName="relative">
						<label styleName={creditCardStyle}>Credit Card number</label>
						<input
							autoComplete="off" 
							styleName= {creditCardStyle}
							type="text" 
							placeholder="Credit Card Information"
							onChange={this.onCreditCardChange} />
						<i className="fa fa-envelope mail-icon" aria-hidden="true"></i>

						{
						this.state.creditCardErrorMessage && 
						<ReactCSSTransitionGroup 
							transitionName="example" 
							transitionAppear={true} 
							transitionAppearTimeout={300}
							transitionEnterTimeout={300}
							transitionLeaveTimeout={300}>
							<div styleName="error-message">{this.state.creditCardErrorMessage}</div>
						</ReactCSSTransitionGroup>	
					}
					</div>
					<div>
						<button styleName="register-btn">order</button>
					</div>

				</form>
			</HotKeys>
		)
	}
}



