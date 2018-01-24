import {
	ADD,
	SETUP,
	MEMORY_VIEW
} from '../../reducers/processes/setup'
import {
	EDF,
	ROUND_ROBIN,
	SJF
} from '../../config/constants'
import fifo from '../methods/fifo'
import edf from '../methods/edf'
import roundRobin from '../methods/roundRobin'
import sjf from '../methods/sjf'

export default {
	addProcess: (process) => {
		return {
			type: ADD,
			payload: {
				process
			}
		}
	},
	endSetup: (processes, cpu, memory, quantum) => {

		const config = getMethod(cpu)(processes, memory, quantum)

		return {
			type: SETUP,
			payload: {
				isSet: true,
				...config
			},
		}
	},

	timelineViewChanged: () => {
		return {
			type: MEMORY_VIEW,
		}
	}
}

function getMethod(method) {
	switch(method) {
		case EDF: 
			return edf
		case ROUND_ROBIN:
			return roundRobin
		case SJF: 
			return sjf
		default:
			return fifo
		
	}
}