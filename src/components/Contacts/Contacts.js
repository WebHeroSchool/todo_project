import React from 'react';
import styles from './Contacts.module.css';
import 'fontsource-roboto';
import CardContent from '@material-ui/core/CardContent';
import { Octokit } from "@octokit/rest";
import Prelouder from '../Prelouder/Prelouder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const octokit = new Octokit();

class Contacts extends React.Component {
	state = {
		isLoading: true,
		username: 'VladimirovaEV',
		fetchFailure: false,
		err: {},
		email: [],
		location: []
	}
	componentDidMount() {
					octokit.users.getByUsername({
			username: this.state.username,
		}).then(response => {
			this.setState({
				email: response.data.email,
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
		const { isLoading, username, fetchFailure, err, email, location } = this.state;
	return (
				<CardContent>
      <MailOutlineIcon color="primary" />
			<div className={styles.email}>{ isLoading ? <Prelouder /> : email }</div>
			<LocationOnIcon color="primary" />
						<div className={styles.location}> { location } </div>
		</CardContent>
		);
   }

}

export default Contacts; 