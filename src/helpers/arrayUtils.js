export const containsFieldWithValue = (arr, field, value) => {
	arr.forEach(element => {
		if(element[field] === value) {
			return element[field]
		}	
	})
	return null
}