import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';
import ColorBox from './ColorBox';

const colors = [
  '#C94C24',
  '#268BD2',
  '#C4226F',
  '#859835',
  '#6D73C2',
  '#37A198',
  '#DA3637',
  '#F0AD4E'
];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rects: [],
			boxNum: 10
		};
		this.rects = this.rects.bind(this)
		this.inputHandler = this.inputHandler.bind(this)
	}

	rects() {
		let rects = [];
		for (let i = 0; i<this.state.boxNum; i++) {
			rects.push(<ColorBox num={i+1} color={colors[i%colors.length]} key={i}/>)
		}
		return rects;
	}

	inputHandler(event) {

		this.setState({ boxNum: event.target.value.replace(/\D+/g, '') });
		this.rects();
	}
  render() {
  	let boxNum = 10;
    return (
      <div>
      	<div style={Styles.inputContainer}>
      		<label style={Styles.label} > 
      			Number of Boxes
    			</label>
      		<input
      			style={Styles.input}
      			value={this.state.boxNum}
      			onChange={this.inputHandler}
    			/>
      	</div>
        {this.rects()}
      </div>
    );
  }
}

const Styles = {
	inputContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '20px'
	},
	label: {
		marginRight: '20px',
	},
	input: {
		padding: '5px 10px',
		width: '150px',
		textAlign: 'center',
		lineHeight: '2rem',
		fontSize: '2rem',
		border: '1px solid transparent',
		boxShadow: '0px 0px 2px 1px #666',
		':hover': {
			border: '1px solid #999',
			ouline: 'none'
		},
		':focus': {
			outline: 'none'
		}
	}
}

export default Radium(App);
