import React, { Component } from 'react';
import classes from './Person.css';


export class Person extends Component {
	
	////Lifecycle methods\\\\
	constructor(props) {
		super(props);
		console.log('[Person.js] at constructor', props);
	}

	componentWillMount(){
		console.log('[Person.js] at willMount');
	}

	componentDidMount(){
		console.log('[Person.js] at didMount');
	}

	render() {
		console.log('[Person.js] inside render');

		return (
			<div className={classes.Person}>
				<p>I'm {this.props.name} and I'm {this.props.age} years old. {this.props.children}</p>
				<input type="text" onChange={this.props.changed} value={this.props.name} />
				<button onClick={this.props.click}>Delete</button>
			</div>
		);
	}
}

export default Person;
