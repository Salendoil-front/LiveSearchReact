import React from 'react'
import classes from './Input.module.css'

const Input = props => {

	let type = props.type || 'text'

	return(
		<input className={classes.Input} type={type} value={props.value} />
	)
}

export default Input