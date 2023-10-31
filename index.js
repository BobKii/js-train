// Завдання 1

/**
 * Функція `filterStudentsByGrade` фільтрує студентів за рівнем оцінки та виводить інформацію про них.
 *
 *  grade - Рівень оцінки для фільтрації.
 */
function filterStudentsByGrade(students, grade) {
  // Виведемо в консоль критичну помилку з текстом "Якщо ви бачите це повідомлення, то завдання 1 виконано не правильно"
  // Очищення консолі перед виведенням
  // Виведемо в консоль повідомлення для відстеження роботи програми з текстом:
  //"Завдання: 1 =============================="
  // Відфільтруємо тільки тих студентів оцінка яких співпадає з grade
  // За допомогою перебору масиву виведемо повідомлення для відстеження
  //роботи програми з іменем кожного студента, який має необхідну оцінку
  console.error(
    "Якщо ви бачите це повідомлення, то завдання 1 виконано не правильно"
  );
  console.clear();
  console.log("Завдання: 1 ==============================");
  for (let item of students) {
    if (item.grade === grade) {
      console.log(`Вибрано --->  ${item.name}`);
    }
  }
}

// Виклик функції для фільтрації студентів з рівнем "A"
filterStudentsByGrade(
  [
    { name: "John", grade: "A" },
    { name: "Kate", grade: "B" },
    { name: "Mike", grade: "A" },
    { name: "Anna", grade: "C" },
    { name: "Tom", grade: "B" },
  ],
  "A"
);

// Завдання 2
/**
 * Функція `logArrayElements` приймає масив та виводить кожен його елемент в консоль.
 *
 *  arr - Масив для обробки.
 */
function logArrayElements(arr) {
  // Перевіряємо, чи arr є масивом.
  // Якщо arr не є масивом, виведеме в консоль критичну помилоку з текстом "Аргумент має бути масивом!"
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Перебираємо кожен елемент масиву.
  // Виводимо в консоль поточний елемент масиву та його індекс в форматі Елемент <індекс>: <значення>
  if (Array.isArray(arr)) {
    for (let item in arr) {
      console.log(`Елемент --> ${item}: ${arr[item]}`);
    }
  } else {
    console.log("Аргумент має бути масивом!");
    return null;
  }
}

// Перевірка
console.log("Завдання: 2 ==============================");
logArrayElements([1, 2, 3, "a", "b", "c"]);
// Виведе в консоль:
// Елемент 0: 1
// Елемент 1: 2
// Елемент 2: 3
// Елемент 3: a
// Елемент 4: b
// Елемент 5: c

// Завдання 3
/**
 * Функція `warnAboutMaxArrayLength` перевіряє, чи перевищує довжина масиву вказане максимальне значення.
 *
 *  arr - Масив для перевірки.
 *  maxLength - Максимальна довжина масиву.
 */
function warnAboutMaxArrayLength(arr, maxLength) {
  // Перевіряємо, чи arr є масивом, а maxLength є числом.
  // Якщо arr не є масивом або maxLength не є числом, виведеме в консоль
  // критичну помилоку з текстом: "Перший аргумент має бути масивом, другий аргумент має бути числом!".
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Перевіряємо, чи довжина масиву перевищує максимальну допустиму довжину.

  // Якщо довжина масиву перевищує максимальну, виводимо попередження
  //про потенційну проблеми з текстом: "Увага! Довжина масиву перевищує максимально допустиму!".

  // Якщо довжина масиву не перевищує максимальну, виведеме в консоль корисне повідомлення
  //з текстом: "Довжина масиву не перевищує максимально допустиму.".

  if (Array.isArray(arr) && typeof maxLength === "number") {
    if (arr.length > maxLength) {
      console.warn("Увага! Довжина масиву перевищує максимально допустиму!");
    } else {
      console.log("Довжина масиву не перевищує максимально допустиму.");
    }
  } else {
    console.error(
      "Перший аргумент має бути масивом, другий аргумент має бути числом!"
    );
    return null;
  }
}

// Перевірка
console.log("Завдання: 3 ==============================");
warnAboutMaxArrayLength([1, 2, 3, 4, 5], 3);
// Виведе в консоль попередження: "Увага! Довжина масиву перевищує максимально допустиму!".

// Завдання 4
/**
 * Функція `compareArrays` приймає два масиви чисел як аргументи і порівнює їх.
 * Вона використовує `console.assert()` для перевірки того, чи обидва масиви є однаковими.
 *
 *  arr1 - Перший масив чисел.
 *  arr2 - Другий масив чисел.
 */
function compareArrays(arr1, arr2) {
  // Сортуємо масиви за зростанням.
  // Оскільки напряму порівняти масиви за допомогою оператора === не можно, перетворимо ії в json і порівняємо
  // Використовуємо `console.assert()`, щоб вивести помилку, якщо масиви не однакові.
  console.assert(
    JSON.stringify(arr1.sort((a, b) => a - b)) ===
      JSON.stringify(arr2.sort((a, b) => a - b)),
    "Масиви не однакові"
  );
}

