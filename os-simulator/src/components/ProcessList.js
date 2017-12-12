import React from 'react'
import Process from './Process'

const ProcessList = (props) => {

	let index = 0;
	const list = props.processes.map(process => {
		return (
			<li key={++index}>
				<Process number={index} process={process}></Process>
			</li>
		)
	})

	return (
		<ul className='process-list'>
			{list}
		</ul>
	)
}

export default ProcessList