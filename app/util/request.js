import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import config from 'config'


export default function(){
	let ax = axios.create()
	let mock = new MockAdapter(ax)

	// fetch all topics
	mock.onPost(config.postBookApi).reply(function(){
		return [200, 'success']
	})

	mock.onPost(config.submitOrderApi).reply(function(config){
		return [200, config.data]
	})

	return ax	
}