console.log("Завдання: 4 ==============================");
compareArrays([1, 2, 3, 4, 5], [1, 2, 3, 4]);
// Виведе "Assertion failed: Масиви не однакові!"

// Завдання 5
/**
 * Функція `buildMatrix` створює двовимірний масив (матрицю) розміром size x size,
 * заповнює її випадковими числами від 0 до 9, а потім виводить матрицю в консоль
 *
 *  size - розмір матриці.
 *  Повернеться згенерована матриця.
 */
function buildMatrix(size) {
  // Перевіряємо, чи size є числом.
  // Якщо size не є числом, виведеме в консоль критичну помилку з текстом "Аргумент має бути числом!".
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Створюємо порожній масив який буде нашою матрицею.
  // Цикл для заповнення рядків матриці, лічильник і має бути від 0 до розміру матриці.
  // Створюємо порожній масив, який буде рядком матриці.
  // Цикл всередені циклу для заповнення колонок матриці,лічильник j має бути від 0 до розміру матриці.
  // Генеруємо випадкове число від 0 до 9 округляємо його до меншого цілого, і додаємо його до рядка.
  // Додаємо рядок до матриці.
  // Виводимо матрицю в консоль за допомогою як таблицю.
  // Повертаємо створену матрицю.

  // //////------------------   1 variant

  // if (typeof size === "number") {
  //   let myMatrix = [];
  //   // let myRowMatrix = [];

  //   // let myRowMatrix = [];
  //   // console.log(Math.random() * 9);
  //   for (let i = 0; i < size; i++) {
  //     this.myRowMatrix = new Array();
  //     // myMatrix.push(Math.floor(Math.random() * 10));
  //     // console.log(myMatrix);
  //     for (let j = 0; j < size; j++) {
  //       myRowMatrix.push(Math.floor(Math.random() * 10));
  //       // console.log(myRowMatrix);
  //       //  this.coordsSquare.push(square);
  //     }
  //     //  this.objectsArr.push(coordsSquare); //добавление в него
  //     this.myMatrix.push(myRowMatrix); //добавление в него
  //   }
  //   console.log(myMatrix, myRowMatrix);
  //   console.table(myMatrix);
  // } else {
  //   console.error("Аргумент має бути числом!");
  //   return null;
  // }

  /////////// - 2 variant

  // if (typeof size === "number") {
  //   let myMatrix = [];
  //   this.myMatrix[0] = [];
  //   let myRowMatrix = [];

  //   // console.log(Math.random() * 9);
  //   for (let i = 0; i < size; i++) {
  //     for (let j = 0; j < size; j++) {
  //       let randomResult = Math.floor(Math.random() * 10);
  //       this.myRowMatrix.push(randomResult);
  //       this.myMatrix[(i, j)] = randomResult; //добавление в него
  //       // console.log(myRowMatrix);
  //       //  this.coordsSquare.push(square);
  //     }
  //   }
  //   console.log(myMatrix, myRowMatrix);
  //   console.table(myMatrix);
  // } else {
  //   console.error("Аргумент має бути числом!");
  //   return null;
  // }

  //////------------------   3 variant

  if (typeof size === "number") {
    let myRowMatrix = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        myRowMatrix.push(Math.floor(Math.random() * 10));
      }
    }
    console.table(myRowMatrix);
  } else {
    console.error("Аргумент має бути числом!");
    return null;
  }
}

console.log("Завдання: 5 ==============================");
buildMatrix(5);
// Виведе в консоль матрицю розміром 5x5, заповнену випадковими числами від 0 до 9.

// Завдання 6
/**
 * Функція `traceBackward` виводить числа від заданого до 1 у зворотному порядку,
 * використовуючи рекурсію.
 *
 *  n - стартове число.
 */
function traceBackward(n) {
  // Виводимо поточне число n.
  // Якщо n є більше 1, викликаємо функцію traceBackward знову з аргументом n - 1.
  // Виведемо стек викликів, коли досягнемо 1.
  while (n > 1) {
    console.log(`n =  --> ${n}`);
    n -= 1;
    if (n > 1) {
      traceBackward(n);
    } else {
      const foo = () => console.trace("traceBackward");
      const bar = () => foo();
      bar();
      continue;
    }
    return;
  }
}

console.log("Завдання: 6 ==============================");
traceBackward(5);
// Виведе в консоль числа від 5 до 1, а потім виведе стек викликів.

// Завдання 7
/**
 * Функція `displayGroupedInfo` виводить інформацію про групу студентів в консоль, організовуючи дані у групи.
 * students - масив об'єктів-студентів.
 */
