import React from 'react'

const NavBar = (props) => {
	
	return (
		<div className='navbar card'>
			<div className='control-buttons-group'>
				<button
					className='change-view'
					onClick={props.timelineViewChanged}>
				</button>
				<span
					className='turnaround'>
					<b>Turnaround:</b> {props.turnaround}
				</span>				
			</div>
		</div>
	)
}

export default NavBar