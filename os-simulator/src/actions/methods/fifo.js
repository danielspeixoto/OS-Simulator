const fifo = (processes) => {
	var timeline = []
	// Order based on smaller start time
	processes.sort(compare)
	// Create a instance of time for each duration
	var duration = 0
	var i = 0

	var time = 0
	processes.forEach(process => {
		if(time < process.startTime) {
			for(; time < process.startTime; time++) {
				// Null means that there are no processes runnning
				timeline.push(null)
			}
		}
		duration = process.duration;
		for(i = 0; i < duration; i++) {
			timeline.push({
				number: process.number,
				isOverride: false
			})
			time++
		}
	})

	return timeline
}

//TODO Return ints instead of strings
function compare(a, b) {
	if(a.startTime < b.startTime) {
		return -1
	}
	if(a.startTime > b.startTime) {
		return 1
	}
	return 0
}

export default fifo