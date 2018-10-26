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
			rects: colors,
			boxNum: 8
		};
		this.rects = this.rects.bind(this);
		this.inputHandler = this.inputHandler.bind(this);
		this.deleteHandler = this.deleteHandler.bind(this);
	}

	rects() {
		return this.state.rects.map((val, i) => (
			<ColorBox
				num={i+1}
				color={val}
				key={i}
				onDelete={() => this.deleteHandler(i)}
			/>
		))
	}

	inputHandler(event) {
		const boxNum = parseInt(event.target.value.replace(/\D+/g, '') || 0);
		const rects = new Array(boxNum).fill(1).map((v, i) => colors[i%colors.length])
		this.setState({ boxNum, rects });
	}
	deleteHandler(index) {
		const rects = [...this.state.rects];
		rects.splice(index, 1);
		this.setState({ rects, boxNum: rects.length });
	}
  render() {
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
