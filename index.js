//Завдання 1: Функція для створення символу
function createSymbol() {
  // Повернемо символ без опису
}

console.log("Завдання 1 ====================================");
console.log(createSymbol()); // Виведе Symbol()

//Завдання 2: Функція для створення символу з описом та виведення опису
function createSymbolWithDescription() {
  // Створюємо символ symbol з описом 'My symbol'
  //Повертаємо опис символа symbol
}

console.log("Завдання 2 ====================================");
console.log(createSymbolWithDescription()); // Виведе My symbol

// Завдання 3: Створення властивостей об'єкту з використанням Symbol
// В даному завданні ми створимо властивість об'єкту, ключ якої буде символом.

// Створимо функцію, яка створює об'єкт з властивістю, ключ якої є символом
function createSymbolProperty() {
  // Створимо змінну sym яка дорівнює символу з описом "property"
  // Створимо пустий об'єкт
  // Додамо властивість до об'єкту, ключем якої буде наш символ, а значенням буде рядок Це властивість об'єкту з використанням символу
  // Повертаємо об'єкт
}

console.log("Завдання 3 ====================================");
console.log(createSymbolProperty()); //Виведе
// {
//   [Symbol(property)]: "Це властивість об'єкту з використанням символу"
// }

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

// Завдання 7: Використання Symbol.isConcatSpreadable

// Функція useIsConcatSpreadable використовує властивість Symbol.isConcatSpreadable для вказівки, чи масив розкривається під час конкатенації.

function useIsConcatSpreadable() {
  // Створюємо перший масив array1 зі значеннями 1, 2, 3.
  // Створюємо другий масив array2 зі значеннями 4, 5, 6.
  // Встановлюємо властивість Symbol.isConcatSpreadable для масиву array2 в значення false.
  // Використовуємо метод concat для об'єднання масивів array1 і array2.
  // Повертаємо результат конкатенації.
}

console.log("Завдання 7 ====================================");
console.log(useIsConcatSpreadable()); // Виведе [ 1, 2, 3, [ 4, 5, 6, [Symbol(Symbol.isConcatSpreadable)]: false ] ]

// Завдання 8: Використання Symbol.toString

function useSymbolToStringTag() {
  // Створюємо пустий об'єкт myObject.
  // Встановлюємо властивість Symbol об'єкту myObject на значення "CustomObject".
  // Повертаємо рядкове представлення myObject[Symbol].
}

console.log("Завдання 8 ====================================");
console.log(useSymbolToStringTag()); //Виведе CustomObject

// Завдання 9: Використання Symbol.description

// Функція useSymbolDescription використовує властивість Symbol.description для отримання опису символу.

function useSymbolDescription() {
  // Створюємо символ mySymbol зі значенням "mySymbol".
  // Отримуємо опис символу mySymbol в змінну symbolDescription за допомогою властивості description.
  // Повертаємо symbolDescription
}

console.log("Завдання 9 ====================================");
console.log(useSymbolDescription()); //Виведе mySymbol

// Завдання 10: Використання Symbol.iterator

// Об'єкт "myObject" представляє значення   from: 1, to: 7, які можна перебрати
let myObject = {
  // Використовуємо Symbol.iterator для створення ітератора всередині об'єкта "myObject"
  // this.current присвоюємо this.from
  // Повертаємо this
  //створюжмо метод "next" який визначає поведінку при кожній ітерації
  // Використовуйте if
  // Якщо current менше to, повертаємо об'єкт з властивістю "value",що містить поточне значення ,
  // та не забуваємо збільшити індекс за допомогою інкремент, і "done" - false, означаючи, що ітерація ще не закінчена
  // Якщо індекс вийшов за межі масиву ключів, повертаємо об'єкт з властивістю "done" - true, означаючи, що ітерація закінчена
};

// Функція "useSymbolIterator" використовує ітератор для отримання значень об'єкта
function useSymbolIterator() {
  // Створюємо масив пустий масив result
  // Проходимо крізь елементи об'єкта, використовуючи цикл "for...of"
  // Додаємо кожне значення до масиву "result"
  // Повертаємо масив зі значеннями
}

console.log("Завдання 10 ====================================");

console.log(useSymbolIterator()); //Виведе [ 1, 2, 3, 4, 5, 6 ]
