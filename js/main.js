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

//первый объект в объявлении, называется author - описывает автора

////Нужно присвоить переменной userNumber случайное число от 1 до 8 с ведущим нулём, то есть 01 02 и т.д.
//Сначала найдём случайное значение от 1 до 8 и выведем его на экран.
min = 1;
max = 8;
let num = randomInteger(min,max);
alert(num);

//Теперь сделаем его числом с ведущим нулём

function zeroPad(num, places) {
  return String(num).padStart(places, '0')
}

let userNumber =  zeroPad(num, 2);

alert(userNumber);

let author;

author = {
  avatar: `img/avatars/${userNumber}.png`,  //почему-то выдаёт Object Object
};

alert (author.avatar);

// второй объект offer в главном объекте массива, содержит информацию об объявлении, состоит из 11 полей

//Заданее готовим переменую для хранения цены предложение, которая представляет собой целое случайное положительное число
min = 1;
max = 10000000;
let priceNumber = randomInteger(min,max);

alert (priceNumber);

//Заранее готовим переменную, в которою мы заложим одно из четырёх фиксированных значений: palace, flat, house или bungalow.
let typeHouse;

//Для начала создаём массив, в который запишем варианты

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow'
]
 alert(TYPE);

//Создадим функцию, которая будет определять вариант жилища
let createType = () => {
  let randomTYPEIndex = _.random(0, TYPE.length - 1);
  return {
    type: TYPE[randomTYPEIndex],
  };
};

//выводим результат работы функции в консоль.

alert(createType());
/*
let offer;

offer = {
  title: 'Предлагаем вам отличное жильё',
  address: 'location.x, location.y',
  price: priceNumber,
  type: typeHouse
};

alert (offer.title);
alert (offer.address);
alert (offer.price);
/*
/*
// второй объект offer в главном объекте массива, содержит информацию об объявлении, состоит из 11 полей






//Заранее готовим переменную в которую мы разместим число комнат
let min = 1;
let max = 20;
let roomsNumber = randomInteger(min,max);

//Заранее готовим переменную в которую мы разместим число гостей
let min = 1;
let max = 100;
let guestsNumber = randomInteger(min,max);

//Заранее готовим время заезда, это строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00
//Для начала создаём массив, в который запишем варианты времени заезда.

/*
const TIMEIN = [
  '12.00',
  '13.00',
  '14.00'
]

//Создадим функцию, которая будет вычислять время заезда

const createTime = () => {
  const randomTIMEINIndex = _.random(0, TIMEIN.length - 1);
  return {
    timeIn: TIMEIN [randomTIMEINIndex
    ],
  };
};


//создаём переменную для хранения одного из фиксированных значений  12:00, 13:00 или 14:00
// и передаём туда одно из этих значений, которое вычисляется функцией createTime ()
let timeIn = createTime ();

alert(timeIn);

//Для времени выезда всё по аналогии с временем заезда
const TIMEOUT = [
  '12.00',
  '13.00',
  '14.00'
]

//Функцию, которая будет вычислять время выезда, берём ту, которая вычисляла время заезда

let timeOut = createTime ();


/*

let offer = {
  title: 'Предлагаем место для временного проживания',
  address: 'location.x, location.y',
  price: priceNumber,
  type: typeHouse,
  rooms: roomsNumber,
  guests: guestsNumber,
  checkin: `${timeIn}`,
  checkout: `${timeOut}`,

}

*/

