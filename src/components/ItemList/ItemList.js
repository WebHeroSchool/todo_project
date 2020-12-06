import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css'
import PropTypes from 'prop-types';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<ul className={styles.list}>
{items.map(item => (<li key={item.id}>
	<Item value={item.value}
	 isDone={item.isDone}
	 id={item.id}
	 onClickDone={onClickDone}
	 onClickDelete={onClickDelete}
	 />
	 </li>))}
	</ul>);

ItemList.defaultProps = {
	value: 'Нет тем для изучения',
	isDone: false
};

ItemList.propTypes ={
	onClickDelete: PropTypes.func.isRequired,
	onClickDone: PropTypes.func.isRequired
}

export default ItemList;