import React from 'react'
import AddProcessForm from '../components/AddProcessForm'
import ProcessList from '../components/ProcessList'
import EmptyList from '../components/lists/EmptyList'

const Setup = ({
	addProcess,
	form,
	processes,
	onSetupDone,
	className,
	method
}) => {

	const onDone = () => {
		onSetupDone(processes.list, method)
	}

	return (
			<div className={className}>
				<AddProcessForm addProcess={addProcess}
					processNumber={processes.list.length}
					formData={form.addProcess}
				></AddProcessForm>
				<EmptyList display={!processes.list.length > 0}>
					Your created processes will be shown here
				</EmptyList>
				<ProcessList processes={processes.list}></ProcessList>
				<button className='txt end-operation'
					onClick={onDone}>Done</button>
				{/* Methods list  */}
			</div>
	);
  
}

export default Setup