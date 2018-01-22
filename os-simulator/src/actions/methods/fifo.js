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
	var k = 0
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
			turnaround+=time - process.startTime
		})
	}
	else{
		var ages = memory.map(p => p)
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
			for(i = 0; i < quantum * (process.numOfPages - process.loadedPages); i++) {
				timeline.push(null)
				memoryTimeline.push(
					memory.slice()
				)
				time++
			}
			for(i = 0; i < (process.numOfPages - process.loadedPages);) {				
				var menor = time
				for(k = 0; k < 100; k++){
					if(ages[k] === null){
						pointerToPage = k
						break
					}
					if(ages[k] < menor){
						menor = ages[k]
						pointerToPage = k
					}
				}
				for(k = 0; k < processes.length; k++){
					if(processes[k].number == memory[pointerToPage]){
						processes[k].loadedPages--
					}
				}
				memory[pointerToPage] = process.number
				ages[pointerToPage] = time
				process.loadedPages++
			}
			for(k = 0; k < 100; k++){
				if(memory[k] == process.number){
					ages[k] = time;
				}
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
			turnaround+=time - process.startTime
		})
	}
	turnaround = turnaround/processes.length
	return {
		timeline,
		memoryTimeline,
		turnaround
	}
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
