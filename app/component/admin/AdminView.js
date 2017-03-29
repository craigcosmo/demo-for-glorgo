import React from 'react'
import AdminForm from 'AdminForm'
import Header from 'Header'
import Modal from 'react-modal'
import Loader from 'Loader'
import './adminView.scss'
import store from 'store'
import adminEpic from 'adminEpic'

export default class AdminView extends React.Component {
	constructor(props) {
		super(props)
		// console.log(props)
		// this.state = {
		// 	loader:false
		// }
	}
	componentDidMount(){
		// console.log(this.props.admin.loading)
	}
	onData(data){
		// this.setState({loader:true})
		this.props.saveBook(data)
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