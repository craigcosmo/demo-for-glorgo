import store from 'store'

export default function(){
	let info = false
	if (store.get('user') ) {
		info = store.get('user')
	}
	return info
} 