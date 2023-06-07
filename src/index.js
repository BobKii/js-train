//Задача 1: Напишіть функцію, яка перевіряє, чи є задане число парним. Використовуйте оператор залишку від ділення для визначення, чи є число парним.

function isEvenNumber(num) {
  // Перевірити, чи число num є парним
  // Повернути результат перевірки (true або false) як результат функції
  return num % 2 === 0;
}

console.log("isEvenNumber(10)", isEvenNumber(10)); // Виведе: true
console.log("isEvenNumber(7)", isEvenNumber(7)); // Виведе: false

//Задача 2: Напишіть функцію, яка обчислює суму чисел від 1 до заданого числа. Використовуйте цикл для послідовного додавання чисел.

function calculateSum(n) {
  // Ініціалізувати змінну sum зі значенням 0
  let sum = 0;

  // Запустити цикл для змінної i від 1 до n
  for (let i = 1; i <= n; i++) {
    // Додати поточне значення i до змінної sum
    sum += i;
  }

  // Повернути значення змінної sum
  return sum;
}

console.log("calculateSum(5)", calculateSum(5)); // Виведе: 15
console.log("calculateSum(10)", calculateSum(10)); // Виведе: 55

//Задача 3: Напишіть функцію, яка перевіряє, чи є задане число простим(ділиться без остачі тільки на себе та на 1). Використовуйте цикл для перевірки ділення числа на всі можливі дільники.

function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("isPrimeNumber(7)", isPrimeNumber(7)); // Виведе: true
console.log("isPrimeNumber(10)", isPrimeNumber(10)); // Виведе: false

//Задача 4: Напишіть функцію, яка перевіряє, чи є задане число додатним. Використовуйте умовний оператор для перевірки числа.

function isPositiveNumber(num) {
  return num > 0;
}

console.log("isPositiveNumber(5)", isPositiveNumber(5)); // Виведе: true
console.log("isPositiveNumber(-2)", isPositiveNumber(-2)); // Виведе: false

//Задача 5: Напишіть функцію, яка перевіряє, чи є заданий рядок пустим. Використовуйте умовний оператор та властивість довжини рядка для перевірки.

function isEmptyString(str) {
  return str === "";
}

console.log('isEmptyString("")', isEmptyString("")); // Виведе: true
console.log('isEmptyString("Hello")', isEmptyString("Hello")); // Виведе: false

//Задача 6: Напишіть функцію checkDataType, яка приймає параметр value і перевіряє його тип даних. Функція повинна використовувати оператор typeof для визначення типу значення.
// Виведіть в консоль повідомлення з результатом перевірки типу, наприклад, Значення "hello" має тип "string"

function checkDataType(value) {
  const dataType = typeof value;
  console.log(`Значення "${value}" має тип "${dataType}".`);
}

// Приклади виклику функції
console.log("checkDataType(42)", checkDataType(42)); // Виведе: Значення "42" має тип "number".
console.log("checkDataType('Hello')", checkDataType("Hello")); // Виведе: Значення "Hello" має тип "string".
console.log("checkDataType(true)", checkDataType(true)); // Виведе: Значення "true" має тип "boolean".
console.log("checkDataType(undefined)", checkDataType(undefined)); // Виведе: Значення "undefined" має тип "undefined".

//Задача 6: Напишіть функцію findMax, яка приймає два числа num1 і num2 і повертає більше з них. Використовуйте умовний оператор if та оператор порівняння для визначення більшого числа.

function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Приклади виклику функції
console.log("findMax(10, 5)", findMax(10, 5)); // Виведе: 10
console.log("findMax(8,12)", findMax(8, 12)); // Виведе: 12
console.log("findMax(7, 7)", findMax(7, 7)); // Виведе: 7

