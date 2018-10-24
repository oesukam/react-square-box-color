import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ColorBox from './ColorBox'

class App extends Component {
  render() {	
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
	let rects = colors.map((color, i) => <ColorBox color={colors[i%colors.length]} key={i}/>)
    return (
      <div>
        {rects}
      </div>
    );
  }
}

export default App;
