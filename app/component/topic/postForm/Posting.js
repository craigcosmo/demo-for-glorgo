import React from 'react'
import PostForm from 'PostForm'
import Modal from 'react-modal'
import './postMessageModal.scss'
import validate from 'validate'
import {HotKeys} from 'react-hotkeys'


export default class Posting extends React.Component {
	constructor(props) {
		super(props)
		this.handleSubmit= this.handleSubmit.bind(this)
		this.textOnchange= this.textOnchange.bind(this)

		this.state = {
			message : '',
			postMessageSuccess : false
		}
	
		this.submitting = false
	}
	showMessageError(){
		console.log('need some text')
	}
	handleSubmit(e){	
		e.preventDefault()
		let input = [
			{
				value   : this.state.message.trim(),
				callback: this.showMessageError.bind(this)
			}
		]
		if (validate(input)) {
			if (!this.submitting) {
				this.submitting = true
				const data = {
					message: this.state.message,
					topicId: this.props.item.topicId
				}
				console.log(data)
				this.props.submitPost(data)
				.then( () => {
					this.setState({message:''})
					this.submitting = false
				})
			}
		}
	}
	textOnchange(e){
		this.setState({message: e.target.value})
	}
	openPostSuccessModal(){
		this.setState({postMessageSuccess:true})
	}
	closePostSuccessModal(){
		this.setState({postMessageSuccess:false})
	}
	render() {
		const keyMap = {
			'submitForm': 'command+enter'
		}
		const handlers = {
			'submitForm': this.handleSubmit
		}

		return (
			<HotKeys keyMap={keyMap} handlers={handlers} className="posting">
				<PostForm 
					handleSubmit= {this.handleSubmit}
					textOnchange = {this.textOnchange}
					textValue= {this.state.message} />
				<Modal
					overlayClassName="post-message-modal-overlay"
					className="post-message-modal"
					isOpen={this.state.postMessageSuccess}
					onRequestClose={this.closePostSuccessModal.bind(this)}
					contentLabel="modal">
					<span className="post-message">your message has been posted</span>
				</Modal>
			</HotKeys>
		)
	}
}

Posting.propTypes ={
	item: React.PropTypes.object.isRequired,
	submitPost: React.PropTypes.func.isRequired,
}