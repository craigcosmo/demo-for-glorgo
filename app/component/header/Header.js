import React from 'react'
import {Link} from 'react-router'
import user from 'user'
import config from 'config'
import DropMenu from 'DropMenu'
// import UserMenu from 'userMenu/UserMenu'
import HeaderLogin from 'HeaderLogin'
import HeaderSignOut from 'HeaderSignOut'
import './header.scss'

export default class Header extends React.Component {
	constructor(){
		super()
		this.logout = this.logout.bind(this)

		this.state = {
			menu:false,
			userMenu:false
		}
	}
	componentDidMount(){

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
	renderUserSection(){
		if (user()) return <HeaderSignOut />
		else return <HeaderLogin/>
	}
	render(){
		return (
			<header styleName="header">
				{this.renderUserSection()}
			</header>
		)
	}
}
Header.contextTypes = {router: React.PropTypes.object.isRequired}