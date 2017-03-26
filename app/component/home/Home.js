import React from 'react'
import Header from 'header/Header'
import config from 'config'
import './home.scss'

export default class Home extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount(){
		this.props.ping('some val')
	}
	render() {
		return (
			<div styleName="home">
				<div></div>
				<div styleName="gong"></div>
				<div styleName="string"></div>
				<div styleName="bong"></div>
				<Header {...this.props} />
				<div styleName="j"></div>
				<div styleName="d"></div>
			</div>
		)
	}
}
