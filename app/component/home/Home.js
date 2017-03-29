import React from 'react'
import Header from 'header/Header'
import config from 'config'
import './home.scss'
import books from 'books.json'
import {Link} from 'react-router'
import store from 'store'
import BuyButton from 'BuyButton'
import AddedButton from 'AddedButton'
import Item from 'Item'

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
	onBuy(a){
		// console.log(a)

	}
	renderBook(){
		console.log('sds')
		return this.collection.map( (i, index) => {
			return (
				<Item key={index} i={i} />
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
