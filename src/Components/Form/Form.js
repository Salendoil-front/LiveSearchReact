import React from 'react'
import classes from './Form.module.css'
import Input from '../../UI/Input/Input'

class Form extends React.Component {
	render(){
		return(
			<form className={classes.Form}>
				<Input  />
			</form>
		)
	}
}

export default Form