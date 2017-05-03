// Developer TODO: Define App component defintion here
import React, {Component} from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
	render() {
		console.log('app page is working');
		return (

			<div className="App">
				<HelloWorld />
				{this.props.children}
			</div>
		);
	}
}

export default App