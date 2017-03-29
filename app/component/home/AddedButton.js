import React from 'react'
import './home.scss'
export default class AddedButton extends React.Component{
	constructor(){
		super()
	}
	render(){ 
		return(
			<button styleName="added-btn">added to cart</button>
		)
	}
}