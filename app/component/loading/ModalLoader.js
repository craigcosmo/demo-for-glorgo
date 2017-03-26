import React from 'react'
import loader from 'loader.scss'
import Modal from 'react-modal'
import './modalLoader.scss'

const Loader = (props) => {
	return (
		<Modal
			overlayClassName="modal-loader-overlay"
			className="modal-loader loader"
			isOpen={props.loaderModal}
			contentLabel="modal">
			<span className="loading-text">Loading</span>
			<div className="la-ball-pulse la-sm wrapper" >
				<div></div>
				<div></div>
				<div></div>
			</div>
		</Modal>
	)
}

export default Loader