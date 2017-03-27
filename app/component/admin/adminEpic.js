import request from 'request'
import config from 'config'
import i from 'actionConstant'
// import { Observable } from 'rxjs/Observable'
// import { Rx } from 'rxjs'
// import { Rx } from 'rxjs/Rx'
import Rx from 'rxjs/Rx'
import 'rxjs'
import axios from 'axios'
import {submittedBook} from 'adminAction'

// const req = (action) => { axios.post(config.postBookApi, {data: action.payload}) }
// const req = (action) => axios.post('https://jsonplaceholder.typicode.com/posts', {data: action.payload}) 
const req = (action) => request().post(config.postBookApi, {data: action.payload})

export default action$ =>
action$.ofType(i.SAVEBOOK)
	.mergeMap( 
		action => 
		Rx.Observable.fromPromise(req(action))
		.catch(error => Rx.Observable.of(`Error: ${error}`))
		.map(response => submittedBook(response.data))

			// const promise = request().post(config.postBookApi, {data: action.payload})
			// console.log(Rx)

			// console.log(action)
			
			// axios.post('https://jsonplaceholder.typicode.com/posts', {data: action.payload})
			// .then(r => console.log(r))
			// .map(response => console.log(response))
	)
  // .map( () => ({type:i.SAVING}) )
	// .flatMap( (action) => {
	// 	request().post(config.postBookApi, {data: action.payload}) 
	// })
	// .map( (res) => { console.log(res.data); return res.data})
	// .mapTo({type:'song'})
	// .flatMap( action => {
	// 	console.log(action)
	// })






// export default action$ =>
// 	action$.ofType(i.SAVEBOOK)
// 	.mergeMap(action => request().post(config.postBookApi, {data: action.payload} ) )