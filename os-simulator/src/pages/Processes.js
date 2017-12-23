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
				processes={props.processes}></Timeline>
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
