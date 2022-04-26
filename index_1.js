// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

function printOwnProrerties(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			console.log(`${key} - ${obj[key]}`);
		}
	}
}

const object = {
	a: 'hello',
	b: 999
};

printOwnProrerties(object);
