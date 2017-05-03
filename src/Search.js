import React, {Component} from "react"
import styles from './styles/index'

class Search extends Component {
	render(){
	console.log('show button');
		return (
			<form>
		    <div>
		    	<input type="text" class="inputbox" placeholder="Search Movies"/>
				<button type="submit" class='addy'>submit</button>
			</div>
			</form>

		)
	}
}

export default Search















export default Search