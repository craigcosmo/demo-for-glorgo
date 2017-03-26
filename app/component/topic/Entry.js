import React from 'react'
import './entry.scss'
import Message from 'Message'


export default class Entry extends React.Component {
	
	render() {
		// console.log('bababa', this.props.item)
		return (
			<div className="entry">
				<Message 
					item={this.props.item} 
					submitReply={this.props.submitReply} />
				{this.props.item.reply && 
					<div className="reply-message-wrapper">
						{this.props.item.reply.map( (i, index) => {
							return <Message 
								item={i} 
								key={index} 
								submitReply={this.props.submitReply} />
						})}
					</div>
				}
			</div>
		)
	}
}

