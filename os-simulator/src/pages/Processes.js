import React from 'react'
import { connect } from "react-redux";
import Setup from '../containers/Setup'
import Timeline from '../containers/Timeline'
import setup from '../actions/processes/setup'

import '../style/pages/processes.scss'

const Processes = (props) => {

	if(props.processes.isSet) {
		return (
			<Timeline
				turnaround={props.turnaround}
				processes={props.processes}
				isMemoryView={props.isMemoryView}
				memory={props.memory}
				timelineViewChanged={props.timelineViewChanged}></Timeline>
		)
	}

	return (
			<Setup
				className='distance'
				processes={props.processes}
				form={props.form}
				addProcess={props.addProcess}
				onSetupDone={props.endSetup}
				></Setup>
	);
  
}

export default connect(
	state => ({
		processes: state.processes,
		form: state.form
	}),
	{
		...setup
	}
) (Processes)
