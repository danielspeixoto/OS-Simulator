import React from 'react'

const Memory = (props) => {

	var index = -1
	const blocks = props.memory.map(memory => {
		var content = ''
		if(memory != null) {
			content = memory
		}
		return (
			<div key={++index} className='memory-block'>
				<span>{index}</span>
				<div>{content}</div>
			</div>
		)
	})

	return (
		<div className={`wrap-contents ${props.className}`}>
			{blocks}
		</div>
	);
  
}

export default Memory