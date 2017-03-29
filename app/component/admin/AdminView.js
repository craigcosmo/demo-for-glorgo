import React from 'react'
import AdminForm from 'AdminForm'
import Header from 'Header'
import Modal from 'react-modal'
import Loader from 'Loader'
import './adminView.scss'
import store from 'store'
import adminEpic from 'adminEpic'

export default class AdminView extends React.Component {
	onData(data){
		this.props.saveBook(data)
	}
	componentDidUpdate(){
		if (this.props.admin.loading==='success') {
			document.querySelector('form').reset()
		}
	}
	render() {
		return (
			<div styleName="register">
				<Header {...this.props} />
				<main>
					<h1>ADMIN</h1>
					<AdminForm onData = {this.onData.bind(this)} />
					{this.props.admin.loading===true && <div><br /><br /><Loader /></div>}
					{this.props.admin.loading==='success' && <div><br /><br />success</div>}
				</main>
			</div>
		)
	}
}

AdminView.propTypes ={
	admin: React.PropTypes.object
}