import React, { Component } from 'react';
//PropTypes to validaate props
import PropTypes from 'prop-types';
import classes from './Person.css';

//AuthContext for authentication
import { AuthContext } from '../../../containers/App';

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
		if(this.props.name === 'Vettel'){
			this.inputPerson.focus();
		}
	}

	render() {
		console.log('[Person.js] inside render');

		return (
			<div className={classes.Person}>
				<AuthContext.Consumer>
					{auth => auth ? <p>Authenticated</p> : null}
				</AuthContext.Consumer>
				<p>I'm {this.props.name} and I'm {this.props.age} years old. {this.props.children}</p>
				<input 
					ref = {(inp) => this.inputPerson = inp}
					type="text" 
					onChange={this.props.changed} 
					value={this.props.name} />
				<button onClick={this.props.click}>Delete</button>
			</div>
		);
	}
}

Person.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	changed:  PropTypes.func,
	click: PropTypes.func
}


export default Person;
