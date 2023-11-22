//Завдання 1

// const { resolve } = require("path");

// Оригінальна функція, яка повертає Promise.
function fetchFakeData() {
  const fakeData = {
    name: "John",
    age: 30,
  };
  return Promise.resolve(fakeData);
}

// Створюємо асинхронну функцію getData, яка використовує await
// для обробки Promise.
async function getData() {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо await для очікування виконання Promise.
    let result = await fetchFakeData();
    // Дані виводимо в консоль після отримання їх з Promise.
    console.log(result);
  } catch (error) {
    // Використовуємо catch для обробки будь-яких помилок,
    //що виникли під час виконання Promise, та виводимо їх в консоль.
    console.log("Є помилки:", error);
  }
}
// Розкоментуйте після виконання завданння
console.log("Завдання: 1 ==============================");
// // Викликаємо нашу асинхронну функцію.
getData();
// console.log("Hello");

//Завдання 2
// Функція getRandomNumberAfterSeconds, яка приймає один параметр - число секунд.
function getRandomNumberAfterSeconds(seconds) {
  // Повертаємо новий Promise
  return new Promise((resolve) => {
    // Використовуємо setTimeout для симуляції асинхронної операції.
    // Після "seconds" секунд, Promise буде виконано з результатом виконання функціх Math.random
    setTimeout(() => {
      resolve(Math.random());
    }, seconds * 1000);
  });
}

// Асинхронна функція logRandomNumberAfterSeconds,
//яка приймає один параметр - число секунд
async function logRandomNumberAfterSeconds(seconds) {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо await, щоб "почекати", поки Promise від getRandomNumberAfterSeconds буде виконано.
    // В функцію потрібно передати в seconds в якості аргументу
    // Результат виконання функції присвоюється константі randomNumber.
    const randomNumber = await getRandomNumberAfterSeconds(seconds);
    // Виводимо отримане випадкове число в консоль
    console.log(randomNumber);
    // Якщо сталася помилка під час виконання Promise, виводимо її в консоль.
  } catch (error) {
    console.log("Є помилки:", error);
  }
}
// Розкоментуйте після виконання завданння
console.log("Завдання: 2 ==============================");
logRandomNumberAfterSeconds();

//Завдання 3
// Асинхронна функція getDataFromUrl, яка приймає один параметр - URL
async function getDataFromUrl(URL) {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо fetch для відправки GET-запиту на вказаний URL
    let answerFetch = await fetch(
      URL,
      {
        method: "GET",
      }
      // .then((res) => {
      //   console.log(res, res.ok);
      // })
    );
    // await console.log("==================");
    // await console.log(answerFetch);
    // Перевіряємо через властивість ok,
    //чи є відповідь вдалою якщо ні виводимо помилку в консоль
    if (answerFetch.ok) {
      let result = await answerFetch.json();
      console.log(result);
      // Конвертуємо відповідь у формат JSON
      // Виводимо дані в консоль
      // Виводимо помилки в консоль якщо вони є
    }
  } catch (error) {
    console.log("Є помилки:", error);
  }
}
// Розкоментуйте після виконання завданння
console.log("Завдання: 3 ==============================");
getDataFromUrl("https://swapi.dev/api/people/1");

//Завдання 4
// Асинхронна функція, яка приймає три параметри - URL,
//дані для відправки та токен авторизації,
//маємо аргумент url, data, authToken
async function postDataWithAuth(url, data, authToken) {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо fetch для відправки POST-запиту на вказаний URL
    // Вказуємо метод запиту POST в конфігурацію параметрів запиту
    let answerFetch = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },

      // Вказуємо заголовок (header) "Content-Type"
      // зі значенням "application/json"

      // Вказуємо заголовок Authorization в який передаємо authToken
      // Передаємо дані data в body, які перед цим перетворились в JSON
      body: JSON.stringify(data),
    });
    // Перевіряємо через властивість ok, чи є відповідь вдалою
    if (answerFetch.ok) {
      let result = await answerFetch.json();
      console.log(result);
    }
    // Конвертуємо відповідь у формат JSON

    // Виводимо відповідь в консоль
    // Виводимо помилки в консоль якщо вони є
  } catch (error) {
    console.log("Є помилки:", error);
  }
}
// Розкоментуйте після виконання завданння
console.log("Завдання: 4 ==============================");
postDataWithAuth(
  "https://petstore.swagger.io/v2/store/order",
  {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: "2023-07-23T19:28:06.229Z",
    status: "placed",
    complete: true,
  },
  "fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
);

