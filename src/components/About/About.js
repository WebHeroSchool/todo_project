import React from 'react';
import styles from './About.module.css';
import CardContent from '@material-ui/core/CardContent';
import { Octokit } from "@octokit/rest";
import Prelouder from '../Prelouder/Prelouder';
 

const octokit = new Octokit();
class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		username: 'VladimirovaEV',
		fetchFailure: false,
		err: {},
		userInfo: [],
		avatarUrl: []
	}
	componentDidMount() {
		octokit.repos.listForUser ({
			username: this.state.username
		}).then (({ data }) => {
			this.setState({
				repoList: data,
				isLoading: false
			});
			}).catch(error => {
      this.setState({
        fetchFailure: true,
        err: error
		});
   });
			octokit.users.getByUsername({
			username: this.state.username,
		}).then(response => {
			this.setState({
				avatarUrl: response.data.avatar_url,
				name: response.data.name
			});
		})

			.catch(err => {
				this.setState({
					isLoading: false,
					isError: true,
				});
			});
	}
	render() {
		const { isLoading, repoList, fetchFailure, err, name, avatarUrl } = this.state;
		return (
			<CardContent>
			<div className={styles.about}>
			<h1 className={styles.title}>{ isLoading ? <Prelouder /> : 'Меня зовут:  '} { name } </h1>
			<div> <img className={styles.img} src={ avatarUrl } alt="Аватар" /> </div>
			<h2 className={styles.repo}>{ isLoading ? <Prelouder /> : 'Мои репозитории на GitHub'}</h2>
			{!fetchFailure && <div>{err.message}</div>}
			{!isLoading && <ul className={styles.ul}>
				{repoList.map(repo => (<li className={styles.li} key={repo.id}>
					<a href={repo.html_url} className={styles.link} target="_blank">{repo.name}</a>
				</li>))}
				</ul>}
				</div>
			</CardContent>
			);
	}
}

export default About; 