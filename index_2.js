// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

function hasProperty(key, obj) {
  return key in obj;
}

const object = {
  b: 777,
  'name': 'Alina',
  1: 3030
}

console.log(hasProperty('1', object));
