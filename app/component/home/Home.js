import React from 'react'
import Header from 'header/Header'
import config from 'config'
import './home.scss'
import books from 'books.json'
import {Link} from 'react-router'
import store from 'store'

export default class Home extends React.Component {
	constructor(props) {
		super(props)
		
		if (store.get('books')) {
			this.collection = store.get('books')
		}else{
			store.set('books', books )
			this.collection = store.get('books')
		}
	}
	componentDidMount(){
		this.props.ping('some val')
	}
	onBuy(id){
		console.log(id)
	}
	renderBook(){
		console.log('sds')
		return this.collection.map( (i, index) => {
			return (
				<div key={index} styleName="item">
					<div styleName="inner">
						<div styleName="text-section">
							<span styleName="title">{i.title}</span>
							<span styleName="author">{i.author}</span>
						</div>
						<div styleName="btn-section">
							<button styleName="buy-btn" onClick={this.onBuy.bind(this, i.id)}>buy</button>
						</div>
					</div>
				</div>
			)
		})
	}
	render() {
		return (
			<div styleName="home">
				<Header {...this.props} />
				<div styleName="item-wrapper">
					{this.renderBook()}
				</div>
			</div>
		)
	}
}
