import React from 'react'
import NavBar from './NavBar'
import ProcessTimeline from './RunningProcesses'

const Timeline = (props) => {

	console.log(props.processes)

	return (
			<div className={`processes-container ${props.className}`}>
				<NavBar></NavBar>
				<ProcessTimeline
					timeline={props.processes.timeline}
					processesCount={props.processes.list.length}
					/>
			</div>
	);
  
}

export default Timeline