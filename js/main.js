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
    features: createFeatures(), //должен быть массив случайной длины. ниже сделана попытка создать этот массив под названием mustArray (см строку 178)
    description: 'Очень хорошее помещение на все случаи жизни',
    photos: createPhotos(), //здесь нужно вставить массив строк случайной длины из значений, которые собраны к константе фотографии, этого не сделано
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


  //Создаём главный объект, это предложение жилья. Это объект.
  //Он состоит из трёх объектов, которые мы уже создали ранее.
  //Здесь ошибка, так данный объект из трёх объектов не формируется.
  //Нужно понять, где ошибка и как сформировать этот объект из трёх объектов, созданных ранее.


  const createProposal = () => {
    let proposal = {
        author: createAuthor(),
        offer: createOffer(),
        location: createLocation(),
    }

    return {
      proposal,
    }
  };

  console.log(createProposal());

let arrayProposal = [];

for ( let i = 0; i <= 8; i++) {
  arrayProposal[i] = createProposal();
  arrayProposal.push(arrayProposal[i]);
}

console.log (arrayProposal);


function createFeatures() {
  //функция по созданию массива строк случайной длины из значений:
  //wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
  //Назовём нужный нам массив mustArray
  //массив FEATURES у нас размещён ранее, в районе строки 89

  //находим случайное целое число из диапазона от 1 до 6. Это будет длина будущего массива
  let lengthArray = randomInteger(1,6);

  // с того момента мы начинаем создавать массив mustArray
  //Его длина уже определена, она равна lengthArray
  //Для начала объявим пустой массив

  let mustArray = [];

  //Делаем цикл, который сформирует массив mustArray нужной длины,
  //то есть длины, которая равна lengthArray,

  //Объявляем о создании временного массива для хранения номеров элементов
  let timeArray = [];;

  for (let i = 0; i <= (lengthArray - 1); i++) {

    //Примечание: мы начинаем с нуля, и продолжаем до длины массива минус 1, потому что так принято работать с циклами
    // и с номерами элементов массива и объекта. Первый элемент это нулевой элемент. Второй имеет номер 1 и т.д.

    //Находим случайное целое число из диапазона от 1 до 6. Если вычесть из этого числа единицу, то это будет номер элемента из
    //массива FEATURES, которое пойдёт в массив mustArray. В результате двух операций мы нашли номер элемента массива FEATURES
    //этот номер пойдёт во временный массив для хранения номеров.
    let num1 = randomInteger(1,6);
    let numberElement = num1 - 1;

    if (timeArray.includes(numberElement)) {
      num1 = randomInteger(1,6);
      numberElement = num1 - 1;
      i = i - 1;
    } else {
      // Добавляем этот номер элемента numberElement в этот массив.
      timeArray.push(numberElement);
    }
  }

  //формируем массив mustArray длины lengthArray и кладём туда значения из FEATURES
  // c номерами из массива timeArray

  for (let i = 0; i <= (lengthArray - 1); i++) {
    mustArray.push(FEATURES[timeArray[i]]);
  }
  console.log (mustArray);
  return mustArray;
};

function createPhotos() {
  let lengthArray = randomInteger(1,3);
  let mustArray1 = [];
  let timeArray1 = [];;

  for (let i = 0; i <= (lengthArray - 1); i++) {
    let num1 = randomInteger(1,3);
    let numberElement = num1 - 1;

    if (timeArray1.includes(numberElement)) {
      num1 = randomInteger(1,3);
      numberElement = num1 - 1;
      i = i - 1;
    } else {
      timeArray1.push(numberElement);
    }
  }

  for (let i = 0; i <= (lengthArray - 1); i++) {
    mustArray1.push(PHOTOS[timeArray1[i]]);
  }
  console.log (mustArray1);
  return mustArray1;
};
