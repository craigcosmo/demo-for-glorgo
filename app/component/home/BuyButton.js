import React from 'react'
import './home.scss'
export default class BuyButton extends React.Component{
	onClick(){
		console.log('sdsd')
		this.props.onBuy(this.props.i)
	}
	render(){ 
		return(
			<button styleName="buy-btn" onClick={this.onClick.bind(this)}>buy</button>
		)
	}
}

