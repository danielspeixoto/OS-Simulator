import React from 'react'
import BlockNumbered from './BlockNumbered'

const ColumnOfNumbers = (props) => {

	const numbers = []

	for(let i = 0; i < props.size; i++) {
		numbers.push(
			<BlockNumbered key={i}>{i + 1}</BlockNumbered>
		)
	}
	
	return (
		<div className='column-of-numbers'>
			{numbers}
		</div>
	)
}

export default ColumnOfNumbers