import React from 'react'
import {Link} from 'react-router'
import config from 'config'
import './headerLogin.scss'
export default class HeaderLogin extends React.Component{
	constructor(){
		super()
	}
	render(){ 
		return(
			<div styleName="w">
				<Link to="/admin">admin</Link>
			</div>
		)
	}
}