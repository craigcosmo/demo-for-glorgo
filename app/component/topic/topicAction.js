import React from 'react'
import i from 'actionConstant'
import config from 'config'
import request from 'request'
import V from 'valid-url'
import youtubeUrl from 'youtube-url'
import R from 'ramda'
import user from 'user'
import moment from 'moment'
import {objectToArray} from 'objectHelper'



function makeYoutubeVideo(message){
	let id = youtubeUrl.extractId(message)
	return <iframe width="300" height="169" src={'https://www.youtube.com/embed/'+id} style={{border:0}} />
}
function makeArticle(message){
	return(
		<article>
			<div className="title"><a href={message.url} target="_blank">{message.title}</a></div>
			<div className="image"><a href={message.url}><img src={message.image} /></a></div>
			<div className="description">{message.description}</div>
		</article>
	)
}

/**
 * modify value of message items in array, turn a youtube link to iframe jsx
 * @param  {array}
 * @return {array}
 */
function getYoutubeVideo(array){
	let modifiedArray = array
	modifiedArray.map( item => {
		// console.log('iii',item.message)
		if (youtubeUrl.valid(item.message) ) {
			// console.log('iii',item.message)
			item.message = makeYoutubeVideo(item.message)
		}
	})
	return modifiedArray
}

function turnReplyObjectToArray(data){
	// check id data is array
	if(data.constructor === Array){
		data.map( (item) => {
			if (item.hasOwnProperty('reply')) {
				let replies = item.reply
				let array = []
				for ( let i in replies){
					replies[i].toMessageId = i
					array.push(replies[i])
				}
				return item.reply = array
			}
		})
		return data
	}else{
		return data
	}
}
function postObjectToArray(data){
	let newData = []
	for (let i in data){
		data[i].postId = i
		newData.push(data[i])
	}
	newData = turnReplyObjectToArray(newData)
	return newData
}

function sortAscending(payload){
	let sortByCreated = R.sortBy( R.prop('created'))
	payload = sortByCreated(payload)
	// console.log(payload)
	// return payload.reverse()
	return payload
}




/**
 * if message values are link, get ogp data then save back into array
 * @param  {array}
 * @param  {Function}
 * @return {callback wtih param is new modified array}
 */
function getOGP(array, callback){
	let quests = array
	.filter( item => V.isWebUri(item.message) )
	.map( (item) => {
		return request().get(config.ogpAPI+item.message).then( result =>{
			// console.log('mama',result.data)
			item.message = makeArticle(result.data)
			return result
		})
	})

	Promise.all(quests).then( () => {
		callback(array)
	}).catch( () =>{
		console.log('not getting any')
	})
}

export function submitPost(data){
	// console.log('posting', data)
	data.userId= user().userId,
	data.name= user().name
	data.email= user().email
	data.created= moment().unix()
	data.modified= moment().unix()

	return dispatch => {
		
	}
}

export function submitVote(data){
	// console.log('voting', data)
	data.userId= user().userId,
	data.name= user().name
	data.email= user().email
	data.created= moment().unix()
	data.modified= moment().unix()

	return (dispatch) => {
	
	}
}

export function submitReply(data){
	data.userId= user().userId,
	data.name= user().name
	data.email= user().email
	data.created= moment().unix()
	data.modified= moment().unix()
	// console.log('postingID',data.postId)
	console.log('data',data)
	return dispatch => {
		
	}
}


