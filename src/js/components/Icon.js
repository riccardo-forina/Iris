
import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Icon extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		var className = "icon";
		if (this.props.className){
			className += ' '+this.props.className;
		}

		switch (this.props.type){
			case 'material':
				className += ' material-icon';		
				return <i className={className}>{this.props.name}</i>;

			case 'fontawesome':	
				return <FontAwesome name={this.props.name} />;

			default:
				className += ' icon-'+this.props.name;		
				return <i className={className}></i>;
		}
	}
}