//Задача 7:  Напишіть функцію getUserStatus, яка приймає вік користувача age і повертає рядок, що вказує на його статус.
// Якщо вік менше 18 років, функція повертає "Неповнолітній". Якщо вік від 18 до 65 років, функція повертає "Дорослий". Якщо вік більше або дорівнює 65 рокам, функція повертає "Пенсіонер".
// Використовуйте умовний оператор if, else if та оператори порівняння для визначення статусу користувача.

function getUserStatus(age) {
  if (age < 18) {
    return "Неповнолітній";
  } else if (age >= 18 && age < 65) {
    return "Дорослий";
  } else {
    return "Пенсіонер";
  }
}

// Приклади виклику функції
console.log("getUserStatus(15)", getUserStatus(15)); // Виведе: "Неповнолітній"
console.log("getUserStatus(25)", getUserStatus(25)); // Виведе: "Дорослий"
console.log("getUserStatus(70)", getUserStatus(70)); // Виведе: "Пенсіонер"

//Задача 8:  Напишіть функцію getDayOfWeek, яка приймає номер дня тижня dayNumber (1-7) і повертає рядок, що відповідає цьому дню тижня.
// Використовуйте конструкцію switch case для визначення дня тижня за його номером.

function getDayOfWeek(dayNumber) {
  let day;

  switch (dayNumber) {
    case 1:
      day = "Понеділок";
      break;
    case 2:
      day = "Вівторок";
      break;
    case 3:
      day = "Середа";
      break;
    case 4:
      day = "Четвер";
      break;
    case 5:
      day = "П'ятниця";
      break;
    case 6:
      day = "Субота";
      break;
    case 7:
      day = "Неділя";
      break;
    default:
      day = "Невірний номер дня";
  }

  return day;
}

// Приклади виклику функції
console.log("getDayOfWeek(1)", getDayOfWeek(1)); // Виведе: "Понеділок"
console.log("getDayOfWeek(3)", getDayOfWeek(3)); // Виведе: "Середа"
console.log("getDayOfWeek(6)", getDayOfWeek(6)); // Виведе: "Субота"
console.log("getDayOfWeek(8)", getDayOfWeek(8)); // Виведе: "Невірний номер дня"

//Задача 9: Напишіть функцію getVariableType, яка приймає змінну variable і повертає рядок, що відповідає типу цієї змінної. Використовуйте тернарний оператор для визначення типу змінної.

function getVariableType(variable) {
  const type = typeof variable;
  const result =
    type === "number"
      ? "Це число"
      : type === "string"
      ? "Це рядок"
      : type === "boolean"
      ? "Це булеве значення"
      : "Це інший тип";

  return result;
}

// Приклади виклику функції
console.log("getVariableType(10)", getVariableType(10)); // Виведе: "Це число"
console.log('getVariableType("Hello")', getVariableType("Hello")); // Виведе: "Це рядок"
console.log("getVariableType(true)", getVariableType(true)); // Виведе: "Це булеве значення"
console.log("getVariableType([1, 2, 3])", getVariableType([1, 2, 3])); // Виведе: "Це інший тип"

//Задача 10: Напишіть рекурсивну функцію, яка обчислює суму чисел від 1 до заданого числа.
// Факторіал числа - це добуток всіх цілих чисел від 1 до цього числа. Наприклад, факторіал 5 (записується як 5!) дорівнює 1*2*3*4*5 = 120.

function factorial(n) {
  // Якщо n дорівнює 0 або 1, повертаємо 1, оскільки факторіал 0 і 1 завжди дорівнює 1.
  if (n === 0 || n === 1) {
    return 1;
  }
  // Якщо n більше за 1, ми множимо n на результат виклику тієї самої функції з n-1.
  else {
    return n * factorial(n - 1);
  }
}

console.log("factorial(5)", factorial(5)); // Виведе: 120
console.log("factorial(10)", factorial(10)); // Виведе: 3628800

// Задача11: створити функцію `makeAdder`, яка приймає число `x` і повертає нову функцію, що приймає число `y` і повертає суму `x` та `y`.
function makeAdder(x) {
  // Вертаємо нову функцію, яка приймає `y`
  return function (y) {
    // Сумуємо `x` та `y` і повертаємо результат
    return x + y;
  };
}

