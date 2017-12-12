import {
	ADD,
	SETUP
} from '../../reducers/processes/setup'

export default {
	addProcess: (process) => {
		return {
			type: ADD,
			payload: {
				process
			}
		}
	},
	endSetup: () => {
		return {
			type: SETUP,
			payload: {
				isSet: true
			}
		}
	}
}