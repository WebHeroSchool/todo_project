import React from 'react';
import styles from './Logo.module.css';

const Logo = () => (
	<div className={styles.logo}>
	<div className={styles.develop}>Разработано в</div>
	<div className={styles.hero}>WebHero</div>
	<div className={styles.school}>School</div>
	</div>
)

export default Logo;