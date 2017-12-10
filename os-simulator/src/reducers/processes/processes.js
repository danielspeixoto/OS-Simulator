const processesReducer = (state = {
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
	return state
}

export default processesReducer