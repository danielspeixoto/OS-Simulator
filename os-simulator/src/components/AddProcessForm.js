import React from 'react'
import { Field, reduxForm } from 'redux-form'
import AddButton from './buttons/AddButton'

const AddProcessForm = ({ formData, addProcess }) => {

	const onSubmit = () => {
		addProcess(formData.values)
	}

	return (
		<div>
			<label htmlFor="startTime">Start Time</label>
			<Field className='process-attributes'
				name="startTime"
				component="input"
				type="number"/>
			<label htmlFor="endTime">End Time</label>
			<Field className='process-attributes'
				name="endTime"
				component="input"
				type="number"/>
			<label htmlFor="deadline">Deadline</label>
			<Field className='process-attributes'
				name="deadline"
				component="input"
				type="number"/>
			<label htmlFor="priority">Priority</label>
			<Field className='process-attributes'
				name="priority"
				component="input"
				type="number"/>
			<AddButton onClick={onSubmit}></AddButton>
		</div>
	)
}
 
export default reduxForm({
	// a unique name for the form
	form: 'addProcess'
})(AddProcessForm)