import React from 'react'
import AddProcessForm from '../components/AddProcessForm'
import EmptyList from '../components/lists/EmptyList'
import SimulatorConfig from './SimulatorConfig'

const Setup = ({
	addProcess,
	form,
	processes,
	onSetupDone,
	className,
	method
}) => {

	

	return (
			<div className={className}>
				<AddProcessForm addProcess={addProcess}
					processNumber={processes.list.length}
					formData={form.addProcess}
				></AddProcessForm>
				<EmptyList display={!processes.list.length > 0}>
					Your created processes will be shown here
				</EmptyList>
				<SimulatorConfig config={form.simulatorConfig} list={processes.list} onSetupDone={onSetupDone}></SimulatorConfig>
			</div>
	);
  
}

export default Setup