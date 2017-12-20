import {
	ADD,
	SETUP
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
	endSetup: (processes, method) => {

		const timeline = getMethod(method)(processes)

		return {
			type: SETUP,
			payload: {
				isSet: true,
				timeline
			},
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