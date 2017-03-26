import React from 'react'

import '../style/page.scss'

export default class Page extends React.Component {
	render() {
		return (
			<div className="page">
				{React.cloneElement(this.props.children, {...this.props})}
			</div>
		)
	}
}

