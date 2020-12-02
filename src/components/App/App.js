import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import style from './App.module.css';
import 'fontsource-roboto';

class App extends React.Component {
	state = {
		items: [
	{
		value: 'Компоненты-классы',
		isDone: true,
		id: 1
	},
	{
		value: 'State',
		isDone: false,
		id: 2
	},
	{
		value: 'Обработка событий',
		isDone: false,
		id: 3
	}
		],
		count: 6
	};
	onClickDone = id => {
		const newItemList = this.state.items.map(item => {
			const newItem = {...item};
			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}
			return newItem;
		});
		this.setState({ items: newItemList});
	};
	onClickDelete = id => {
		const newDelItemList = this.state.items.filter(item => item.id !== id);
		this.setState({ items: newDelItemList});
	};
render () {
		return ( 
	<div className={style.wrap}>
	<h1 className={style.title}> План обучения на неделю </h1>
	<InputItem />
	<ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete} />
	<Footer count={this.state.count} />
	</div>);
	}
};

	export default App;