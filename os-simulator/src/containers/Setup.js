import React from 'react'
import AddProcessForm from '../components/AddProcessForm'
import ProcessList from '../components/ProcessList'
import '../style/pages/setup.scss'

const Setup = ({
	addProcess,
	form,
	processes,
	onSetupDone
}) => {

	return (
			<div className="setup-container">
				<AddProcessForm addProcess={addProcess}
					formData={form.addProcess}
				></AddProcessForm>
				<ProcessList processes={processes.list}></ProcessList>
				<button className='setup-done'
					onClick={onSetupDone}>Done</button>
			</div>
	);
  
}

export default Setup