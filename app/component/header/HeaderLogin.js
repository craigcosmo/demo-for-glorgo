import React from 'react'
import {Link} from 'react-router'
import config from 'config'
export default class HeaderLogin extends React.Component{
	constructor(){
		super()
	}
	render(){ 
		return(
			<div className="flexright">
				<Link to="/register">register</Link>
				<Link to="/login">login</Link>
			</div>
		)
	}
}