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
			i.cart.map((i, index) => {
				return (
					<div key="index">
						<div>{i.title}</div>
						<div>{i.author}</div>
					</div>	
				)
			})
		}
	}
	renderHistory(){
		if (store.get('history')) {
			let history = store.get('history')
			history.map( (i, index) => {
				return (
					<div key="index">
						<div styleName="personal">
							<div>{i.name}</div>
							<div>{i.author}</div>
							<div>{i.time}</div>
						</div>
						<div styleName="cart">
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
				<h3>Order history</h3>
				{this.renderHistory()}
			</div>
		)
	}
}