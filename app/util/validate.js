function validEmail(email) {
	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(email)
}

export default (data) =>{
	let valid = true

	function preCall(i, reason){
		if (i.hasOwnProperty('callback') && typeof i.callback == 'function') {
			setTimeout(() =>{ i.callback(reason) },0)
		}
	}
	function condition(i) {
		if (!i.value) {
			valid = false
			preCall(i, 'length')
		}
		else if(i.hasOwnProperty('check') && i.check.hasOwnProperty('email') && !validEmail(i.value)){
			valid = false
			preCall(i, 'valid')
		}
		else if (i.hasOwnProperty('check') && i.check.hasOwnProperty('min') && i.value.length < i.check.min ) {
			valid = false
			preCall(i, 'min')
		}
		else if (i.hasOwnProperty('check') && i.check.hasOwnProperty('max') && i.value.length > i.check.max ) {
			valid = false
			preCall(i, 'max')
		}
		else if (i.hasOwnProperty('check') && i.check.hasOwnProperty('match') && i.value !== i.check.match ) {
			valid = false
			preCall(i, 'match')
		}
		else{
			preCall(i, '')
		}
	}
	if (data.constructor === Array ) {
		data.forEach( i => { condition(i) })
	}
	else if (data.constructor === {}.constructor) {
		condition(data)
	}
	
	return valid
}

// [
// 	{ value: 'ohla', check:{email:true}, callback: showError.bind(this, reason)}
// ]

