function validEmail(email) {
	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(email)
}

// takes the form field value and returns true on valid number
function validCreditCard(value) {
  // accept only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(value)) return false

	let nCheck = 0, nDigit = 0, bEven = false
	value = value.replace(/\D/g, '')

	for (let n = value.length - 1; n >= 0; n--) {
		let cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10)

		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9
		}

		nCheck += nDigit
		bEven = !bEven
	}

	return (nCheck % 10) == 0
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
			preCall(i, 'required')
		}
		else if(i.hasOwnProperty('check') && i.check.hasOwnProperty('email') && i.check.email === true && !validEmail(i.value)){
			valid = false
			preCall(i, 'invalid')
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
			preCall(i, 'unmatch')
		}
		else if( i.hasOwnProperty('check') && i.check.hasOwnProperty('creditCard') && i.check.creditCard === true && !validCreditCard(i.value)){
			valid = false
			preCall(i, 'invalid')
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

