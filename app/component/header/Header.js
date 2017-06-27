import React from 'react'
import {Link} from 'react-router'
import config from 'config'
import './header.scss'
import PropTypes from 'prop-types'

export default class Header extends React.Component {
	constructor(){
		super()
		this.logout = this.logout.bind(this)

		this.state = {
			menu:false,
			userMenu:false
		}
	}
	logout(){
		this.props.logout().then( () =>{
			this.context.router.push('/login')
		})
	}
	toggleUserMenu(){
		if (this.state.userMenu === true) this.setState({userMenu:false})
		else if(this.state.userMenu === false) this.setState({userMenu:true})
	}
	toggleGeneralMenu(){
		if (this.state.menu === true) this.setState({menu:false})
		else if(this.state.menu === false) this.setState({menu:true})
	}
	closeGeneralMenu(){
		this.setState({menu:false})
	}
	closeUserMenu(){
		this.setState({userMenu:false})
	}
	render(){
		return (
			<header styleName="header">
				<Link to="/">home</Link>
				<Link to="/admin">admin</Link>
				<Link to="/checkout">check out</Link>
				<Link to="/history">order history</Link>
			</header>
		)
	}
}
Header.contextTypes = {router: PropTypes.object.isRequired}