/* Функция, возвращающая случайное целое число из переданного диапазона включительно.*/
//https://habr.com/ru/company/ruvds/blog/534108/

function randomInteger(min,max) {
  if (min > max) {
    alert('Произошла ошибка при вводе диапазона, минимальное значение больше максимального, введете диапазон правильно');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//передаём фукцию наружу из модуля, для использования теми модулями, которые её захотят экспортировать
//для использования нужно указать значения, например, randomInteger(1, 40)
//это будет означать - найти случайное целое число из диапазона от 1 до 40

export {randomInteger};

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

let res2;
function randomDig(min, max, numbersAfterComma) {
  res2 = Math.random() * (max - min) + min;
  return res2.toFixed(numbersAfterComma);
}

export {randomDig};

//Функция, создающая из любого числа другое число - число с ведущим нулём, то есть из 3 создаём 03
//Здесь num это целое число из диапазона, создаётся вызовом функции randomInteger(min, max),
//a places - это общее число цифр в числе с ведущим нулём, то есть если places = 2, то число будет 03 (две цифры)

function zeroPad(num, places) {
  return String(num).padStart(places, '0')
}

export {zeroPad};
