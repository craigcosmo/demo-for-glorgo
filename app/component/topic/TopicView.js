import React from 'react'
import Header from 'Header'
import './topic.scss'
import Modal from 'react-modal'
import Entry from 'Entry'
import TopicHeader from 'TopicHeader'
import Poll from 'Poll'
import PollResult from 'PollResult'
import Loader from 'Loader'
import Posting from 'Posting'



export default class TopicView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			message : '',
			modal : false,
			loader:false
		}
		this.topicId = this.props.router.params.topicId
		this.submitting = false
	}
	componentDidMount(){
		this.setState({loader:true})
		this.props.storeCurrentTopic(this.topicId)
		this.props.getPost(this.topicId)
		.then( () => {
			this.setState({loader:false})
		})
		.catch( () => {
			this.setState({loader:false})
		})
	}
	openModal(){
		this.setState({modal:true})
	}
	closeModal(){
		this.setState({modal:false})
	}
	renderPost(){
		return this.props.topic.postCollection.map( (item, index) => (
			<div className="post-item" key={index}>
				<Entry 
					item={item}
					submitReply = {this.props.submitReply} />
			</div>
			)
		)
	}
	renderHeading(){
		// console.log('rendering')
		let type = this.props.topic.currentTopic.type
		if (type === 'poll' && this.props.topic.currentTopic.votedByThisUser === false) {
			return (
				<Poll 
					topic = {this.props.topic.currentTopic}
					storeCurrentTopic = {this.props.storeCurrentTopic}
					submitVote= {this.props.submitVote} 
					router ={this.props.router} />
			)
		}
		if (type === 'poll' && this.props.topic.currentTopic.votedByThisUser === true) {
			return <PollResult 
				topic = {this.props.topic.currentTopic} 
				router ={this.props.router} />
		}

		if (type === 'discussion') {
			return <TopicHeader topic = {this.props.topic.currentTopic} />
		}


	}
	render() {

		return (
			<div className="topic">
				<Header {...this.props} />
				<main>
					<div className="row">
						<div className="col-xs-8 left-side">
							{this.renderHeading()}
							{this.state.loader && <Loader />}
							<div className="post-collection">
								{this.renderPost()}
							</div>
							<div className="posting-section">
								<div className="row">
									<div className="col-xs-2 center">
										<div className="user-icon-wrapper"><i className="fa fa-user"></i></div>
									</div>
									<div className="col-xs-10">
										<Posting router= {this.props.router} submitPost={this.props.submitPost} />
									</div>
								</div>
							</div>
						</div>
						<div className="col-xs-4 right">
							
						</div>
					</div>
				</main>
				<Modal
					overlayClassName="post-message-modal-overlay"
					className="post-message-modal"
					isOpen={this.state.modal} 
					onRequestClose={this.closeModal.bind(this)}
					contentLabel="modal">
					<span className="post-message">your message has been posted</span>
				</Modal>
			</div>
		)
	}
}

