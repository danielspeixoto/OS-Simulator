import React from 'react'

const ConfigButton = (props) => {

	return (
		<li>
			<button
				className='config-button'
				style={props.style}
				onClick={props.onClick}>
			</button>
		</li>
	)
}

export default ConfigButton