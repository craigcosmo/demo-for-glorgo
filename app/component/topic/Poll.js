import React from 'react'
import {Component} from 'react'
import './poll.scss'
import UserSection from 'UserSection'


export default class Poll extends Component{
	submit(value, label){
		const data = {
			value  : value,
			label  : label,
			topicId: this.props.item.topicId
		}
		this.props.submitVote(data)
		.then( () =>{this.props.storeCurrentTopic(data.topicId)})

	}
	render(){ 
		return(
			<div className="poll-header">
				<div className="poll-selection-wrapper">
					<h6 className="cap mb10">choices:</h6>
					<div className="poll-selection">
						{
							this.props.item.option.map( (item, index) => {
								return <div 
									key={index} 
									className="poll-selection-item cap" 
									onClick={this.submit.bind(this, index, item)}>
									{item}
									<i className="fa fa-check check-mark" aria-hidden="true"></i>
								</div>
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

Poll.propTypes ={
	item: React.PropTypes.object.isRequired,
	submitVote: React.PropTypes.func.isRequired,
	storeCurrentTopic: React.PropTypes.func.isRequired,
}