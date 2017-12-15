import React from 'react'
import NavBar from './NavBar'
import ProcessTimeline from './RunningProcesses'

const Timeline = (props) => {
  
	return (
			<div className="processes-container">
				<NavBar></NavBar>
				<ProcessTimeline
					timeline={props.processes.timeline}
					processesCount={props.processes.processesCount}
					/>
			</div>
	);
  
}

export default Timeline