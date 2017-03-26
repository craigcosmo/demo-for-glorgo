import React from 'react'
import './postForm.scss'
import Textarea from 'react-textarea-autosize'

const PostForm = (props) => (
	<form className="post-form" onSubmit={props.handleSubmit.bind(this)}>
		<Textarea placeholder="say something..." value={props.textValue} onChange={props.textOnchange.bind(this)}></Textarea>
		<button type="submit" className="post-btn ui-post-btn">post</button>
	</form>
)

export default PostForm