import React from 'react'

import './inputNumber.scss'


export default class InputNumber extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			value: this.formatValue(this.props.value)
		}
		//
		this.KEY_E = 69
		this.KEY_UP = 38
		this.KEY_DOWN = 40
		this.step = this.props.step || 1
		this.min = this.props.min || 0
		this.max = this.props.max || 1000
		//
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.handleOnChange = this.handleOnChange.bind(this)
		this.handleOnBlur = this.handleOnBlur.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			value: this.formatValue(nextProps.value)
		})
	}
	handleOnChange(e) {
		console.log('chang')
		let value = this.formatValue(e.target.value)
		this.setState({
			value
		})
		// console.log(value)
		this.props.onChange(value)
	}

	handleKeyDown(e) {
		switch (e.keyCode) {
			case this.KEY_E:
				e.preventDefault()
				break
			case this.KEY_UP:
				e.preventDefault()
				this.up()
				break
			case this.KEY_DOWN:
				e.preventDefault()
				this.down()
				break
		}
	}

	handleOnBlur() {
		let value
		let currentValue = this.state.value
		if (currentValue !== '') {
			value = this.state.value
		} else {
			value = this.min
		}
		//
		if (currentValue < this.min) {
			value = this.min
		}
		if (currentValue > this.max) {
			value = this.max
		}
		this.change(value)
	}

	change(value) {
		this.props.onChange(value)
	}

	up() {
		let value = this.formatValue(this.state.value + this.step)
		this.setState({
			value
		})
		this.change(value)
	}

	down() {
		let value = this.formatValue(this.state.value - this.step)
		this.setState({
			value
		})
		this.change(value)
	}

	formatValue(val) {
		return this.parseNumber(val, this.min, this.max)
	}

	parseNumber(value, min, max) {
		if (value === '') {
			return ''
		}

		if (value) {
			value = parseInt(value, 10)
			if (isNaN(value)) {
				return ''
			}
		}

		if (typeof max === 'number' && value > max) return max
		if (typeof min === 'number' && value < min) return min

		return value
	}

	handleOnClick(e){
		e.target.select()
	}
	render() {

		return (
			<input
				type="number"
				value={this.state.value}
				onKeyDown={this.handleKeyDown}
				onBlur={this.handleOnBlur}
				onChange={this.handleOnChange}
				onClick={this.handleOnClick.bind(this)}
			/>

		)
	}
}


