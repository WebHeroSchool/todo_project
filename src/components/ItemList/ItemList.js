import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
	<li><Item todoItem={todoItem} /></li>
	<li><Item todoItem={'Изучить React Developer Tools'} /></li>
	<li><Item todoItem={'Изучить вывод элементов списка и ключи'} /></li>
	</ul>);

export default ItemList;
