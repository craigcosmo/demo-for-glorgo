import Home from 'Home'
import React from 'react'

import { shallow } from 'enzyme'

describe('home', () => {
	it('should be working', () => {
		const wrapper = shallow(<Home />)
		// console.log(wrapper)
	})
})
