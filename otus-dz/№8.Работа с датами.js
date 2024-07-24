//1.Запросите у пользователя дату в формате ДД.ММ.ГГГГ. Напишите программу, выводящую день недели по введённой дате.
const input = prompt("ДД.ММ.ГГГГ");
const [day, month, year] = input.split(".");
const date = new Date(`${year}.${month}.${day}`);
const options = {
  weekday: "long",
};
const dayOfWeek = date.toLocaleString("ru-RU", options);
alert(dayOfWeek);

//2.Написать программу, которая выводит в консоль количество минут, прошедшее с начала сегодняшнего дня.
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const minutesPassed = hours * 60 + minutes;
console.log(`С начала сегодняшнего дня прошло ${minutesPassed} минут.`);

//3.*В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ. Написать программу, которая определяет более молодого пользователя.

const viktor = "18.02.1991";
const elena = "17.05.1999";

function whoIsYounger(value) {
  let [day, month, year] = value.split(".");
  return new Date(year, month - 1, day);
}
const user_1 = whoIsYounger(viktor);
const user_2 = whoIsYounger(elena);
if (user_1 < user_2) {
  console.log("user_2 моложе user_1");
} else {
  console.log("user_1 моложе user_2");
}
