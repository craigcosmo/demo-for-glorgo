import React from 'react'

const TopicHeader = props => {
	return(
		<h1 className="capitalize">{props.topic.title}</h1>
	)
}
export default TopicHeader