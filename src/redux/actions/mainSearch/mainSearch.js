export function findLi(value, peopleArr) {
	return dispatch => {
		let val = value.toLowerCase().trim()
		let peopleArray = peopleArr
		if(val !== ''){
			peopleArray.forEach((person) => {
				if(person.name.trim().toLowerCase().search(val) === -1 && String(person.age).trim().search(val) === -1 && String(person.money).trim().search(val) === -1){
					person.class = false
				} else{
					person.class = true
				}
			})
		} else{
			peopleArray.forEach(person => {
				person.class = true
			})
		}
		dispatch(changeClass(peopleArray))
	}
}

export function changeClass (people){
	return{
		type: 'ChangeClass',
		payload: people
	}
}
