export const stringObjToIntObj = obj => {
	Object.entries(obj).forEach(([key,value]) => {
		obj[key] = parseInt(value)
	})
	return obj
}