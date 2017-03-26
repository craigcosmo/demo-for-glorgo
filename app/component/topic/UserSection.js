import React from 'react'
import './userSection.scss'
import {secondsToDate} from 'dateHelper'


const UserSection = (props) => (
	<div className="user-section">
		<div className="user-banner">
			<span className="capitalize created-by">created by</span>
			<i className="fa fa-user"></i>
			<span className="user-name">{props.name}</span>
			<span className="created-date">{secondsToDate(props.created)}</span>
		</div>
		<div className="center">
			<h2 className="capitalize">comments</h2>
		</div>
	</div>
)

export default UserSection

