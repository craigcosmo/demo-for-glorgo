import Home from 'Home'
import React from 'react'
import {expect} from 'chai'
import { shallow } from 'enzyme'
import ReactShallowRenderer from 'react-test-renderer/shallow'



describe('home', () => {
	it('should be working', () => {
		const renderer = new ReactShallowRenderer()
		renderer.render(<Home />)
		const result = renderer.getRenderOutput()
		console.log('aaa',result.type)
		expect(result.type).to.equal('div')
	})
})
