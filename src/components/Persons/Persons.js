import React, { Component } from 'react';
import Person from './Person/Person';

export class Persons extends Component {

	////Lifecycle methods\\\\
	constructor(props) {
		super(props);
		console.log('[Persons.js] at constructor', props);
	}

	componentWillMount(){
		console.log('[Persons.js] at willMount');
	}

	componentWillUnmount(){
		console.log('[Persons.js] at willUnmount');
	}

	componentDidMount(){
		console.log('[Persons.js] at didMount');
	}

	////Update Lifecycle methods\\\\
	componentWillReceiveProps(nextProps){
		console.log('[UPDATE Persons.js] at WillReceiveProps',nextProps );
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log('[UPDATE Persons.js] at shouldComponentUpdate',nextProps,nextState);
		return nextProps.persons !== this.props.persons;
	}

	componentWillUpdate(nextProps, nextState){
		console.log('[UPDATE Persons.js] at WillUpdate',nextProps, nextState );
	}

	componentDidUpdate(){
		console.log('[UPDATE Persons.js] at DidUpdate' );
	}

	render() {
		console.log('[Persons.js] inside render');

		return this.props.persons.map( (person,index) => {
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
