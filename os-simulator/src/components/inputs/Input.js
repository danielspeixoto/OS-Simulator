import React from 'react'
import { Field } from 'redux-form'

const Input = ({name, children, className, type}) => {
	return (
		<div className="input">
			<label htmlFor={name}>{children}</label>
			<Field className={className}
			name={name}
			component="input"
			type={type}/>
		</div>
	)
}

export default Input