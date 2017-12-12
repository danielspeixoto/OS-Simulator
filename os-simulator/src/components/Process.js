import React from 'react'

const Process = ({ process, number }) => {
	return (
		<div className='process-info'>
			<span className='process-number'>
				{number}
			</span>
			<span className='process-props'>
				{process.startTime}
			</span>
			<span className='process-props'>
				{process.endTime}
			</span>
			<span className='process-props'>
				{process.deadline}
			</span>
			<span className='process-props'>
				{process.priority}
			</span>
		</div>
	)
}

export default Process