import React from 'react';
import Radium from 'radium';

const box = (props) => {
	if (props.color) {
		styles.box = {...styles.box, backgroundColor: props.color };
	}
	return (
		<div style={styles.container}>
			<div style={styles.box}>
				{props.num ? props.num : ''}
			</div>
		</div>
	);
}

const styles = {
	container: {
		width: '20vw',
		height: '20vw',
		padding: '5px',
		float: 'left',
		boxSizing: 'border-box'
	},
	box: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'blue',
		width: '100%',
		height: '100%',
		fontSize: '3rem',
		color: 'white'
	}
}

export default Radium(box);