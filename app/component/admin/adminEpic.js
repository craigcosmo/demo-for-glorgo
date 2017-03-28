import request from 'request'
import config from 'config'
import i from 'actionConstant'
import Rx from 'rxjs/Rx'
import 'rxjs'
import axios from 'axios'
import {savedBook, savingBook} from 'adminAction'
import storeBooks from 'storeBooks'

// const req = (action) => { axios.post(config.postBookApi, {data: action.payload}) }
// const req = (action) => axios.post('https://jsonplaceholder.typicode.com/posts', {data: action.payload}) 
const req = (action) => request().post(config.postBookApi, {data: action.payload})

let data

export default action$ =>
action$.ofType(i.SAVEBOOK)
	.mergeMap( 
		action => {
			data = action.payload
			savingBook(data)
			return Rx.Observable.fromPromise(req(action))
			// .catch(error => Rx.Observable.of(`Error: ${error}`))
			.delay(1000)
			.map(response => {
				// add data to localstorage book collection
				storeBooks(data)
				return savedBook(response.data)
			})
		}
		
	)

const getOriginalData = (action) =>{

}

// export default action$ =>
// action$.ofType(i.SAVEBOOK)
// 	.map( () => savingBook )
// 	.flatMap( (action) =>  {
// 		console.log('aciton', action$.payload)
// 		data = action.payload
// 		console.log('data', data)
// 		return Rx.Observable.fromPromise(req(action)) 
// 	})
// 	.map( (response) => {
// 		storeBooks(data)
// 		return response.data
// 	})
// 	.map( (data) => savedBook(data) )


