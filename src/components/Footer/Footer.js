import React from 'react';
import style from './Footer.module.css';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';

const Footer = ({ items, renderIsDone, sorting, onClickSort }) => (
	<div className={style.footer}>
	<Button variant="outlined" color="primary"
	className={classnames({
		[style.button]:true,
		[style.buttonAct]:sorting ==='Завершенные',
	})}
	onClick={() => onClickSort('Завершенные')}
	>
	<span className={style.did}>Завершенные - {renderIsDone(true)}</span>
	</Button>
	<Button variant="outlined" color="primary"
	className={classnames({
		[style.button]:true,
		[style.buttonAct]:sorting ==='Незавершенные',
	})}
	onClick={() => onClickSort('Завершенные')}
	>
	<span className={style.notDid}>Незавершенные - {renderIsDone(false)}</span>
	</Button>
	</div>

);



export default Footer;