import { CHANGE_INPUT } from "../actionTypes/actionTypes";

export function findLi(input, peopleArr){
	let val = input
	let peopleArray = peopleArr
	
	
}

export function changeInput(value){
	return{
		type: CHANGE_INPUT,
		payload: value
	}
}