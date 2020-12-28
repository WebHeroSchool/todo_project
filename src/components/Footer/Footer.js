import React from 'react';
import style from './Footer.module.css';

const Footer = ({ count }) => (
	<p className={ style.text } > Незавершенные задачи: { count } 

	</p>);



export default Footer;