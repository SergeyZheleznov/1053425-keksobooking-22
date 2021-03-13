/* Функция, возвращающая случайное целое число из переданного диапазона включительно.*/
//https://habr.com/ru/company/ruvds/blog/534108/
console.log('я подключил скрипт');

function randomInteger(min,max) {
  if (min > max) {
    console.log('Произошла ошибка при вводе диапазона, минимальное значение больше максимального, введете диапазон правильно');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let min = 10;
let max = 20;
let res = randomInteger(10,20);

console.log(res);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function randomDig(min, max, numbersAfterComma) {
  res2 = Math.random() * (max - min) + min;
  return res2.toFixed(numbersAfterComma);
}

let numbersAfterComma = 3;
let res2;
let res3 = randomDig(12, 18, 3);

console.log(res3);

//первый объект в объявлении, называется author - описывает автора

////Нужно присвоить переменной userNumber случайное число от 1 до 8 с ведущим нулём, то есть 01 02 и т.д.

const createAuthor = () => {

  //Сначала найдём случайное значение от 1 до 8 и выведем его в консоль.

  let num = randomInteger(1,8);
  console.log(num);

  //Теперь сделаем его числом с ведущим нулём

  function zeroPad(num, places) {
    return String(num).padStart(places, '0')
  }
  let userNumber =  zeroPad(num, 2);

  //выводим в консоль число с ведущим нулём
  console.log(userNumber);

  let author;

  author = {
    avatar: `img/avatars/${userNumber}.png`,
  };

  return {
    author
  };
};

console.log(createAuthor());

// второй объект offer в главном объекте массива, содержит информацию об объявлении, состоит из 11 полей


//Здесь мы создали массив из возможных типов жилья, потом написали фунцию, которая случайным образом
//выбирает из этих типов один тип жилья, и ппотом выдали в консоль результат работы этой фунции
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const TIMEIN = [
  '12.00',
  '13.00',
  '14.00',
];

const TIMEOUT = [
  '12.00',
  '13.00',
  '14.00',
]

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

const createOffer = () => {

  let priceNumber = randomInteger(1,1000000);
  let roomsNumber = randomInteger(1,20);
  let guestsNumber = randomInteger(1,100);

  const getRandomArrayElement = (elements) => {
    return elements[_.random(0, elements.length - 1)];
  };

  return {
    title: 'Предлагаем вам отличное жильё',
    address: 'location.x, location.y',
    price: priceNumber,
    type: getRandomArrayElement(TYPES),
    rooms: roomsNumber,
    guests: guestsNumber,
    checkin: getRandomArrayElement(TIMEIN),
    checkout: getRandomArrayElement(TIMEOUT),
    features: getRandomArrayElement(FEATURES), //должен быть массив случайной длины. ниже сделана попытка создать этот массив под названием mustArray (см строку 178)
    description: 'Очень хорошее помещение на все случаи жизни',
    photos: 'массив строк случайной длины', //здесь нужно вставить массив строк случайной длины из значений, которые собраны к константе фотографии, этого не сделано
  };
};

console.log (
  createOffer()
);

const createLocation = () => {
  min = 35.65000;
  max = 35.70000;
  numbersAfterComma = 5;
  res2;
  res3 = randomDig(min, max, numbersAfterComma);

  min = 139.70000;
  max = 139.80000;
  numbersAfterComma = 5;
  res2;
  res4 = randomDig(min, max, numbersAfterComma);

    return {
      x: res3,
      y: res4,
  };
};

console.log(
  createLocation()
  );

/*
  //Создаём главный объект, это предложение жилья. Это объект.
  //Он состоит из трёх объектов, которые мы уже создали ранее.
  //Здесь ошибка, так данный объект из трёх объектов не формируется.
  //Нужно понять, где ошибка и как сформировать этот объект из трёх объектов, созданных ранее.

  const createProposal = () => {
    let proposal;

    return {
      proposal = {
        author: createAuthor(),
        offer: createOffer(),
        location: createLocation(),
      }
    };
  };

  console.log(createProposal);

*/

  //функция по созданию массива строк случайной длины из значений:
  //wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
  //Назовём нужный нам массив mustArray
  //массив FEATURES у нас размещён ранее, в районе строки 89

  console.log (FEATURES);

  //находим случайное целое число из диапазона от 1 до 6. Это будет длина будущего массива
  let lengthArray = 3;
  //randomInteger(1,6); временно, для отладки, даём длине будущего массива постоянную длину, равную трём
  console.log (lengthArray);

  //Объявляем о создании массива must Array

  let mustArray = [];

  //Делаем цикл, который сформирует массив mustArray нужной длины,
  //то есть длины, которая равна lengthArray

  //for (let i = 1; i <= lengthArray; i++) {



  //Находим случайное целое число из диапазона от 1 до 6. Это будет номер элемента из
  //массива FEATURES, которое пойдёт в массив mustArray

  let numberElement1 = randomInteger(1,6);

  console.log (numberElement1)
  // Кладём этот номер по временный массив для номеров элементов.

  let timeArray = [
    numberElement1,
  ]
  console.log (timeArray);

  //Находим случайное число из диапазона от 1 до 6
  let numberElement2 = randomInteger(1,6);
  console.log (numberElement2);

  //Проверяем, совпадает первый номер со вторым, если да, то снова проводим поиск случайного числа.
  //если не совпадает, то кладём этот номер во временный массив для номеров элементов.

  //Тестирование показало, что иногда здесь выскакивает массив timeArray из одного элемента - нужно понять,
  //почему так происходит и исправить.

  if (numberElement1 === numberElement2) {
    numberElement2 = randomInteger(1,6);
  } else {
    timeArray = [
      numberElement1,
      numberElement2,
    ]
  }

  console.log(timeArray);
  //Находим случайное число под номером 3 из диапазона от 1 до 6
  let numberElement3 = randomInteger(1,6);
  console.log (numberElement3);

  //Проверяем, совпадает третий номер со вторым или третьим, если да, то снова проводим поиск случайного числа.
  //если не совпадает, то кладём этот номер во временный массив для номеров элементов.

  if (numberElement3 === numberElement1 && numberElement3 === numberElement2) {
    numberElement3 = randomInteger(1,6);
  } else {
    timeArray = [
      numberElement1,
      numberElement2,
      numberElement3,
    ]
  }
  console.log(timeArray);

  //формируем массив mustArray случайной длины из строк со значениями,
  //wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

mustArray = [
  FEATURES[numberElement1],
  FEATURES[numberElement2],
  FEATURES[numberElement3],
]

console.log(mustArray);

