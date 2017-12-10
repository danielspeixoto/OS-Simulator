import React from 'react'
import RamButton from './RamButton'
import ConfigButton from './ConfigButton'
import AnimationFlowControlButton from './AnimationFlowControlButton'

const NavBar = (props) => {
	
	return (
		<div className='navbar'>
			<ul className='control-buttons-group'>
				<RamButton/>
				<ConfigButton/>
				<AnimationFlowControlButton/>
			</ul>
		</div>
	)
}

export default NavBar