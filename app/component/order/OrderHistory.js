import React from 'react'
import Header from 'Header'
import './orderHistory.scss'
import store from 'store'

export default class OrderHistory extends React.Component{
	constructor(){
		super()
	}
	renderCart(i){
		if (i.hasOwnProperty('cart')) {
			return i.cart.map((u, index) => {
				return (
					<div key={index}>
						<div>{u.title}</div>
						<div>{u.author}</div>
					</div>	
				)
			})
		}
	}
	renderHistory(){
		if (store.get('history')) {
			let history = store.get('history')
			return history.map( (i, index) => {
				console.log(i)
				return (
					<div key={index} styleName="order-item">
						<div styleName="personal">
							<div>name: {i.name}</div>
							<div>billing address: {i.billingAddress}</div>
							<div>Order date: {i.time}</div>
						</div>
						<div styleName="cart">
							<h6>Books</h6>
							{this.renderCart(i)}
						</div>
					</div>
				)
			})
			
		}else{
			return <div>You don't have order history yet</div>
		}
		
	}
	render(){ 
		return(
			<div styleName="order">
				<Header {...this.props} />
				<h2>Order history</h2>
				{this.renderHistory()}
			</div>
		)
	}
}