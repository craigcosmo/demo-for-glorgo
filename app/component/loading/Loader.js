import React from 'react'
import './loader.scss'


const Loader = () => {
	return (
		<div className="loader">
			<span className="loading-text">Loading</span>
			<div className="la-ball-pulse la-sm loading-animation" >
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Loader