//Завдання 5
// Створюємо асинхронний генератор asyncGenerator,
// який виробляє числа з паузою в одну секунду.
// "async function*" означає, що це асинхронний генератор.
async function* asyncGenerator() {
  // Змінна "i" ініціалізована значенням 0 і буде збільшуватися на 1
  // при кожній ітерації.
  let i = 0;
  // Цикл "while (true)" - це безкінечний цикл, який продовжуватиме
  // виконуватися, поки його не зупинять зовні.
  while (true) {
    // Чекаємо поки виконається проміс якому встановимо
    // затримку 1 секунду за допомогою setTimeout
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Віддаємо значення лічильника та збільшуємо його на один
    yield i;
    console.log(i);
    i++;
  }
}
// Використовуємо асинхронний генератор та записуємо його
// значення в константу gen

// Створюємо асинхрону функцію printFiveItems
async function printFiveItems() {
  const gen = await asyncGenerator();
  // Ключові слова "for await" використовуються для ітерації
  // по асинхронним ітерабельним об'єктам.
  for await (let result of gen) {
    // console.log(result);
    if (result === 5) break;
    console.log("printFiveItems() ---> value ", result);
  }

  // Перебираємо значення gen
  // Виводимо в консоль поточне значення

  // Умова "if (value === 4) break" зупиняє цикл після
  // виведення п'яти чисел (від 0 до 4).
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 5 ==============================");
printFiveItems();

//Завдання 6

// Функція, яка симулює витягування даних з бази даних
async function getDataFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з бази даних");
    }, 1000);
  });
}

// Функція, яка симулює отримання даних з API
async function getDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з API");
    }, 800);
  });
}

// Функція, яка симулює отримання даних з кешу
async function getDataFromCache() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з кешу");
    }, 600);
  });
}

// Оголошуємо асинхронну функцію-генератор з ім'ям gatherData
async function* gatherData() {
  // Використовуємо try для обробки помилок
  try {
    let dbData = await getDataFromDB();
    yield dbData;
    let apiData = await getDataFromAPI();
    yield apiData;
    let cacheData = await getDataFromCache();
    yield cacheData;

    // Викликаємо асинхронну функцію getDataFromDB() і чекаємо,
    // поки вона завершиться
    // Результат роботи функції зберігаємо у змінну dbData
    // yield використовується для того, щоб повернути значення dbData
    // Те саме робимо для асинхронної функції getDataFromAPI(),
    // результат зберігаємо в apiData
    // І знову для асинхронної функції getDataFromCache(),
    // результат зберігаємо в cacheData

    // Виводимо помилки в консоль якщо вони є
  } catch (error) {
    console.log("Є помилки:", error);
  }
}
// Створюємо асинхрону функцію displayData
async function displayData() {
  // Створюємо екземпляр генератора gatherData
  let geneRuttOr = await gatherData();
  // Три рази виводимо виводимо поточне значення
  // генератора в консоль
  result = await geneRuttOr.next();
  await console.log(result.value);
  result = await geneRuttOr.next();
  await console.log(result.value);
  result = await geneRuttOr.next();
  await console.log(result.value);
}
// Розкоментуйте після виконання завданння
console.log("Завдання: 6 ==============================");

displayData();

//Завдання 7
// Створюємо генератор countdownGenerator, який створює послідовність чисел від вказаного значення до 0, має параметр start
// Ініціюємо лічильник змінну count зі стартовим значенням параметра start

// Цикл, що триває доки лічильник більший або рівний 0
// Використовуємо ключове слово yield, щоб повернути поточне значення лічильника

// Зменшуємо лічильник на 1

// console.log("Завдання: 7 ==============================");
// Створюємо екземпляр генератора countdown з лічильниковм 5

// Запускаємо генератор та отримуємо перше значення яку записуємо в змінну nextValue
// Цикл while, що виводить значення з генератора, та працює поки не є генератор вичерпаним.
// Якщо властивість done == false, генератор ще має значення для повернення.

// Виводимо поточне значення
// Отримуємо наступне значення з генератора
