import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import './App.css';

const todoItem = 'Изучить props-ы';
const App = () => {
	const items = [
	{
		value: 'Изучить props-ы'
	},
	{
		value: 'Изучить React Developer Tools'
	},
	{
		value: 'Изучить вывод элементов списка и ключи'
	},
		];
		return ( 
	<div className="wrap">
	<h1 class="wrap__title"> План обучения на неделю </h1>
	<InputItem />
	<ItemList items={items} />
	<Footer count={3} />
	</div>);
}

	export default App;