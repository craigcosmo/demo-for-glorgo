import React from 'react'
import moment from 'moment'
import InputNumber from 'InputNumber'
import './time.scss'
export default class Time extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hour: props.time.split(':')[0], 
			minute: props.time.split(':')[1],
			period: props.time.split(':')[2]
		}
	}
	save(){
		setTimeout( () => {
			this.props.storeTime(this.state.hour + ':' + this.state.minute +':' + this.state.period)
		},0)
	}
	onHourChange(data){
		this.setState({hour: data})
		this.save()
	}
	onMinuteChange(data){
		this.setState({minute: data})
		this.save()
	}
	onSelectChange(e){
		this.setState({period: e.target.value})
		this.save()
	}
	render() {
		return (
			<div className="time">
				<div className="input-wrapper">
					<InputNumber
						onChange={this.onHourChange.bind(this)}
						value={this.state.hour} 
						min={0} 
						max={12} />
					<span>:</span>
					<InputNumber
						onChange={this.onMinuteChange.bind(this)}
						value={this.state.minute} 
						min={0} 
						max={59} />
				</div>
				<select value={this.state.period} onChange={this.onSelectChange.bind(this)}>
					<option value="AM">AM</option>
					<option value="PM">PM</option>
				</select>
			</div>
		)
	}
}


