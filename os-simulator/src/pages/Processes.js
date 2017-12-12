import React from 'react'
import { connect } from "react-redux";
import NavBar from '../containers/NavBar'
import ProcessTimeline from '../containers/RunningProcesses'
import '../style/pages/processes.scss'

const Processes = (props) => {
  
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

export default connect(
	state => ({
		processes: state.processes
	}),
	{

	}
) (Processes)
