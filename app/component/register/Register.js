import React from 'react'
import RegisterForm from 'RegisterForm'
import Header from 'Header'
import Modal from 'react-modal'
import Footer from 'Footer'
import Loader from 'Loader'
import './register.scss'
import So from 'So'

export default class Register extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			registerModal: false,
			loader:false
		}
	}
	
	onData(data){
		this.setState({loader:true})
		this.props.submitRegistration(data)
		.then( ()=> {
			this.setState({registerModal:true})
			this.setState({loader:false})
		})
	}
	closeModal(){
		this.setState({registerModal:false})
	}
	render() {
		return (
			<div className="pin-footer" styleName="register">
				<Header {...this.props} />
				<So />
				<main>
					<h1 className="cap center">register account</h1>
					<RegisterForm onData = {this.onData.bind(this)} />
					{this.state.loader && <div><br /><br /><Loader /></div>}
					<Modal
						overlayClassName="register-modal-overlay"
						className="register-modal"
						isOpen={this.state.registerModal} 
						onRequestClose={this.closeModal.bind(this)}
						contentLabel="modal">
						<div>
							<span className="content">register completed</span> 
							<span className="close-btn" onClick={this.closeModal.bind(this)}>
								<i className="fa fa-times" aria-hidden="true"></i>
							</span>
						</div>
					</Modal>
				</main>
				<Footer />
			</div>
		)
	}
}