//Створюємо змінну getAdder якій присвоємо результат виконання функції makeAdder з аргументом 5
let getAdder = makeAdder(5);

console.log("getAdder(10)", getAdder(10)); // Виведе: 15
console.log("makeAdder(5)(10)", makeAdder(5)(10)); // Виведе: 15

//Задача 12: Задача: створити стрілкову функцію, яка приймає два числа і повертає їх добуток.
let multiply = (x, y) => {
  // Повертаємо добуток x та y
  return x * y;
};

console.log("multiply(5, 3)", multiply(5, 3)); // Виведе: 15

//Задача 13: Задача: створити каріровану функцію `divide`, яка може бути викликана як `divide(x)(y)`, щоб отримати результат ділення `x` на `y`.

function divide(x) {
  // Повертаємо нову функцію, яка приймає `y`
  return function (y) {
    // Ділимо `x` на `y` і повертаємо результат
    return x / y;
  };
}

//Створюємо змінну getDivider якій присвоємо результат виконання функції divide з аргументом 2
let getDivider = divide(2);

console.log("getDivider(10)", getDivider(10)); // Виведе: 0.2
console.log("divide(2)(10)", divide(2)(10)); // Виведе: 0.2

//Задача 14: Створити мемоізовану версію функції, яка обчислює площу квадрата на основі довжини його сторони.

function memoizedArea() {
  // Ініціалізуємо примітивні змінні для зберігання попереднього аргументу та результату
  let prevSide = null;
  let prevResult = null;

  // Повертаємо функцію яка приймає аргумент side - сторону квадрата
  return function (side) {
    // Перевіряємо, чи є введена сторона такою ж, як і в попередньому виклику
    if (side === prevSide) {
      // Виводимо повідомлення Fetching from cache
      console.log("Fetching from cache");
      // Повертаємо попереднє значення
      return prevResult;
    }
    // Якщо сторона відрізняється від попередньої, обчислюємо площу та зберігаємо результат та аргумент для майбутнього використання
    else {
      // Виводимо повідомлення Calculating result
      console.log("Calculating result");
      //Розраховуємо площу
      let result = side * side;

      //prevSide присвоюємо сторону квадрата
      prevSide = side;
      //prevResult просвоюємо площу квадрата
      prevResult = result;
      // Повертаємо площу
      return result;
    }
  };
}

//Створюємо змінну squareArea якій присвоємо результат виконання функції memoizedArea
let squareArea = memoizedArea();

console.log("squareArea(5)", squareArea(5)); // Обчислює і виводить 25
console.log("squareArea(5)", squareArea(5)); // Виводить "Fetching from cache" і виводить 25 з кешу
console.log("squareArea(6)", squareArea(6)); // Обчислює і виводить 36
console.log("squareArea(6)", squareArea(6)); // Виводить "Fetching from cache" і виводить 36 з кешу

//Задача 15: Задача: створити функціональний вираз для обчислення кубу числа.
let cube = function (n) {
  // Повертаємо n в кубі
  return n ** 3;
};

console.log("cube(3)", cube(3)); // Виведе: 27

// Задача 16: створити дві функції, одна з яких збільшує число на 1, а інша - множить число на 2, а потім створити композицію цих функцій.

function increment(n) {
  // Повертаємо n + 1
  return n + 1;
}

function double(n) {
  // Повертаємо n*2
  return n * 2;
}

function compose(func1, func2) {
  // Повертаємо нову функцію, яка приймає число
  return function (n) {
    //Повертаємо func2, в яку передаємо func1 з аргументом n
    return func2(func1(n));
  };
}

//Створюємо змінну createCompose якій присвоємо результат виконання функції compose з аргументами increment та double
let createCompose = compose(increment, double);

console.log("createCompose(5)", createCompose(5)); // Виведе: 12 (5+1=6, 6*2=12)
