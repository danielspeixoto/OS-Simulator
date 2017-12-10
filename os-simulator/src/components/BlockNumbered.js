import React from 'react'
import { PROCESS_HEIGHT } from '../config/constants'

const BlockNumbered = (props) => {

	const style = {
		height: PROCESS_HEIGHT + "vh",
		width: PROCESS_HEIGHT + "vh",
		lineHeight:  PROCESS_HEIGHT + "vh"
	}
	
	return (
		<span className="block-numbered"
			style={style}>
			{props.children}
		</span>
	)
}

export default BlockNumbered