import store from 'store'

function getRandom(length) {
	return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1))
}

export default function(data){
	if (store.get('books')) {
		let book = store.get('books')
		data.id = getRandom(4)
		book.push(data)
		store.set('books', book)
	}
}