import { CHANGE_INPUT } from "../actions/actionTypes/actionTypes"

const initialState = {
	input:'',
	people: [
		{ name: 'Леха', age: 21, money: 2000, class: true},
		{ name: 'Кирилл', age: 10, money: 45, class: true },
		{ name: 'Нарек', age: 30, money: 20000, class: true },
		{ name: 'Даня', age: 45, money: 200000, class: true },
		{ name: 'Никита', age: 23, money: 2000000, class: true },
		{ name: 'Польский', age: 22, money: 80000, class: true },
		{ name: 'Джаха', age: 21, money: 100000, class: true },
		{ name: 'Иск', age: 18, money: 20000, class: true },
		{ name: 'Христина', age: 19, money: 25000, class: true },
		{ name: 'Филин', age: 20, money: 30000, class: true },
		{ name: 'Папа', age: 50, money: 2000000000, class: true }
	],
}

export default function mainReducer(state = initialState, action){
	switch(action.type){
		case CHANGE_INPUT:
			return{
				...state, input: action.payload,
			}
		case 'ChangeClass':
			return{
				...state, people: action.payload
			}
		default:
			return state
	}
}