// Developer TODO: Define App component defintion here
import React, {Component} from 'react'
import Search from './components/Search'
import styles from './styles/index'

class Home extends Component {
	render() {
		return (
			<div style={styles.transparentBg} className="jumbotron col-sm-12 text-center">
			    <h1><a href="/">Team 3</a></h1>
			        <div className="col-sm-12" style={styles.space}>
			      
			        </div>
			</div>
		);
		console.log('Home page is working');
	}
}

export default Home