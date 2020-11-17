import React from 'react';
const ItemList = () => (<ul>
	<li> React-компонент </li>
	<li> Структура проекта </li>
	<li> Props </li>
	<li> React Developer Tools </li>
	<li> Вывод списка элементов и ключи </li>
	</ul>);
const App = () => (<div>
<h1> Изучаем React </h1>
<p> План работы на неделю </p>
<ItemList />
</div>);

export default App;