import React from 'react'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import Input from '../components/inputs/Input'
import ProcessList from '../components/ProcessList'

const SimulatorConfig = ({
	list,
	onSetupDone,
	config
}) => {

	const onDone = () => {
		console.log(JSON.stringify(list, null, '\t'))
		console.log(JSON.stringify(config, null, '\t'))
		onSetupDone(list, config.values.cpu, config.values.memory, config.values.quantum)
	}

	return (
		<form class="distance">
			<ProcessList processes={list}></ProcessList>
			<Input
				name="quantum"
				type="number"
			>Quantum</Input>
			<fieldset id='cpu'>
				<label><b>CPU Method:</b></label>
					<label>
						<Field
						name="cpu"
						component="input"
						type="radio"
						value="fifo"
						/>
						FIFO
					</label>
					<label>
						<Field
						name="cpu"
						component="input"
						type="radio"
						value="sjf"
						/>
						SJF
					</label>
					<label>
						<Field
						name="cpu"
						component="input"
						type="radio"
						value="roundRobin"
						/>
						Round Robin
					</label>
					<label>
						<Field
						name="cpu"
						component="input"
						type="radio"
						value="edf"
						/>
						EDF
					</label>
			</fieldset>
			<fieldset id='memory'>
				<label><b>Memory Method</b></label>
				<label>
					<Field
					name="memory"
					component="input"
					type="radio"
					value="fifo"
					/>
					FIFO
				</label>
				<label>
					<Field
					name="memory"
					component="input"
					type="radio"
					value="lessUsed"
					/>
					Menos Recentemente Utilizada
				</label>
			</fieldset>
			<button className='txt end-operation'
				onClick={onDone}>Done</button>
		</form>
	)
}


export default reduxForm({
	form: 'simulatorConfig'
})(SimulatorConfig)