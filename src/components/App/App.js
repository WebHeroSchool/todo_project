import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import style from './App.module.css';
import 'fontsource-roboto';
import PropTypes from 'prop-types';

const App = () => {
	const initialState = {
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
		count: 3,
		hasError: false
	};
	const [items, setItems] = useState (initialState.items);
  const [count, setCount] = useState (initialState.count);

  useEffect(() => {
    console.log("update");
  });

  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    console.log("count change");
  }, [count]);

	const onClickDone = id => {
		const newItemList = items.map(item => {
			const newItem = {...item};
			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}
			return newItem;
		});
		setItems(newItemList);
	};
	const onClickDelete = id => {
		const newDelItemList = items.filter(item => item.id !== id);
		setItems(newDelItemList);
    setCount((count) => count - 1);
	};
const onClickAdd = value => {
	if (value !== '')
		setItems ({
			items: [
			...items,
			{
				value,
				isDone: false,
				id: count + 1
			}
			],
			count: count + 1,
			hasError: false
		});
 }
 else {
 	setItems 
        ({
          hasError: true
        });
        setCount( (count) => count -1);
 };



		return ( 
	<div className={style.wrap}>
	<h1 className={style.title}> План обучения на неделю </h1>
	<InputItem onClickAdd={onClickAdd} hasError={hasError} />
	<ItemList items={items} onClickDone={onClickDone} onClickDelete={onClickDelete} />
	<Footer count={count} />
	</div>);
}

App.propTypes = {
	value: PropTypes.string.isRequired,
	isDone: PropTypes.bool.isRequired
};

	export default App;
