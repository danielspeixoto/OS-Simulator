import React from 'react'
import ColumnOfNumbers from '../components/ColumnOfNumbers'
import InstanceOfTime from '../components/InstanceOfTime'

const ProcessTimeline = (props) => {

	let id = 0

	const instancesOfTime = props.timeline.map(action => {
		return (
			<InstanceOfTime key={id++} time={id} action={action}/>
		)
	})

	return (
		<div className='processes-timeline'>
			<ColumnOfNumbers size={props.processesCount} />
			<div className='processes-group'>
				{instancesOfTime}
			</div>
		</div>
	)
}

export default ProcessTimeline