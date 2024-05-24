import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {

	render(){

		return (

			<div>
				<input className='search-box' type='search' placeholder='search monsters' 
		          onChange={this.props.onChangeHandler}
		        />
			</div>
		)
	}
}

export default SearchBox;