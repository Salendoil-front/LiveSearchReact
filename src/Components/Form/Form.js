import React from 'react'
import classes from './Form.module.css'
import Input from '../../UI/Input/Input'

 const Form = props => {
	
		return(
			<form className={classes.Form}>
				<Input onChange={props.onChange} />
			</form>
		)
}

export default Form