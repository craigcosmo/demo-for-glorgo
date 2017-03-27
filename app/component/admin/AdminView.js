import React from 'react'
import AdminForm from 'AdminForm'
import Header from 'Header'
import Modal from 'react-modal'
import Loader from 'Loader'
import './adminView.scss'
import store from 'store'

export default class AdminView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			successModal: false,
			loader:false
		}
	}
	onData(data){
		this.setState({loader:true})
		this.props.submitBook(data)
		// .subscribe( (a)=> {
		// 	console.log(a)
		// 	// this.setState({successModal:true, loader:false})
		// })
	}
	closeModal(){
		this.setState({successModal:false})
	}
	render() {
		return (
			<div styleName="register">
				<Header {...this.props} />
				<main>
					<h1>ADMIN</h1>
					<AdminForm onData = {this.onData.bind(this)} />
					{this.state.loader && <div><br /><br /><Loader /></div>}
					<Modal
						overlayClassName="register-modal-overlay"
						className="register-modal"
						isOpen={this.state.successModal} 
						onRequestClose={this.closeModal.bind(this)}
						contentLabel="modal">
						<div>
							<span >register completed</span> 
							<span onClick={this.closeModal.bind(this)}>
								<i aria-hidden="true"></i>
							</span>
						</div>
					</Modal>
				</main>

			</div>
		)
	}
}