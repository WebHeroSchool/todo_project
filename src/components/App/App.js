import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import style from './App.module.css';

const todoItem = 'Изучить props-ы';
const App = () => {
	const items = [
	{
		value: 'Изучить props-ы',
		isDone: true
	},
	{
		value: 'Изучить React Developer Tools',
		isDone: true
	},
	{
		value: 'Изучить вывод элементов списка и ключи',
		isDone: false
	},
		];
		return ( 
	<div className={style.wrap}>
	<h1 class={style.title}> План обучения на неделю </h1>
	<InputItem />
	<ItemList items={items} />
	<Footer count={3} />
	</div>);
}

	export default App;