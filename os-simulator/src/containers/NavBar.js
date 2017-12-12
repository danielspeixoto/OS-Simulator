import React from 'react'
import RamButton from '../components/RamButton'
import ConfigButton from '../components/ConfigButton'
import AnimationFlowControlButton from '../components/AnimationFlowControlButton'

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