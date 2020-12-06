import React from 'react';
import style from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({ count }) => (
	<p className={ style.text } > Осталось тем для изучения: { count } 

	</p>);
Footer.propTypes = {
	count: PropTypes.number.isRequired
};


export default Footer;