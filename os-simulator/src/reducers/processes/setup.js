export const ADD = "SETUP_ADD"
export const SETUP = "SETUP_SETUP"
export const MEMORY_VIEW = 'SETUP_MEMORY_VIEW'

const setupReducer = (state = {
	isSet: false,
	list: [],
	timeline: [],
	memoryTimeline: [],
	isMemoryView: false

}, { payload, type}) => {
	switch(type) {
		case ADD:
			return {
				...state,
				memoryTimeline: [...state.memoryTimeline],
				timeline: [...state.timeline],
				list: [...state.list, payload.process],
			}
		case SETUP:
			return {
				...state,
				memoryTimeline: payload.memoryTimeline,
				timeline: payload.timeline,
				list: [...state.list],
				isSet: payload.isSet
			}
		case MEMORY_VIEW: 
			return {
				...state,
				memoryTimeline: [...state.memoryTimeline],
				timeline: [...state.timeline],
				list: [...state.list],
				isMemoryView: !state.isMemoryView
			}
		default:
			return state
	}
}

export default setupReducer