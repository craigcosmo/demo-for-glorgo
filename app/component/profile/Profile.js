import React from 'react'
import {Link} from 'react-router'
import './profile.scss'
import Header from 'Header'
import Footer from 'Footer'

export default class Profile extends React.Component {
	constructor(){
		super()
	}
	render(){
		return (
			<div className="profile pin-footer">
				<Header />
				<main className="center">
					<h1>coming soon</h1>
				</main>
				<Footer />
			</div>
		)
	}
}