import React from 'react';
import style from './Footer.module.css';


const Footer = ({ count }) => (
	<p className={ style.text }> Осталось тем для изучения: { count } 

	</p>);

export default Footer;