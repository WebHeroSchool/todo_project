import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';

const todoItem = 'Изучить props-ы';
const App = () => (
	<div>
	<h1> План обучения на неделю </h1>
	<InputItem />
	<ItemList todoItem={todoItem} />
	<Footer count={3} />
	</div>);

	export default App;