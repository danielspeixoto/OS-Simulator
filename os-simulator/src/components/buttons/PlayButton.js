import React from 'react'
import { Link } from 'react-router-dom'

const PlayButton = (props) => {
	return (
		<Link 
			to='/processes'
			className="play-button"
			style={props.style}>
		</Link>
	)
}

export default PlayButton