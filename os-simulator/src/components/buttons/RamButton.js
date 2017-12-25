import React from 'react'

const RamButton = (props) => {

	return (
		<li>
			<button
				className='ram-button'
				style={props.style}
				onClick={props.onClick}>
			</button>
		</li>
	)
}

export default RamButton