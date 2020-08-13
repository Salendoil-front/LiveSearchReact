import React from 'react'
import classes from './ListSearch.module.css'

const ListSearch = props => {

	return (
		<ul className={classes.ListSearch}>
			{
				props.people.length > 0
					? props.people.map((person, index) => {
						let cls = []
						if(!person.class){
							cls.push(classes.hide)
						} else{
							cls.pop('')
						}
						return (
							<li className={cls.join(' ')} key={index}>
								<span>Имя: {person.name},Возраст: {person.age},Бюджет: {person.money} </span>
							</li>
						)
					})
					: <li>Таких нет</li>
			}
		</ul>
	)
}

export default ListSearch