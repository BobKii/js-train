//Задача 1: Напишіть функцію, яка перевіряє, чи є задане число парним.
//Використовуйте оператор залишку від ділення для визначення, чи є число парним.

function isEvenNumber(num) {
  // Перевірити, чи число num є парним
  // Повернути результат перевірки (true або false) як результат функції
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Завдання 1 ====================================");
console.log("isEvenNumber(10)", isEvenNumber(10)); // Виведе: true
console.log("isEvenNumber(7)", isEvenNumber(7)); // Виведе: false

// Задача 2: Напишіть функцію, яка обчислює суму чисел від 1 до заданого числа. Використовуйте цикл для послідовного додавання чисел.

function calculateSum(n) {
  // Ініціалізувати змінну sum зі значенням 0
  // Запустити цикл для змінної i від 1 до n
  // Додати поточне значення i до змінної sum
  // Повернути значення змінної sum
  if (n > 0) {
    let sum = 0;
    let i = 1;
    do {
      sum += i;
      i++;
    } while (i <= n);
    return sum;
  }
}

console.log("Завдання 2 ====================================");
console.log("calculateSum(5)", calculateSum(5)); // Виведе: 15
console.log("calculateSum(10)", calculateSum(10)); // Виведе: 55

// Задача 3: Напишіть функцію, яка перевіряє, чи є задане число простим(ділиться без остачі тільки на себе та на 1).
//Використовуйте цикл для перевірки ділення числа на всі можливі дільники.

function isPrimeNumber(num) {
  // Якщо число num менше або дорівнює 1, то воно не є простим, тому повертаємо false
  // В іншому випадку продовжуємо перевірку
  // Запускаємо цикл для змінної i від 2 до num-1
  // Перевіряємо, чи num ділиться націло на поточне значення i
  // Якщо так, то num не є простим, тому повертаємо false
  // Якщо під час циклу не знайдено дільників, то num є простим, тому повертаємо true

  if (num <= 1) {
    return false;
  } else {
    let i = 2;
    do {
      if (num % i === 0) {
        return false;
      } else {
        return true;
      }
      i++;
    } while (i <= num - 1);
  }
}

console.log("Завдання 3 ====================================");
console.log("isPrimeNumber(7)", isPrimeNumber(7)); // Виведе: true
console.log("isPrimeNumber(10)", isPrimeNumber(10)); // Виведе: false

// Задача 4: Напишіть функцію, яка перевіряє, чи є задане число додатним.
//Використовуйте умовний оператор для перевірки числа.

function isPositiveNumber(num) {
  // Перевіряємо, чи число num більше 0
  // Якщо так, то num є позитивним, тому повертаємо true
  // В іншому випадку, якщо num менше або дорівнює 0, то num не є позитивним, тому повертаємо false

  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Завдання 4 ====================================");
console.log("isPositiveNumber(5)", isPositiveNumber(5)); // Виведе: true
console.log("isPositiveNumber(-2)", isPositiveNumber(-2)); // Виведе: false

// Задача 5: Напишіть функцію, яка перевіряє, чи є заданий рядок пустим. Використовуйте умовний оператор та властивість довжини рядка для перевірки.

function isEmptyString(str) {
  // Перевіряємо, чи рядок str дорівнює пустому рядку ('')
  // Якщо так, то str є порожнім рядком, тому повертаємо true
  // В іншому випадку, якщо str містить хоча б один символ, то str не є порожнім рядком, тому повертаємо false

  if (str === "") {
    return true;
  } else {
    return false;
  }
}

console.log("Завдання 5 ====================================");
console.log('isEmptyString("")', isEmptyString("")); // Виведе: true
console.log('isEmptyString("Hello")', isEmptyString("Hello")); // Виведе: false

// Задача 6: Напишіть функцію checkDataType, яка приймає параметр value і перевіряє його тип даних. Функція повинна використовувати оператор typeof для визначення типу значення.
// Виведіть в консоль повідомлення з результатом перевірки типу, наприклад, Значення "hello" має тип "string"

function checkDataType(value) {
  // Отримуємо тип значення value за допомогою оператора typeof
  // Виводимо у консоль повідомлення, яке містить значення value та його тип
  // Повертаємо тип значення value
  let typeValue = typeof value;
  console.log(`Значення ${value} має тип данних ${typeValue}`);
  return typeValue;
}

// Приклади виклику функції
console.log("Завдання 6 ====================================");
console.log("checkDataType(42)", checkDataType(42)); // Виведе: Значення "42" має тип "number".
console.log("checkDataType('Hello')", checkDataType("Hello")); // Виведе: Значення "Hello" має тип "string".
console.log("checkDataType(true)", checkDataType(true)); // Виведе: Значення "true" має тип "boolean".
console.log("checkDataType(undefined)", checkDataType(undefined)); // Виведе: Значення "undefined" має тип "undefined".

// Задача 7: Напишіть функцію findMax, яка приймає два числа num1 і num2 і повертає більше з них. Використовуйте умовний оператор if та оператор порівняння для визначення більшого числа.

function findMax(num1, num2) {
  // Порівнюємо num1 та num2
  // Якщо num1 більше num2, то num1 є максимальним, тому повертаємо num1
  // В іншому випадку (якщо num2 більше або дорівнює num1), то num2 є максимальним, тому повертаємо num2
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Приклади виклику функції
console.log("Завдання 7 ====================================");
console.log("findMax(10, 5)", findMax(10, 5)); // Виведе: 10
console.log("findMax(8,12)", findMax(8, 12)); // Виведе: 12
console.log("findMax(7, 7)", findMax(7, 7)); // Виведе: 7

// Задача 8: Напишіть функцію getUserStatus, яка приймає вік користувача age і повертає рядок, що вказує на його статус.
// Якщо вік менше 18 років, функція повертає "Неповнолітній". Якщо вік від 18 до 65 років, функція повертає "Дорослий". Якщо вік більше або дорівнює 65 рокам, функція повертає "Пенсіонер".
// Використовуйте умовний оператор if, else if та оператори порівняння для визначення статусу користувача.

function getUserStatus(age) {
  // Перевіряємо вік за допомогою умовних операторів
  // Якщо age менше 18, то користувач є "Неповнолітнім"
  // Якщо age більше або дорівнює 18 і менше 65, то користувач є "Дорослим"
  // В іншому випадку (якщо age більше або дорівнює 65), то користувач є "Пенсіонером"

  if (typeof age === "number") {
    if (age < 18) {
      return "Неповнолітній";
    } else if (age >= 18 && age < 65) {
      return "Дорослий";
    } else if (age >= 65) {
      return "Пенсіонер";
    }
  }
}

// Приклади виклику функції
console.log("Завдання 8 ====================================");
console.log("getUserStatus(15)", getUserStatus(15)); // Виведе: "Неповнолітній"
console.log("getUserStatus(25)", getUserStatus(25)); // Виведе: "Дорослий"
console.log("getUserStatus(70)", getUserStatus(70)); // Виведе: "Пенсіонер"

// Задача 9: Напишіть функцію getDayOfWeek, яка приймає номер дня тижня dayNumber (1-7) і повертає рядок, що відповідає цьому дню тижня.
// Використовуйте конструкцію switch case для визначення дня тижня за його номером.

function getDayOfWeek(dayNumber) {
  // Використовуємо оператор switch для знаходження назви дня тижня залежно від dayNumber
  // В кожному випадку (case) перевіряємо значення dayNumber і присвоюємо змінній day відповідну назву дня тижня
  // Якщо dayNumber = 1, то day = "Понеділок"
  // Якщо dayNumber = 2, то day = "Вівторок"
  // Якщо dayNumber = 3, то day = "Середа"
  // Якщо dayNumber = 4, то day = "Четвер"
  // Якщо dayNumber = 5, то day = "П'ятниця"
  // Якщо dayNumber = 6, то day = "Субота"
  // Якщо dayNumber = 7, то day = "Неділя"
  // Якщо значення dayNumber не співпадає з жодним з випадків, то day = "Невірний номер дня"
  // Повертаємо назву дня тижня, яку зберегли у змінній day

  switch (dayNumber) {
    case 1:
      return "Понеділок";

    case 2:
      return "Вівторок";

    case 3:
      return "Середа";

    case 4:
      return "Четвер";

    case 5:
      return "П'ятниця";

    case 6:
      return "Субота";

    case 7:
      return "Неділя";
    default:
      return "Невірний номер дня";
  }
}

// Приклади виклику функції
console.log("Завдання 9 ====================================");
console.log("getDayOfWeek(1)", getDayOfWeek(1)); // Виведе: "Понеділок"
console.log("getDayOfWeek(3)", getDayOfWeek(3)); // Виведе: "Середа"
console.log("getDayOfWeek(6)", getDayOfWeek(6)); // Виведе: "Субота"
console.log("getDayOfWeek(8)", getDayOfWeek(8)); // Виведе: "Невірний номер дня"

// Задача 10: Напишіть функцію getVariableType, яка приймає змінну variable і повертає рядок, що відповідає типу цієї змінної. Використовуйте тернарний оператор для визначення типу змінної.

function getVariableType(variable) {
  // Отримуємо тип змінної variable за допомогою оператора typeof
  // Встановлюємо відповідне повідомлення залежно від отриманого типу
  // Якщо тип змінної - number, то повідомлення = "Це число"
  // Якщо тип змінної - string, то повідомлення = "Це рядок"
  // Якщо тип змінної - boolean, то повідомлення = "Це булеве значення"
  // В іншому випадку (якщо тип змінної не входить у попередні категорії), то повідомлення = "Це інший тип"
  // Повертаємо встановлене повідомлення як результат функції

  let typeVariable = typeof variable;

  switch (typeVariable) {
    case "number":
      return "Це число";
      break;
    case "string":
      return "Це рядок";
      break;
    case "boolean":
      return "Це булеве значення";
      break;
    default:
      return "Це інший тип";
  }
}

// Приклади виклику функції
console.log("Завдання 10 ====================================");
console.log("getVariableType(10)", getVariableType(10)); // Виведе: "Це число"
console.log('getVariableType("Hello")', getVariableType("Hello")); // Виведе: "Це рядок"
console.log("getVariableType(true)", getVariableType(true)); // Виведе: "Це булеве значення"
console.log("getVariableType([1, 2, 3])", getVariableType([1, 2, 3])); // Виведе: "Це інший тип"

// Задача 11:Напишіть рекурсивну функцію, яка обчислює суму чисел від 1 до заданого числа.
// Факторіал числа - це добуток всіх цілих чисел від 1 до цього числа. Наприклад, факторіал 5 (записується як 5!) дорівнює 1*2*3*4*5 = 120.

function factorial(n) {
  // Якщо n дорівнює 0 або 1, повертаємо 1, оскільки факторіал 0 і 1 завжди дорівнює 1.
  // Якщо n більше за 1, ми множимо n на результат виклику тієї самої функції з n-1.
  if (n === 0 || n === 1) {
    return 1;
  } else if (n > 1) {
    return n * factorial(n - 1);
  }
}

console.log("Завдання 11 ====================================");
console.log("factorial(5)", factorial(5)); // Виведе: 120
console.log("factorial(10)", factorial(10)); // Виведе: 3628800

// Задача 12: створити функцію `makeAdder`, яка приймає число `x` і повертає нову функцію,
// що приймає число `y` і повертає суму `x` та `y`.
function makeAdder(x) {
  // Вертаємо нову функцію, яка приймає `y`
  // Сумуємо `x` та `y` і повертаємо результат
  return (y) => {
    return x + y;
  };
}

// Створюємо змінну getAdder якій присвоємо результат виконання функції makeAdder з аргументом 5

let getAdder = makeAdder(5);

console.log("Завдання 12 ====================================");
// Розкоментуйте після виконаня завдання
console.log("getAdder(10)", getAdder(10)); // Виведе: 15
console.log("makeAdder(5)(10)", makeAdder(5)(10)); // Виведе: 15

// Задача 13: Задача: створити стрілкову функцію, яка приймає два числа і повертає їх добуток.
let multiply = (x, y) => {
  return x * y;
  // Повертаємо добуток x та y
};

console.log("Завдання 13 ====================================");
console.log("multiply(5, 3)", multiply(5, 3)); // Виведе: 15

// Задача 14: Задача: створити каріровану функцію `divide`, яка може бути викликана як `divide(x)(y)`, щоб отримати результат ділення `x` на `y`.

function divide(x) {
  // Повертаємо нову функцію, яка приймає `y`
  // Ділимо `x` на `y` і повертаємо результат
  return (y) => {
    return x / y;
  };
}

// Створюємо змінну getDivider якій присвоємо результат виконання функції divide з аргументом 2

let getDivider = divide(2);

console.log("Завдання 14 ====================================");
// Розкоментуйте після виконаня завдання
console.log("getDivider(10)", getDivider(10)); // Виведе: 0.2
console.log("divide(2)(10)", divide(2)(10)); // Виведе: 0.2

// Задача 15: Створити мемоізовану версію функції, яка обчислює площу квадрата на основі довжини його сторони.

function memoizedArea() {
  // Ініціалізуємо примітивні змінні для зберігання попереднього аргументу та результату
  let prevSide = null;
  let prevResult = null;
  // Повертаємо функцію яка приймає аргумент side - сторону квадрата
  // Перевіряємо, чи є введена сторона такою ж, як і в попередньому виклику
  // Виводимо повідомлення Fetching from cache
  // Повертаємо попереднє значення
  return (side) => {
    if (side === prevSide) {
      console.log("Fetching from cache");
      return prevResult;
    } else {
      const result = side ** 2;
      console.log("Calculating result");
      prevSide = side;
      prevResult = result;
      return prevResult;
    }
  };
  // Якщо сторона відрізняється від попередньої,
  //обчислюємо площу та зберігаємо результат та аргумент для майбутнього використання
  //// const result = side ** 2;
  // Виводимо повідомлення Calculating result
  //// console.log("Calculating result");
  // Розраховуємо площу
  // prevSide присвоюємо сторону квадрата
  // prevResult просвоюємо площу квадрата
  //// prevSide = side;
  //// prevResult = result;
  // Повертаємо площу
  //// return result;
}

//Створюємо змінну squareArea якій присвоємо результат виконання функції memoizedArea
const squareArea = memoizedArea();

console.log("Завдання 15 ====================================");
// Розкоментуйте після виконаня завдання
console.log("squareArea(5)", squareArea(5)); // Обчислює і виводить 25
console.log("squareArea(5)", squareArea(5)); // Виводить "Fetching from cache" і виводить 25 з кешу
console.log("squareArea(6)", squareArea(6)); // Обчислює і виводить 36
console.log("squareArea(6)", squareArea(6)); // Виводить "Fetching from cache" і виводить 36 з кешу

// Задача 16: Задача: створити функціональний вираз для обчислення кубу числа.
let cube = function (n) {
  // Повертаємо n в кубі
  return n ** 3;
};

console.log("Завдання 16 ====================================");
console.log("cube(3)", cube(3)); // Виведе: 27

// Задача 17: створити дві функції, одна з яких збільшує число на 1, а інша - множить число на 2, а потім створити композицію цих функцій.
function increment(n) {
  // Повертаємо n + 1
  return ++n;
}

function double(n) {
  // Повертаємо n*2
  return n * 2;
}

// Створюємо змінну createCompose якій присвоємо результат виконання функції compose з аргументами increment та double

const createCompose = (n) => {
  return double(increment(n));
};

console.log("Завдання 17 ====================================");
// Розкоментуйте після виконаня завдання
console.log("createCompose(5)", createCompose(5)); // Виведе: 12 (5+1=6, 6*2=12)

//---------------------------------------------------------------------------

console.log("double(5)", double(5));
console.log("increment(5)", increment(5));
