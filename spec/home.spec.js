import Home from 'Home'
import React from 'react'
import {expect} from 'chai'
import { shallow } from 'enzyme'

describe('home', () => {
	it('should be working', () => {
		const wrapper = shallow(<Home />)
		expect(wrapper.length).to.equal(1)
	})
})
