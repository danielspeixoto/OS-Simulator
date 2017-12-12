import React from 'react'
import banner from '../images/banner.png'

const WelcomeTitle = (props) => {

	return (
		<img 
			className="welcome-title"
			style={props.style}
			src={banner}
			alt="OS Simulator banner"
			>
		</img>
	)
}

export default WelcomeTitle