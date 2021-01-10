import React from 'react';
import style from './Footer.module.css';
import Button from '@material-ui/core/Button';

const Footer = ({ items, renderIsDone }) => (
	<div className={style.footer}>
	<Button variant="outlined" color="primary">
	<span className={style.did}>Завершенные - {renderIsDone(true)}</span>
	</Button>
	<Button variant="outlined" color="primary">
	<span className={style.notDid}>Незавершенные - {renderIsDone(false)}</span>
	</Button>
	</div>

);



export default Footer;