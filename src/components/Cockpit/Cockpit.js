import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

	//Class of button red/green
	let btnClass = '';
	if(props.showPersons){
		btnClass = classes.red;		
	}

	//Css classes for p depending of the amount of persons
	let pClasses = [];
	if(props.pLength > 1){
		pClasses.push( classes.green );
	}
	if(props.pLength <= 1){
		pClasses.push( classes.red );
	}

	return (
		<div className={classes.Cockpit}>
			<h1>Hello world</h1>
			<button onClick={props.clicked} className={btnClass}>
				Show Persons 
			</button>
			<p className={pClasses.join(' ')}>Amount of persons: {props.pLength}</p>
		</div>
	)
}

export default cockpit;