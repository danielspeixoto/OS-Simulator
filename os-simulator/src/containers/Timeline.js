import React from 'react'
import NavBar from './NavBar'
import RunningProcesses from './RunningProcesses'
import Memory from './Memory'

const Timeline = (props) => {
	
	var view = <RunningProcesses
		timeline={props.processes.timeline}
		processesCount={props.processes.list.length}
	/>
	
	if(props.processes.isMemoryView) {
		view = <Memory memory={props.processes.memoryTimeline[props.processes.memoryTimeline.length - 1]}></Memory>
	}

	return (
			<div className={`fill-available ${
				props.className}`}>
				<NavBar timelineViewChanged={props.timelineViewChanged}></NavBar>
				{view}
			</div>
	);
  
}

export default Timeline