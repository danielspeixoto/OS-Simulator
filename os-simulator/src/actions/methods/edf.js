import memoryDefault from '../../reducers/processes/memoryDefault'

const edf = (processes, memoryMethod, quantum) => {
	var timeline = []
	var memoryTimeline = []
	var memory = memoryDefault
	var pointerToPage = 0;
	// Order based on smaller start time
	processes.sort(compare)
	var processesClone = processes.map(p=>p)
	// Create a instance of time for each duration
	var duration = 0
	var i = 0
	var time = 0
	var j = 0
	var index
	var turnaround = 0
	var k = 0
	if(memoryMethod === 'fifo') {
		for(j = 0; j < processesClone.length;){
				index = j
				var aux = processesClone[j]
				//  If the job withe the earliest deadline time is greater than the actual time look for the first job with the closer deadline to enter queue
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
				// Loading pages lasts a quantum for each page, only load the pages that are not in the memory
				for(i = 0; i < quantum * (aux.numOfPages - aux.loadedPages); i++) {
					timeline.push(null)
					memoryTimeline.push(
						memory.slice()
					)
					time++
				}

				//Make the proper update to the values on the process that had its pages loaded and the process that had its pages removed
				for(i = 0; i < aux.numOfPages - aux.loadedPages;) {
					//Check the list of process to find the owner of the page that's being removed and the decresead the number of its loadedPages
					for(k = 0; k < processesClone.length; k++){
						if(processesClone[k].number == memory[pointerToPage]){
							processesClone[k].loadedPages--
						}
					}
					//Increase the number of the loaded pages of the process that's being loaded
					memory[pointerToPage] = aux.number
					aux.loadedPages++
					pointerToPage = (pointerToPage + 1) % 100
				}
				// Execute process
				duration = quantum;
				for(i = 0; i < duration; i++) {
					aux.duration--
					//If the process has finished it's execution, it's taken out of the queue
					if(aux.duration == 0){
						timeline.push({
							number: aux.number,
							isOverride: false
						})
						memoryTimeline.push(
							memory.slice()
						)
						time++
						turnaround += time - aux.startTime
						processesClone.splice(index, 1)	
						break
					}
					//If the process still needs to run but achieved the max time in the cpu per run, it's taken out and pushed into the end of the queue
					if((aux.duration > 0) && (i + 1 == duration)){
						timeline.push({
							number: aux.number,
							isOverride: false
						})
						timeline.push({
							number: aux.number,
							isOverride: true
						})
						memoryTimeline.push(
							memory.slice()
						)
						time++
						turnaround += time - aux.startTime
						var aux2 = processesClone.splice(index, 1)
						aux2[0].startTime = time
						time ++
						processesClone.push(aux2[0])
						processesClone.sort(compare)
						break
					//If the process still have to execute and still have time to use the cpu, just let it run untill it finishes or achieve the use limit
					} else {
						timeline.push({
							number: aux.number,
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
		turnaround = turnaround/processes.length
		return {
			timeline,
			memoryTimeline		
		}
	}


//TODO Return ints instead of strings
function compare(a, b) {
	if(a.deadline < b.deadline) {
		return -1
	}
	if(a.deadline > b.deadline) {
		return 1
	}
	if(a.deadline == b.deadline){
		if(a.startTime < b.startTime) {
			return -1
		}
		if(a.startTime > b.startTime) {
			return 1
		}
	}
	return 0
}

export default edf
