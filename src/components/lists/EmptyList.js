import React from 'react'

const EmptyList = (props) => {

	if(!props.display) {
		return (<div></div>)
	}

	return (
		<div className="empty-list">
			{props.children}
		</div>
	)
}

export default EmptyList;