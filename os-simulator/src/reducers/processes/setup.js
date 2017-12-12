export const ADD = "SETUP_ADD"
export const SETUP = "SETUP_SETUP"

const setupReducer = (state = {
	isSet: false,
	list: [],
	timeline: [
		{
			isOverride: false,
			number: 0
		},
		{
			isOverride: false,
			number: 1
		},
		{
			isOverride: true,
			number: 1
		},
		{
			isOverride: false,
			number: 2
		},
		{
			isOverride: false,
			number: 3
		},
		{
			isOverride: true,
			number: 3
		},
		{
			isOverride: false,
			number: 1
		},
		{
			isOverride: false,
			number: 29
		},
	],
	processesCount: 30

}, { payload, type}) => {
	switch(type) {
		case ADD:
			return {
				...state,
				timeline: [...state.timeline],
				list: [...state.list, payload.process],
			}
		case SETUP:
			return {
				...state,
				timeline: [...state.timeline],
				list: [...state.list],
				isSet: payload.isSet
			}
		default:
			return state
	}
}

export default setupReducer