import memoryDefault from '../../reducers/processes/memoryDefault'

const fifo = (processes, memoryMethod, quantum) => {
	var timeline = []
	var memoryTimeline = []
	var memory = memoryDefault
	var pointerToPage = 0;
	// Order based on smaller start time
	processes.sort(compare)
	// Create a instance of time for each duration
	var duration = 0
	var i = 0
	var time = 0
	var turnaround = 0
	if(memoryMethod === 'fifo') {
		processes.forEach(process => {
			// If there is no processes starting at current time, wait
			if(time < process.startTime) {
				for(; time < process.startTime; time++) {
					// Null means that there are no processes runnning
					timeline.push(null)
					memoryTimeline.push(
						memory.slice()
					)
				}
			}
			
			// Loading pages lasts a quantum for each page
			for(i = 0; i < quantum * process.numOfPages; i++) {
				timeline.push(null)
				memoryTimeline.push(
					memory.slice()
				)
				time++
			}

			// Loads page
			for(i = 0; i < process.numOfPages; i++) {
				memory[pointerToPage] = process.number
				pointerToPage = (pointerToPage + 1) % 100
			}

			// Execute process
			duration = process.duration;
			for(i = 0; i < duration; i++) {
				timeline.push({
					number: process.number,
					isOverride: false
				})
				memoryTimeline.push(
					memory.slice()
				)
				time++
			}
			turnaround += time - process.startTime
		})
	}

	// TODO Assure floating number
	return {
		timeline,
		memoryTimeline,
		turnaround: turnaround / processes.length
	}
}

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