import React, { Component } from 'react';
import Person from './Person/Person';

export class Persons extends Component {
	render() {
		return this.props.persons.map( (person,index) => {
			//Set persons, with the Person tag wrapped in the ErrorBoundary. The key has to be in the outter tag/component
			return(
				<Person 
					key={person.id}
					name={person.name} 
					age={person.age}
					click={this.props.clicked.bind(this,index)}
					changed={(event) => this.props.changed(event,person.id)}
				/>);
		});
	}
}

export default Persons;
