import React from 'react'
import classes from './ListSearch.module.css'

const ListSearch = props => {

	return(
		<ul className={classes.ListSearch}>
			{props.people.map((person, index) => {
				return(
					<li key={index}>
						<span>Имя: {person.name},Возраст: {person.age},Бюджет: {person.money} </span>
					</li>
				)
			})}
		</ul>
	)
}

export default ListSearch