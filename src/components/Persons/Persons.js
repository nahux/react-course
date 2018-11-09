import React from 'react';
import Person from './Person/Person';


const persons = (props) => props.persons.map( (person,index) => {
	//Set persons, with the Person tag wrapped in the ErrorBoundary. The key has to be in the outter tag/component
	return(
			<Person 
				key={person.id}
				name={person.name} 
				age={person.age}
				click={props.clicked.bind(this,index)}
				changed={(event) => props.changed(event,person.id)}
			/>);
	});

export default persons;
