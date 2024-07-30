//1.Даны длины трёх сторон треугольника. Определить,является ли треугольник прямоугольным.
const a = 7;
const b = 7;
const c = 49;
function definingParties(a, b, c) {
  let sorting = [a, b, c].sort((x, y) => x - y);
  if (
    Math.pow(sorting[0], 2) + Math.pow(sorting[1], 2) ==
    Math.pow(sorting[2], 2)
  ) {
    console.log("Треугольник прямоугольный");
  } else {
    console.log("Треугольник не прямоугольный");
  }
}
definingParties(a, c, b);

//2.Пользователь вводит число R. Написать программу,которая выведет в консоль длину окружности и площадь круга с радиусом R.
// L = 2πr  S = πr²
const input = prompt("Введи число");
let l;
let s;
function lengthAreaCircle(data) {
  l = 2 * Math.PI * data;
  s = Math.PI * Math.pow(data, 2);
}
lengthAreaCircle(input);
console.log(l);
console.log(s);

//*Пользователь вводит числа a, b и c. Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.
const inputA = prompt("Введите число a")
const inputB = prompt("Введите число b")
const inputC = prompt("Введите число c")






