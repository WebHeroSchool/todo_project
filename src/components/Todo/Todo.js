import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import style from './Todo.module.css';
import 'fontsource-roboto';

const Todo = () => {
	const initialState = {
		items: [
		{
		value: 'Задача 1',
		isDone: true,
		id: 1
	},
	{
		value: 'Задача 2',
		isDone: false,
		id: 2
	},
	{
		value: 'Задача 3',
		isDone: false,
		id: 3
	},
	{
		value: 'Задача 4',
		isDone: false,
		id: 4
	}
		],
		count: 4,
		hasError: false
	};

	const [items, setItems] = useState (initialState.items);
   const [count, setCount] = useState (initialState.count);
   const [hasError, setHasError] = useState (initialState.hasError);

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
	const onClickDelete = id => 	{
		const newDelItemList = items.filter(item => item.id !== id);
		setItems(newDelItemList);
		setCount((count) => count - 1);
	};
const onClickAdd = value => {
	if (value !== '') {
		setItems ([
		...items,
			{
				value,
				isDone: false,
				id: count + 1
			}]
		);
		setCount((count) => count + 1);
} 
else {
	setHasError (true);
}
};
const renderIsDone = () => {
	const newItems = items.filter(item => item.isDone === true);
	return newItems.length;
}

		return ( 
	<div className={style.wrap}>
	<h2 className={style.title}> Список задач - {items.length}</h2>
	<span className={style.did}>Завершенные - {renderIsDone()}</span>
	<span className={style.notDid}>Незавершенные - {count}</span>
	<InputItem onClickAdd={onClickAdd} hasError={hasError} />
	<ItemList items={items} onClickDone={onClickDone} onClickDelete={onClickDelete} />
	<Footer count={count} />
	</div>);
};

	export default Todo;