import React from 'react'

const Process = ({ process, number }) => {
	return (
		<div className='card process-card'>
			<div className='process-number'>
				{number}
			</div>
			<div className='process-props'>
				<label>Start Time</label><span>{process.startTime}</span>
			</div>
			<div className='process-props'>
				<label>Duration</label><span>{process.duration}</span>
			</div>
			<div className='process-props'>
				<label>Deadline</label><span>{process.deadline}</span>
			</div>
			<div className='process-props'>
				<label>Priority</label><span>{process.priority}</span>
			</div>
		</div>
	)
}

export default Process