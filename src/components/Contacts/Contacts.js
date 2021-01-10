import React from 'react';
import styles from './Contacts.module.css';
import 'fontsource-roboto';
import CardContent from '@material-ui/core/CardContent';
import { Octokit } from "@octokit/rest";
import Prelouder from '../Prelouder/Prelouder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';

const octokit = new Octokit();

class Contacts extends React.Component {
	state = {
		isLoading: true,
		username: 'VladimirovaEV',
		fetchFailure: false,
		avatarUrl: [],
		err: {},
		email: 'VladimirovaEV79@yandex.ru',
		location: [],
		facebook:'https://web.facebook.com/ekaterina.vladimirova.735/'
	}
	componentDidMount() {
					octokit.users.getByUsername({
			username: this.state.username,
		}).then(response => {
			this.setState({
				avatarUrl: response.data.avatar_url,
				location: response.data.location
			});
		})

			.catch(err => {
				this.setState({
					isLoading: false,
					isError: true,
				});
			});
	}

render () {
		const { isLoading, username, fetchFailure, err, email, location, avatarUrl, facebook } = this.state;
	return (
				<CardContent>
				<h1 className={styles.title}>Мои контакты</h1>
				<div className={styles.locationIcon}>
			<LocationOnIcon color="primary" />
			</div>
				<div className={styles.location}> { location } </div>
				<div className={styles.mailIcon}>
      <MailOutlineIcon color="primary" />
            </div>
			<div>
			<a href="mailto:{ email }" className={styles.email} target="_blank" rel="noreferrer">{ email } </a>
			</div>
			<div className={styles.facebookIcon}>
						<FacebookIcon color="primary" />
			</div>
					<div>
					<a href={ facebook } className={styles.facebook} target="_blank" rel="noreferrer">{ facebook }</a>
					</div>
					<p className={styles.p}>
					<img className={styles.img} src={ avatarUrl } alt="Аватар" />
					</p>
		</CardContent>
		);
   }

}

export default Contacts; 