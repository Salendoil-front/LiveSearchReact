import React from 'react'
import classes from './Form.module.css'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'

class Form extends React.Component {
	render(){
		return(
			<form className={classes.Form}>
				<Input  />
				<Button text="lel" />
			</form>
		)
	}
}

export default Form