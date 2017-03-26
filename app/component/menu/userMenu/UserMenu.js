import React from 'react'
import {Link} from 'react-router'
import './userMenu.scss'
import L from 'locationConstant'
import onClickOutside from 'react-onclickoutside'

@onClickOutside
export default class UserMenu extends React.Component {
	constructor(props) {
		super(props)
	}
	handleClickOutside(e){
		this.props.closeUserMenu()
	}
	render() {
		return (
			<div className="user-menu">
				<div className="menu">
					<div className="arrow-up"></div>
					<Link to={L.PROFILE}>
						<span className="capitalize">my profile</span>
					</Link>
					<Link to={L.ACCOUNT}>
						<span className="capitalize">account setting</span>
					</Link>
					<Link onClick={this.props.logout}>
						<span className="capitalize">sign out</span>
					</Link>
				</div>
			</div>
		)
	}
}
