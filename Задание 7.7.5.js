// Задание 7.7.5
// Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий только уникальные числа, отсортированные в порядке возрастания.

function getSortArray(arr) {
	let newArray = []

	for (let i = 0; i < arr.length; i++) {
		if (!arr.includes(arr[i], i + 1)) {
			newArray.push(arr[i])
		}
	}

	return newArray.sort((a, b) => a - b)
}

let numbers = [5, 3, 6, 7, 3, 21, 567, 67, 756, 23, 567]
console.log(getSortArray(numbers))
console.log(numbers)
