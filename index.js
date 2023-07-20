//Завдання 1: Функція для створення символу
function createSymbol() {
  // Повернемо символ без опису
}

console.log("Завдання 1 ====================================");
console.log(createSymbol()); // Виведе Symbol()

//Завдання 2: Функція для створення символу з описом та виведення опису
function createSymbolWithDescription(property) {
  // Створюємо символ symbol з описом property
  //Повертаємо опис символа symbol
}

console.log("Завдання 2 ====================================");
console.log(createSymbolWithDescription("My symbol")); // Виведе My symbol

// Завдання 3: Створення властивостей об'єкту з використанням Symbol
// В даному завданні ми створимо властивість об'єкту, ключ якої буде символом.

// Створимо функцію, яка створює об'єкт з властивістю, ключ якої є символом
function createSymbolProperty(property) {
  // Створимо змінну sym яка дорівнює символу без опису
  // Створимо пустий об'єкт
  // Додамо властивість до об'єкту, ключем якої буде наш символ, а значенням буде аргумент property
  // Повертаємо об'єкт
}

console.log("Завдання 3 ====================================");
console.log(
  createSymbolProperty("Це властивість об'єкту з використанням символу")
); //Виведе { [Symbol()]: "Це властивість об'єкту з використанням символу" }

// Завдання 4. Перевіримо чи є символи унікальними
// Функція для створення двох символів з однаковим описом та порівнянням
function createAndCompareTwoSymbols(value) {
  // Створюємо два символи з однаковим описом value, та повертаємо результат порівняння двох символів
}

console.log("Завдання 4 ====================================");

console.log(createAndCompareTwoSymbols("My Symbol")); // Виведе false

// Завдання 5: Створення символу з використанням Symbol.for()

// Функція createSymbolForKey створює новий символ за допомогою Symbol.for() та повертає його
function createSymbolForKey(key) {
  // Використовуємо Symbol.for() для створення нового символу symbol зі значенням key
  // Symbol.for() шукає символ в глобальному реєстру символів. Якщо символ з таким ключем вже існує, він повертає його, в іншому випадку створює новий символ з даним ключем та додає його в реєстр
  // Повертаємо створений символ
}

// Функція compareSymbolsForKey порівнює два символи за допомогою оператора '==='
function compareSymbolsForKey(symbol1, symbol2) {
  // Використовуємо оператор '===' для порівняння двох символів
  // Якщо два символи однакові, він поверне true, в іншому випадку - false
}

console.log("Завдання 5 ====================================");
let symbol5 = createSymbolForKey("myKey"); // Створюємо новий символ
let symbol6 = createSymbolForKey("myKey"); // Створюємо новий символ
console.log(compareSymbolsForKey(symbol5, symbol6)); //Виведе: true

// Завдання 6: Використання Symbol.keyFor(sym)

// Функція getSymbolKey приймає символ як аргумент та повертає ключ, який був використаний для його створення
function getSymbolKey(symbol) {
  // Використовуємо Symbol.keyFor(sym) для отримання ключа, який був використаний для створення символу та повертаємо його
}

console.log("Завдання 6 ====================================");
let symbolForKey = Symbol.for("myKey"); // Створюємо новий символ або отримуємо існуючий з глобального реєстру символів
console.log(getSymbolKey(symbolForKey)); // Виводимо ключ символу. Виведе: myKey

// Завдання 7: Використання Symbol.toString

function useSymbolToStringTag() {
  // Створюємо пустий об'єкт myObject.
  // Встановлюємо властивість Symbol об'єкту myObject на значення "CustomObject".
  // Повертаємо рядкове представлення myObject[Symbol].
}

console.log("Завдання 7 ====================================");
console.log(useSymbolToStringTag()); //Виведе CustomObject

// Завдання 8: Використання Symbol.description

// Функція useSymbolDescription використовує властивість Symbol.description для отримання опису символу.

function useSymbolDescription() {
  // Створюємо символ mySymbol зі значенням "mySymbol".
  // Отримуємо опис символу mySymbol в змінну symbolDescription за допомогою властивості description.
  // Повертаємо symbolDescription
}

console.log("Завдання 8 ====================================");
console.log(useSymbolDescription()); //Виведе mySymbol
