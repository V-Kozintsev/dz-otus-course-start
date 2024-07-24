//1.Напишите функцию diff, которая получает в качестве параметров 2 числа и возвращает разницу между наибольшим и наименьшим.
function diff(num_1, num_2) {
  return Math.max(num_1, num_2) - Math.min(num_1, num_2);
}
console.log(diff(40, 22));

//2.Напишите функцию isWord, которая принимает на вход текстовую строку. Функция возвращает true, если строка состоит из одного слова и false, если из нескольких.
let message = "Hello world";
function isWord(str) {
  let newStr = str.split(" ");
  return newStr.length === 1;
}
console.log(isWord(message));

//*Напишите функцию pow(a, x), которая вернёт значение числа a, возведённого в степень x.
function pow(a, x) {
  return a ** x;
}
console.log(pow(5, 3));
