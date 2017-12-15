import React from 'react'
import AddProcessForm from '../components/AddProcessForm'
import ProcessList from '../components/ProcessList'
import EmptyList from '../components/lists/EmptyList'

const Setup = ({
	addProcess,
	form,
	processes,
	onSetupDone
}) => {

	return (
			<div>
				<AddProcessForm addProcess={addProcess}
					formData={form.addProcess}
				></AddProcessForm>
				<EmptyList display={!processes.list.length > 0}>
					Your created processes will be shown here
				</EmptyList>
				<ProcessList processes={processes.list}></ProcessList>
				<button className='txt end-operation'
					onClick={onSetupDone}>Done</button>
			</div>
	);
  
}

export default Setup