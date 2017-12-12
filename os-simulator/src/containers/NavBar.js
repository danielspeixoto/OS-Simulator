import React from 'react'
import RamButton from '../components/buttons/RamButton'
import ConfigButton from '../components/buttons/ConfigButton'
import AnimationFlowControlButton from '../components/buttons/AnimationFlowControlButton'

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