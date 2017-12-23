import React from 'react'
import { PROCESS_HEIGHT } from '../config/constants'

const InstanceOfTime = (props) => {

	const processStyle = {
		height: PROCESS_HEIGHT + "vh",
		marginTop: 0
	}
	if(props.action) {
		processStyle['marginTop'] =
			PROCESS_HEIGHT * props.action.number + "vh"
	}
	const type = props.action? 
		props.action.isOverride ? 
			'override' : 'process'
		: 'empty-process'
	
	return (
		<div className="instance-of-time">
			<div className={type}
				style={processStyle}>
			</div>
			<span className="time">
				{props.time}
			</span>
		</div>
	)
}

export default InstanceOfTime