import React from 'react'
import './main.scss'
export default class Main extends React.Component{
	constructor(){
		super()
	}
	render(){ 
		return(
			<main>{this.props.children}</main>
		)
	}
}