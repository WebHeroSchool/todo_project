import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import style from './Todo.module.css';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';

const Todo = () => {
	const initialState = {
		items: [],
		count: 1,
		isDone: false,
		hasError: false,
		sortTask: 'Список задач',
	};

	const [items, setItems] = useState (initialState.items);
   const [count, setCount] = useState (initialState.count);
   const [hasError, setHasError] = useState (initialState.hasError);
   const [sortTask, setSort] = useState (initialState.sortTask);

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

const renderIsDone = (status) => {
	const newItems = items.filter(item => item.isDone === status);
	return newItems.length;
}

const onClickSort = (sorting) => setSort(sorting);
let sortingTask;
switch (sortTask) {
	case 'Завершенные':
	sortingTask = items.filter((item) => item.isDone);
	break;
	case 'Незавершенные':
	sortingTask = items.filter((item) => !item.isDone);
	break;
	case 'Список задач':
	sortingTask = items;
	break;
	default:
	sortingTask = items;
}

		return (
	<div className={style.wrap}>
	<div className={style.todo}>
	<Button variant="outlined" color="primary"
	className={classnames({
		[style.button]:true,
		[style.buttonAct]:sortingTask ==='Список задач',
	})}
	onClick={() => onClickSort('Список задач')}
	>
	<span className={style.title}> Список задач - {items.length}</span>
	</Button>
	</div>
	<InputItem items={items} onClickAdd={onClickAdd} hasError={hasError} />
	<ItemList items={items} onClickDone={onClickDone} onClickDelete={onClickDelete}
	sort={sortingTask} sortValue={sortTask} />
	<Footer renderIsDone={renderIsDone} onClickSort={onClickSort} sorting={sortTask}/>
	</div>);
};

	export default Todo;