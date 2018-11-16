import React, { Component } from 'react';
//Import classes is made possible by css modules, if I want to use the class .red I'd put "className={classes.red}"
//That generates an unique class name with a hash by the module to be rendered in the html/css
import classes from './App.css'; 

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {

	////Lifecycle methods\\\\
	constructor(props) {
		super(props);
		console.log('[App.js] at constructor', props);
	}

	componentWillMount(){
		console.log('[App.js] at willMount');
	}

	componentDidMount(){
		console.log('[App.js] at didMount');
	}

	state = {
		persons: [
			{ id: 'a', name:"Nahuel", age:23 },
			{ id: 'b', name:"Vettel", age:31 },
			{ id: 'c', name:"Kimi", age:39 }
		],
		showPersons: false,
		clickedCount: 0
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
		//I use the setState arrow function cause using this.state doesn't imply that the actual state value is right
		this.setState( (prevState,props) => {
			return {
				showPersons: !doesShow,
				clickedCount: prevState.clickedCount+1
			}
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
		console.log('[App.js] inside render');
		//Persons setter if show person is clicked
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons 
						persons = {this.state.persons}
						clicked = {this.deletePersonHandler}
						changed = {this.nameChangedHandler}
					/>
				</div>
			);
		}

		return (
			<div className={classes.App}>
				<Cockpit
					appTitle = {this.props.title}
					clicked = {this.togglePersonsHandler}
					pLength = {this.state.persons.length}
					showPersons = {this.state.showPersons}
				/>
				{persons}
			</div>
		);
	}
}
export default App;
