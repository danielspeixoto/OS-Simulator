import memoryDefault from '../../reducers/processes/memoryDefault'

const sjf = (processes, memoryMethod, quantum) => {
	var timeline = []
	var memoryTimeline = []
	var memory = memoryDefault
	var pointerToPage = 0;
	// Order based on smaller duration
	processes.sort(compare)
	var processesClone = processes.map(p=>p)
	// Create a instance of time for each duration
	var duration = 0
	var i = 0
	var time = 0
	var j = 0
	var index
	var turnaround = 0
	if(memoryMethod === 'fifo') {
		for(j = 0; j < processesClone.length;){
			index = j
			var aux = processesClone[j]
			//  If the shortest job start time is greater than the actual time look for the first job with the smaller star time and lesser duration				
			if(time < aux.startTime) {
				for(i = j + 1; i < processesClone.length; i++){
					if(processesClone[i].startTime < aux.startTime){
						aux = processesClone[i]
						index = i
						if(aux.startTime <= time){
							break
						}
					}
				}
				for(; time < aux.startTime; time++) {
					// Null means that there are no processes runnning
					timeline.push(null)
					memoryTimeline.push(
						memory.slice()
					)
				}
			}
			// Loading pages lasts a quantum for each page
			for(i = 0; i < quantum * aux.numOfPages; i++) {
				timeline.push(null)
				memoryTimeline.push(
					memory.slice()
				)
				time++
			}

			// Loads page
			for(i = 0; i < aux.numOfPages; i++) {
				memory[pointerToPage] = aux.number
				pointerToPage = (pointerToPage + 1) % 100
			}

			// Execute process
			duration = aux.duration;
			for(i = 0; i < duration; i++) {
				timeline.push({
					number: aux.number,
					isOverride: false
				})
				memoryTimeline.push(
					memory.slice()
				)
				time++
			}
			turnaround += time - aux.startTime
			// Remove process from the queue so it doesn't repeat in the timeline
			processesClone.splice(index, 1)
		}
	}
	turnaround = turnaround/processes.length
	return {
		timeline,
		memoryTimeline,
		turnaround
	}
}


function compare(a, b) {
	if(a.duration < b.duration) {
		return -1
	}
	if(a.duration > b.duration) {
		return 1
	}
	if(a.duration === b.duration){
		if(a.startTime < b.startTime) {
			return -1
		}
		if(a.startTime > b.startTime) {
			return 1
		}
	}
	return 0
}

export default sjf