function displayGroupedInfo(students) {
  // Переберомо об'єкт за допомого for of
  // Створимо групу з повідомленням `Студент: ${student.name}`
  // Виведемо корисне повідомлення з текстом `Вік: ${student.age}`
  // Виведемо корисне повідомлення з текстом `Предмет: ${student.subject}`
  for (let item of students) {
    console.group(`Студент: ${item.name}`);
    console.info(`Вік: ${item.age}`);
    console.info(`Предмет: ${item.subject}`);
    console.groupEnd();
    // <p></p>;
  }
  // Закриємо групу
}

console.log("Завдання: 7 ==============================");
displayGroupedInfo([
  { name: "Alex", age: 22, subject: "Math" },
  { name: "Max", age: 23, subject: "Physics" },
  { name: "Anna", age: 21, subject: "Chemistry" },
]);
// Виведе в консоль:
// Студент: Alex
//   Вік: 22
//   Предмет: Math
// Студент: Max
//   Вік: 23
//   Предмет: Physics
// Студент: Anna
//   Вік: 21
//   Предмет: Chemistry

// Завдання 8
/**
 * Функція `validateUserInput` перевіряє коректність введених користувачем даних.
 * Для цього використовуємо `console.warn()` та `console.assert()`.
 *
 *  userInput - об'єкт з введеними користувачем даними.
 */
function validateUserInput(userInput) {
  // Перевіремо умову наявності імені користувача, якщо воно відсутнє виводимо "Помилка: ім'я користувача відсутнє!"
  // Перевіремо умову наявності паролю, якщо він відсутній виводимо "Помилка: пароль відсутній!"
  // Перевірка довжини паролю чи менше вона ніж 8,якщо ні виводимо повідомлення про потенційну проблему
  // з текстом "Попередження: пароль має бути довшим за 8 символів!"
  console.assert(typeof userInput === "object", "Ту-Ду-ду-дуууМ");
  if (userInput.username.length > 0) {
    if (userInput.password.length > 0) {
      if (userInput.password.length < 8) {
        console.warn("Попередження: пароль має бути довшим за 8 символів!");
      }
    } else {
      console.warn("Помилка: пароль відсутній!");
    }
  } else {
    console.warn("Помилка: ім'я користувача відсутнє!");
  }
}

console.log("Завдання: 8 ==============================");
validateUserInput({ username: "alex", password: "pass" });
// Виведе в консоль:
// Попередження: пароль має бути довшим за 8 символів!

// Завдання 9
/**
 * Функція `calculateTotalPrice` обчислює загальну вартість товарів та логує час виконання.
 *
 * products - Масив об'єктів товарів з властивостями `price` та `title`.
 */
function calculateTotalPrice(products) {
  // Початок вимірювання часу
  // Створення змінної total яка буде нашою загальную ціною, початкове значення нуль
  // Перебираємо кожен об'єкт товару та додаємо ціну товару до загальної вартості
  // Виведення загальної вартості товарів у форматі "Загальна вартість товарів:", total
  // Зупинка вимірювання та виведення часу
  let counterTime = "Timer";
  console.time(counterTime);
  let total = 0;
  for (let item of products) {
    total += item.price;
  }
  console.log(`Загальна вартість товарів: ${total}`);
  console.timeEnd(counterTime);
}

console.log("Завдання: 9 ==============================");
const products = [
  { title: "Телефон", price: 1000 },
  { title: "Ноутбук", price: 2000 },
  { title: "Планшет", price: 500 },
];

calculateTotalPrice(products);
// Виведе
// Загальна вартість товарів: 3500
// calculateTotalPrice: 0.994ms (час може відрізнятись)

// Завдання 10
/**
 * Функція `countVowelsAndConsonants` пораховує кількість голосних і приголосних літер у слові.
 *
 *  word - слово, для якого потрібно порахувати кількість літер.
 */
function countVowelsAndConsonants(word) {
  // Створюємо рядок де будуть всі голосні "aeiou"
  // Перебираємо кожну літеру у слові за допомогою for of
  // Перетворюємо літеру на малу літеру для порівняння
  // Перевіряємо, чи є літера в нашому рядку з голосними, якщо так, то виводимио лічильник голосних, інакше приголосних
  // Скидаємо лічильники
  let golosni = "aeiou";
  let golosniChart = "Голосні";
  let prigolosniChart = "Приголосні";

  for (let i = 0; i < word.length; i++) {
    // console.log(word.charAt(i).toLowerCase());
    if (golosni.indexOf(word.charAt(i).toLowerCase()) !== -1) {
      console.count(golosniChart);
    } else {
      console.count(prigolosniChart);
    }
  }
  console.countReset(prigolosniChart);
  console.countReset(golosniChart);
}
console.log("Завдання: 10 ==============================");
countVowelsAndConsonants("HelloWorld!");
