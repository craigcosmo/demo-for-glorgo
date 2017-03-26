import React from 'react'
import {Link} from 'react-router'
import './dropMenu.scss'
import L from 'locationConstant'
import onClickOutside from 'react-onclickoutside'

@onClickOutside
export default class DropMenu extends React.Component {
	constructor(props) {
		super(props)
	}
	handleClickOutside(e){
		this.props.closeGeneralMenu()
	}
	render() {
		return (
			<div className="drop-menu">
				<div className="menu">
					<div className="arrow-up"></div>
					<Link>
						<span className="menu-icon discussion-icon">
							<i className="fa fa-comment-o" aria-hidden="true"></i>
						</span>
						<span className="capitalize">discussion</span>
					</Link>
				
					<Link>
						<span className="menu-icon question-icon">
							<i className="fa fa-question-circle-o" aria-hidden="true"></i>
						</span>
						<span className="capitalize">question</span>
					</Link>
				
					<Link>
						<span className="menu-icon event-icon">
							<i className="fa fa-calendar" aria-hidden="true"></i>
						</span>
						<span className="capitalize">event</span>
					</Link>
				
					<Link>
						<span className="menu-icon poll-icon">
							<i className="fa fa-bar-chart" aria-hidden="true"></i>
						</span>
						<span className="capitalize">poll</span>
					</Link>
				
					<Link>
						<span className="menu-icon member-icon">
							<i className="fa fa-user" aria-hidden="true"></i>
						</span><span className="capitalize">member</span>
					</Link>
				
					<Link>
						<span className="menu-icon invite-icon">
							<i className="fa fa-user-plus" aria-hidden="true"></i>
						</span><span className="capitalize">invite friend</span>
					</Link>
					
					
				</div>
				
			</div>
		)
	}
}



// const Drop =  onClickOutside(DropMenu)

DropMenu.propTypes ={
	closeGeneralMenu: React.PropTypes.func.isRequired
}

