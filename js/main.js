/* Функция, возвращающая случайное целое число из переданного диапазона включительно.*/
//https://habr.com/ru/company/ruvds/blog/534108/
alert('я подключил скрипт');

function randomInteger(min,max) {
  if (min > max) {
    alert('Произошла ошибка при вводе диапазона, минимальное значение больше максимального, введете диапазон правильно');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let min = 10;
let max = 20;
let res = randomInteger(min,max);

alert(res);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function randomDig(min, max, numbersAfterComma) {
  res2 = Math.random() * (max - min) + min;
  return res2.toFixed(numbersAfterComma);
}

min = 12;
max = 18;
let numbersAfterComma = 3;
let res2;
let res3 = randomDig(min, max, numbersAfterComma);

alert(res3);
