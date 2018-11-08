import React from 'react';
import classes from './Person.css';

const person = (props) => {

	return (
		<div className={classes.Person}>
			<p>I'm {props.name} and I'm {props.age} years old. {props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
			<button onClick={props.click}>Delete</button>
		</div>
	);
}

export default person;
