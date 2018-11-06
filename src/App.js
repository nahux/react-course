import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id: 'a', name:"Nahuel", age:23 },
			{ id: 'b', name:"Vettel", age:31 },
			{ id: 'c', name:"Kimi", age:39 }
		],
		showPersons: false
	}

	//Change First Person name and completes the other two.
	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{ id: 'a', name: newName, age:23 },
				{ id: 'b', name:"Sebastian Vettel", age:31 },
				{ id: 'c', name:"Kimi Raikkonen", age:39 }
			]
		});
	}

	//Change First Person name with event
	nameChangedHandler = (event, id) => {
		//Get index of Person's name changed
		const personIndex = this.state.persons.findIndex( p => {
			return p.id === id;
		});
		//Copy that person and the whole array from the state
		const person = {...this.state.persons[personIndex]};
		const persons = [...this.state.persons];
		//Update the name
		person.name = event.target.value;
		//Update the copied array
		persons[personIndex] = person;
		//Set the state with the updated Persons array
		this.setState({
			persons: persons
		});
	}

	//Show or Hide Persons
	togglePersonsHandler = (event) => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow
		});
	}

	//Delete one Person
	deletePersonHandler = (personIndex) => {
		//const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex,1);
		this.setState({persons : persons});
	}

	//Render view
	render() {

		const buttonStyle = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inheit',
			border: '1px solid white',
			padding: '8px',
			cursor: 'pointer',
			':hover': {
				backgroundColor: '#00BE00'
			}
		}

		//Persons setter if show person is clicked
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map( (person,index) => {
						return(
							<Person 
								name={person.name} 
								age={person.age}
								click={this.deletePersonHandler.bind(this,index)}
								key={person.id}
								changed={(event) => this.nameChangedHandler(event,person.id)}
							/>);
					})}
				</div>
			);

			buttonStyle.backgroundColor = 'white';
			buttonStyle[':hover'] = {backgroundColor: '#EDE4E4'};
			buttonStyle.color = 'black';
			buttonStyle.border = '1px solid lightgrey';
		}

		//Css classes for p depending of the amount of persons
		let pClasses = [];
		if(this.state.persons.length > 1){
			pClasses.push('green');
		}
		if(this.state.persons.length <= 1){
			pClasses.push('red');
		}

		return (
			<StyleRoot>
				<div className="App">
					<h1>Hello world</h1>
					<button 
						onClick={this.togglePersonsHandler}
						style={buttonStyle}> 
						Show Persons 
					</button>
					<p className={pClasses.join(' ')}>Amount of persons: {this.state.persons.length}</p>
					{persons}
				</div>
			</StyleRoot>
		);
	}
}
export default Radium(App);
