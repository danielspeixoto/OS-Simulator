import React from 'react'
import { reduxForm } from 'redux-form'
import Input from './inputs/Input'

const AddProcessForm = ({ formData, addProcess }) => {

	const onSubmit = () => {
		addProcess(formData.values)
	}

	return (
		<form>
			<Input name="startTime"
				type="number"
				className="">
				Start Time
				</Input>
			<Input name="duration"
				type="number"
				className="">
				Duration
				</Input>
			<Input name="deadline"
				type="number"
				className="">
				Deadline
				</Input>
			<Input name="priority"
				type="number"
				className="">
				Priority
				</Input>
			<button className="txt"
				type="button"
				onClick={onSubmit}>
				Add
			</button>
		</form>
	)
}
 
export default reduxForm({
	// a unique name for the form
	form: 'addProcess'
})(AddProcessForm)