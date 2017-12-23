import React from 'react'

const Process = ({ process, number }) => {
	return (
		<div className='card'>
			<div className='process-number'>
				{number}
			</div>
			<div className='process-props'>
				<label>Start Time</label>{process.startTime}
			</div>
			<div className='process-props'>
				<label>Duration</label>{process.duration}
			</div>
			<div className='process-props'>
				<label>Deadline</label>{process.deadline}
			</div>
			<div className='process-props'>
				<label>Priority</label>{process.priority}
			</div>
		</div>
	)
}

export default Process