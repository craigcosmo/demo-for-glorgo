import React from 'react'
import store from 'store'
import './checkoutView.scss'
import Header from 'Header'
import CheckoutForm from 'CheckoutForm'
import moment from 'moment'

export default class CheckOut extends React.Component{
	constructor(){
		super()
		this.state={
			renew:false,
			success: false
		}
	}
	onData(data){
		// console.log(data)
		this.setState({success:false})
		let cart = store.get('cart')
		data.time = moment()
		data.cart = cart

		this.props.submitOrder(data).then( (r) =>{
			console.log(r)
			// save to history
			let history = []
			if (store.get('history')) history = store.get('history')
			history.push(data)
			store.set('history', history)
			document.querySelector('form').reset()
			this.setState({success:true})
		})
		
		// console.log('done')

		
	}
	removeItemInCart(index){
		if (store.get('cart')) {
			let cart = store.get('cart')
			cart.splice(index, 1)
			store.set('cart', cart)
			this.setState({renew:true})
		}
	}
	renderCart(){
		if (store.get('cart')) {
			const cart = store.get('cart')
			const count = cart.length

			return <div>you are checking out <b>{count}</b> items</div>
		}else{
			return <div>Your cart is empty</div>
		}
	}
	renderCartItem() {
		if (store.get('cart')) {
			let items = store.get('cart')
			return items.map( (i, index) => {
				return (
					<div key={index} styleName="item">
						<div styleName="title">{i.title}</div>
						<div styleName="author">{i.author}</div>
						<span styleName="remove-btn" onClick={this.removeItemInCart.bind(this, index)}>remove</span>
					</div>
				)
			})
		}
	}
	render(){ 
		return(
			<div styleName="checkout">
				<Header {...this.props} />
				<h2>cart</h2>
				<div styleName="cart">
					{this.renderCart()}
				</div>
				<div styleName="cart">
					{this.renderCartItem()}
				</div>
				<h2>personal info</h2>
				<div>
					<CheckoutForm onData={this.onData.bind(this)} />
					{this.props.checkout.loading && <div>loading</div>}
					{this.state.success && <div>success</div>}
				</div>
			</div>
		)
	}
}