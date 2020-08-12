const initialState = {
	main:true,
	people: [
		{ name: 'Леха', age: 21, money: 2000 },
		{ name: 'Кирилл', age: 10, money: 500 },
		{ name: 'Нарек', age: 30, money: 20000 },
		{ name: 'Даня', age: 45, money: 200000 },
		{ name: 'Никита', age: 23, money: 2000000 },
		{ name: 'Польский', age: 22, money: 80000 },
		{ name: 'Джаха', age: 21, money: 100000 },
		{ name: 'Иск', age: 18, money: 20000 },
		{ name: 'Христина', age: 19, money: 25000 },
		{ name: 'Филин', age: 20, money: 30000 },
		{ name: 'Папа', age: 50, money: 2000000000 }
	]
}

export default function mainReducer(state = initialState, action){
	switch(action.type){
		default:
			return state
	}
}