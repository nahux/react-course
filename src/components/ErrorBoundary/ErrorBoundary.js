import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
	state = {
		hasError: false,
		errorMsg: ' '
	}

	//This function executes when the component that ErrorBoundary is wrapped in throws an error
	componentDidCatch = (error, info) => {
		this.setState({hasError:true, errorMsg: error});
	}
 
	render() {
		if(this.state.hasError){
			return (<h1>{this.state.errorMsg}</h1>);
		} else{
			//this.props.children is the default, the content where this component is wrapped
			return (<h1>{this.props.children}</h1>);
		}
	}
		
}