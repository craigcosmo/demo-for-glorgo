import React from 'react'

const HeaderSignOut = (props) => (
	<div>
		<span className="header-username">{props.username}</span>
		<i className="fa fa-sign-out"></i>
		<button className="logout capitalize" onClick={props.logout}>sign out</button>
	</div>
)

export default HeaderSignOut