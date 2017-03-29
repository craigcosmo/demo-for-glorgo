import React from 'react'
import './home.scss'
import BuyButton from 'BuyButton'
import AddedButton from 'AddedButton'
import store from 'store'

export default class Item extends React.Component{
	constructor(){
		super()
		this.state={
			buy:false
		}
	}
	onBuy(i){
		this.setState({buy:true})
		this.addToCart(i)
	}
	addToCart(i){
		let cart
		if (store.get('cart')) {
			cart = store.get('cart')
		}else{
			cart = []
		}
		cart.push(i)
		cart = this.removeDuplicates(cart, 'id') // remove duplicate id
		store.set('cart', cart)
	}
	removeDuplicates(myArr, prop) {
	    return myArr.filter((obj, pos, arr) => {
	        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
	    })
	}
	renderButtons(){
		if (!this.state.buy) {
			return <BuyButton i={this.props.i} onBuy={this.onBuy.bind(this)} />
		}else{
			return <AddedButton i={this.props.i} onBuy={this.onBuy.bind(this)} />
		}
	}
	render(){ 
		return(
			<div styleName="item">
				<div styleName="inner">
					<div styleName="text-section">
						<span styleName="title">{this.props.i.title}</span>
						<span styleName="author">{this.props.i.author}</span>
					</div>
					<div styleName="btn-section">
						{this.renderButtons()}
					</div>
				</div>
			</div>
		)
	}
}