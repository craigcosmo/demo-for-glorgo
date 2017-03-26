import React from 'react'
import {secondsToDate, different} from 'dateHelper'
import validate from 'validate'
import {Component} from 'react'
import {HotKeys} from 'react-hotkeys'
import V from 'valid-url'
import config from 'config'
import request from 'request'
import Textarea from 'react-textarea-autosize'
import './message.scss'

export default class Message extends Component{
	constructor(){
		super()
		this.state= {
			message:'',
			form:false
		}
		this.submitting =false
	}
	componentDidMount(){
		// console.log(typeof this.props.item.message)
	}
	hideForm(e){
		e.preventDefault()
		this.setState({form:false})
	}
	showForm(){
		this.setState({form:true})
	}
	onTextChange(e){
		this.setState({message: e.target.value})
	}
	handleSubmit(e){
		e.preventDefault()
		let input = [{value:this.state.message}]
		if (validate(input) && this.submitting === false) {
			this.submitting = true
			let data = {
				message: this.state.message.trim(),
				postId: this.props.item.postId,
				topicId: this.props.item.topicId,
			}
			this.props.submitReply(data).then(() => {
				this.submitting = false
				this.setState({
					message:'',
					form: false
				})
			})
		}
	}
	render(){ 
		// console.log('rendering')
		const keyMap = {
			'submitForm': 'command+enter'
		}
		const handlers = {
			'submitForm': this.handleSubmit.bind(this)
		}
		// console.log('adadadadadd',this.props.item.message)
		return(
			<div className="reply-message-item flex">
				<div className="rep-left">
					<span className="user-photo"></span>
				</div>
				<div className="flex1">
					<span className="user-name cap ib">{this.props.item.name}</span>
					<div className="reply-message">{ this.props.item.message}</div>
					<div className="like-wrapper">
						<span className="created-date">{different(this.props.item.created)} ago</span>
						<span className="hy">-</span>
						<span className="like-btn cap">like</span>
						<span className="hy">-</span>
						<span className="reply-btn cap" onClick={this.showForm.bind(this)}>reply</span>
					</div>
					{this.state.form && 
						<HotKeys keyMap={keyMap} handlers={handlers} style={{outline:'none'}}>
							<form onSubmit={this.handleSubmit.bind(this)} className="flex">
								<div className="flex1 input-wrapper">
									<input type="text"
										autoFocus
										value={this.state.message} 
										onChange={this.onTextChange.bind(this)} />
								</div>
								<div className="rightcol">
									<button className="cancel-reply-btn " onClick={this.hideForm.bind(this)}>cancel</button>
									<button className="reply-btn " type="submit">reply</button>
								</div>
							</form>
						</HotKeys>
					}
				</div>
			</div>
		)
	}
}

Message.propTypes ={
	submitReply: React.PropTypes.func.isRequired,
	item: React.PropTypes.object.isRequired,
}