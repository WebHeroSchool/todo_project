import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import style from './App.module.css';
import 'fontsource-roboto';


const todoItem = 'Компоненты-классы';
const App = () => {
	const items = [
	{
		value: 'Компоненты-классы',
		isDone: true
	},
	{
		value: 'State',
		isDone: false
	},
	{
		value: 'Обработка событий',
		isDone: false
	},
		];
		return ( 
	<div className={style.wrap}>
	<h1 className={style.title}> План обучения на неделю </h1>
	<InputItem />
	<ItemList items={items} />
	<Footer count={3} />
	</div>);
}

	export default App;