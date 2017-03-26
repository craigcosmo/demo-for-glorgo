import React from 'react'
import Select from 'react-select'
import './nav.scss'

export default class Nav extends React.Component {
	constructor(){
		super()
	}
	logChange(val){
		console.log(val)
	}
	render(){
		let options = [
			{ value: 'en', label: 'english' },
			{ value: 'sv', label: 'swedish' }
		]
		return (
			<nav styleName="nav">
				<div className="hide">
					<Select
						name="language"
						value="one"
						options={options}
						onChange={this.logChange.bind(this)}
						searchable={false}
						openOnFocus={false}
						placeholder="select language"
					/>
				</div>
				
				<div>

				</div>
			</nav>
		)
	}
}