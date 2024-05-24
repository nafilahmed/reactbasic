import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor(){

    super();

    this.state = {
      monsters : [],
      searchField : '',
    };
  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((user) => {
      this.setState({ monsters : user })
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchField : event.target.value.toLocaleLowerCase() })
  }

  render(){

    const { onSearchChange } = this;

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
      
        <SearchBox onChangeHandler={onSearchChange} />
      
        <CardList monsters={filteredMonsters} />
      
      </div>
    );
  }
}         

export default App;
