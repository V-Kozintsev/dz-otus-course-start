//1.Вывести в консоль сумму всех целых чисел от 50 до 100.
let num = 100;
for (let i = 50; i <= num; i++) {
  console.log(i);
}

//2.Вывести в консоль таблицу умножения на 7.
const number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

//*Запросить у пользователя ввод числа N. Вывести в консоль среднее арифметическое всех нечётных чисел от 1 до N
const N = +prompt();
let sum = 0;

for (let i = 1; i < N; i++) {
  sum += i;
}
console.log(Math.trunc(sum / N));
