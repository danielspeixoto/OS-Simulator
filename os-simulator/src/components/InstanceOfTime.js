import React from 'react'
import { PROCESS_HEIGHT } from '../config/constants'

const InstanceOfTime = (props) => {

	const processStyle = {
		marginTop: PROCESS_HEIGHT * props.action.number + "vh",
		height: PROCESS_HEIGHT + "vh"
	}
	
	const type = props.action.isOverride ? 'override' : 'process'

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