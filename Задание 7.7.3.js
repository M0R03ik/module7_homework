// Задание 7.7.3
// Есть массив объектов, представляющих собой пользователей, каждый из которых имеет свойство age (возраст).
// Создайте новый массив, содержащий только тех пользователей, чей возраст больше или равен 18.
// Затем создайте новый массив, содержащий только свойства name (имя) каждого пользователя.

let users = [
	{ name: 'Bob', age: 50 },
	{ name: 'Julia', age: 10 },
	{ name: 'Dean', age: 33 },
	{ name: 'Sam', age: 30 },
	{ name: 'Jack', age: 17 },
	{ name: 'Derek', age: 18 },
]
let adultUsers = users.filter(user => user.age >= 18)
let namesUsers = adultUsers.map(user => user.name)
console.log(adultUsers)
console.log(namesUsers)
