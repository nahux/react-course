import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {

	const style = {
		'@media (min-width:500px)': {
			width: '450px'
		}
	};

	return (
		<div className='Person' style={style}>
			<p>I'm {props.name} and I'm {props.age} years old. {props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
			<button onClick={props.click}>Delete</button>
		</div>
	);
}

export default Radium(person);
