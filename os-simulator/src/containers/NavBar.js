import React from 'react'

const NavBar = (props) => {
	
	return (
		<div className='navbar card'>
			<ul className='control-buttons-group'>
				<li>
					<button
						className='change-view'
						onClick={props.timelineViewChanged}>
					</button>
				</li>
			</ul>
		</div>
	)
}

export default NavBar