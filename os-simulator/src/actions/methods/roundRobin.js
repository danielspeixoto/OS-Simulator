import memoryDefault from '../../reducers/processes/memoryDefault'

const roundRobin = (processes, memoryMethod, quantum) => {
	var timeline = []
	var memoryTimeline = []
	var memory = memoryDefault
	var pointerToPage = 0;
	// Order based on smaller start time
	processes.sort(compare)
	var processesClone = processes.map(p => p)
	// Create a instance of time for each duration
	var duration = 0
	var i = 0
	var time = 0
	var j = 0
	var turnaround = 0
	var k = 0
	if(memoryMethod === 'fifo') {
		for(j = 0; j < processesClone.length;){
			// If there is no processes starting at current time, wait
			if(time < processesClone[j].startTime) {
				for(; time < processesClone[j].startTime; time++) {
					// Null means that there are no processes runnning
					timeline.push(null)
					memoryTimeline.push(
						memory.slice()
					)
				}
			}
			
			// Loading pages lasts a quantum for each page, only load the pages that are not in the memory
			for(i = 0; i < quantum * (processesClone[j].numOfPages - processesClone[j].loadedPages); i++) {
				timeline.push(null)
				memoryTimeline.push(
					memory.slice()
				)
				time++
			}

			//Make the proper update to the values on the process that had its pages loaded and the process that had its pages removed
			for(i = 0; i < processesClone[j].numOfPages - processesClone[j].loadedPages;) {
				//Check the list of process to find the owner of the page that's being removed and the decresead the number of its loadedPages
				for(k = 0; k < processesClone.length; k++){
					if(processesClone[k].number == memory[pointerToPage]){
						processesClone[k].loadedPages--
					}
				}
				//Increase the number of the loaded pages of the process that's being loaded
				memory[pointerToPage] = processesClone[j].number
				processesClone[j].loadedPages++
				pointerToPage = (pointerToPage + 1) % 100
			}

			// Execute process
			duration = quantum;
			for(i = 0; i < duration; i++) {
				processesClone[j].duration--
				//If the process has finished it's execution, it's taken out of the queue
				if(processesClone[j].duration == 0){
					timeline.push({
						number: processesClone[j].number,
						isOverride: false
					})
					memoryTimeline.push(
						memory.slice()
					)
					time++
					turnaround += time - processesClone[j].startTime
					processesClone.splice(j, 1)	
					break
				}
				//If the process still needs to run but achieved the max time in the cpu per run, it's taken out and pushed into the end of the queue
				if((processesClone[j].duration > 0) && (i + 1 == duration)){
					timeline.push({
						number: processesClone[j].number,
						isOverride: false
					})
					timeline.push({
						number: processesClone[j].number,
						isOverride: true
					})
					memoryTimeline.push(
						memory.slice()
					)
					time++
					turnaround += time - processesClone[j].startTime
					var aux = processesClone.splice(j, 1)
					aux[0].startTime = time
					time ++
					processesClone.push(aux[0])
					processesClone.sort(compare)
					break
				//If the process still have to execute and still have time to use the cpu, just let it run untill it finishes or achieve the use limit
				} else {
					timeline.push({
						number: processesClone[j].number,
						isOverride: false
					})
					memoryTimeline.push(
						memory.slice()
					)
					time++;
				}
			}
		}
	}
	//The turnaround calculation is based on the addition of the partial turnarounds for each process, i.e. everytime a process leaves the queue it's partial turnaround is added to the calculation
	//Because as we change the starttime when the process is gonna comeback to the queue, we'll have a new partial turnaround for the process
	// I tested and the addition of the partial turnarounds for the process, results in the total turnaround of it
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

export default roundRobin
