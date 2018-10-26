import React from 'react';
import Radium from 'radium';

const box = (props) => {
	if (props.color) {
		styles.box = {...styles.box, backgroundColor: props.color };
	}
	return (
		<div style={styles.container}>
			<div style={styles.box}>
				<button
					style={styles.button}
					onClick={props.onDelete}
				>DELETE</button>
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
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'blue',
		width: '100%',
		height: '100%',
		fontSize: '1.5rem',
		color: 'white'
	},
	button: {
		position: 'absolute',
		top: '10px',
		right: '10px',
		borderRadius: '5px',
		padding: '5px 10px',
		cursor: 'pointer',
		fontSize: '1rem'
	}
}

export default Radium(box);