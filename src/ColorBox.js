import React from 'react';

let styles = {
	container: {
		width: '20vw',
		height: '20vw',
		padding: '5px',
		float: 'left',
		boxSizing: 'border-box'
	},
	box: {
		backgroundColor: 'blue',
		width: '100%',
		height: '100%',
	}
}
const box = (props) => {
	if (props.color) {
		console.log(props.color)
		styles.box = {...styles.box, backgroundColor: props.color };
	}
	return (
		<div style={styles.container}>
			<div style={styles.box}></div>
		</div>
	);
}

export default box;