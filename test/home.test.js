import {expect, assert} from 'chai'
import validate from '../app/util/validate'
import request from '../app/util/request'
import config from '../app/config'

function callback(){
	console.log('!')
}

describe('validate function', function () {
	it('should tell if email invalid', () => {
		const fakeVal = 'amoc@@.com'
		const valid = validate({value:fakeVal, check:{email:true}, callback:callback})
		expect(valid).to.equal(false)

	})
	it('should tell if credit card is invalid', () => {
		const fakeVal = '12323 23 23aa'
		const valid = validate({value:fakeVal, check:{creditCard:true}, callback:callback})
		expect(valid).to.equal(false)
	})
})
