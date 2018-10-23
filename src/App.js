import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name:"Nahuel", age:23 },
			{ name:"Vettel", age:31 },
			{ name:"Kimi", age:39 }
		]
	}

	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{ name: newName, age:23 },
				{ name:"Sebastian Vettel", age:31 },
				{ name:"Kimi Raikkonen", age:39 }
			]
		});
	}

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: event.target.value, age:23 },
				{ name: "Sebastian Vettel", age:31 },
				{ name: "Kimi Raikkonen", age:39 }
			]
		});
	}

	render() {
		return (
			<div className="App">
				<h1>Hello world</h1>
				<button onClick={this.switchNameHandler.bind(this,'Roberto')}>Switch Name </button>
				<Person 
					name={this.state.persons[0].name} 
					age={this.state.persons[0].age} 
					click={this.switchNameHandler}
					changed={this.nameChangedHandler}/>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Hobbies: racing </Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
			</div>
		);
	}
}
export default App;
