// Завдання 1
/**
 * Функція `getDateDetails` отримує об'єкт дати та повертає об'єкт з деякими деталями про дату.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт, який містить такі властивості:
 *  year - рік,
 *  month - місяць,
 *  day - день місяця.
 */
function getDateDetails(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Повертаємо об'єкт, що містить деякі деталі про вхідний об'єкт Date.
  if (typeof date.getTime === "function") {
    return console.log(date.getFullYear(), date.getMonth(), date.getDate());
  } else {
    return console.log("Помилка: вхідне значення має бути об'єктом Date");
  }
}

console.log("Завдання: 1 ==============================");
const now = new Date("2023-12-25T00:00:00Z");
console.log(getDateDetails(new Date("2023-12-25T00:00:00Z")));
//Виведе { year: 2023, month: 11, day: 25 }

// Завдання 2
/**
 * Функція `setDateDetails` приймає об'єкт Date і рядок ISO дати, і встановлює дату з ISO рядка в об'єкт Date.
 *
 * date - Об'єкт Date, в який потрібно встановити дату.
 * isoString - Рядок дати в форматі ISO.
 *
 * Повертає об'єкт Date з встановленою датою, якщо вхідні дані вірні. Якщо ні, виводить повідомлення про помилку.
 */
function setDateDetails(date, isoString) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Перевірка, чи є вхідний ISO рядок валідним, отримавши дату з рядка та перевірити чи є результат числом,
  //  якщо ні виводимо повідомлення "Помилка: недійсний ISO рядок"
  // Встановлюємо дату з ISO рядка в об'єкт Date.
  // Повертаємо об'єкт Date з встановленою датою.

  console.log(typeof isoString, typeof date.getTime);
  if (typeof date.getTime === "function") {
    // console.log(typeof isoString);
    if (typeof isoString === "string") {
      return (date = new Date(isoString));
    } else {
      return console.log("Помилка: недійсний ISO рядок");
    }
  } else {
    return console.log("Помилка: вхідне значення має бути об'єктом Date");
  }
}

console.log("Завдання: 2 ==============================");
const date = new Date();
console.log(setDateDetails(date, "2023-12-25T00:00:00Z"));
//Виведе 2023-12-25T00:00:00.000Z

// Завдання 3
/**
 * Функція `dateToUTC` приймає об'єкт Date та повертає рядок, що представляє дату в UTC форматі.
 *
 * date - Об'єкт Date.
 *
 * Повертає рядок з датою в UTC форматі, якщо вхідне значення є дійсним об'єктом Date.
 * Якщо ні, виводить повідомлення про помилку.
 */
function dateToUTC(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Повертаємо рядок з датою в UTC форматі.
  if (typeof date.getTime === "function") {
    return console.log(date.toUTCString());
  } else {
    return console.log("Помилка: вхідне значення має бути об'єктом Date");
  }
}

console.log("Завдання: 3 ==============================");
console.log(dateToUTC(new Date()));
//Виведе Tue, 27 Jun 2023 07:15:47 GMT

// Завдання 4
/**
 * Функція `setSpecificTime` приймає об'єкт Date та встановлює конкретний час.
 *
 * date - Об'єкт Date.
 * hours - Кількість годин.
 * minutes - Кількість хвилин.
 * seconds - Кількість секунд.
 * milliseconds - Кількість мілісекунд.
 *
 * Повертає об'єкт Date з встановленим часом, якщо вхідні дані вірні. Якщо ні, виводить повідомлення про помилку.
 */
function setSpecificTime(date, hours, minutes, seconds, milliseconds) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Встановлюємо конкретний час в об'єкті Date за допомогою setHours.
  // Повертаємо об'єкт Date з встановленим часом.
  if (typeof date.getTime === "function") {
    date.setHours(hours, minutes, seconds, milliseconds);
    console.log(date.toUTCString());
  } else {
    return console.log("Помилка: вхідне значення має бути об'єктом Date");
  }
}

console.log("Завдання: 4 ==============================");
console.log(
  setSpecificTime(new Date("2023-12-25T00:00:00.000Z"), 12, 30, 0, 0)
);
//Виведе 2023-12-25T09:30:00.000Z

// Завдання 5

/**
 * Функція `nextNewYear` приймає об'єкт Date і повертає час до наступного Нового року.
 *
 *
 * Повертає об'єкт з інформацією про час до наступного Нового року:
 * {
 *   days: // Кількість днів до Нового року.
 *   hours: // Кількість годин до Нового року, не включаючи повні дні.
 *   minutes: // Кількість хвилин до Нового року, не включаючи повні години.
 *   seconds: // Кількість секунд до Нового року, не включаючи повні хвилини.
 *   milliseconds: // Кількість мілісекунд до Нового року, не включаючи повні секунди.
 * }
 */
function nextNewYear() {
  // Створюєму змінну в яку записуємо поточну дату
  // Визначення поточного року.
  // Визначення дати наступного Нового року.

  //Для цього створюємо новий об`єкт Date в якому збільшуємо поточний рік на 1,
  // встановлюємо місяць на 0 а дату на 1

  // Визначаємо кількість мілісекунд до наступного Нового року в змінну diff.
  // Розраховуємо кількість повних днів, годин, хвилин і секунд.
  // Дні:diff / (1000 * 60 * 60 * 24)
  // Години:(diff / (1000 * 60 * 60)) % 24
  // Хвилини: (diff / (1000 * 60)) % 60;
  // Секунди:(diff / 1000) % 60;
  // Мілісекунди:  diff % 1000;
  let currentDate = new Date();
  let newYearDz = currentDate.setFullYear(currentDate.getFullYear() + 1, 0, 1);
  let tmp = Date.parse(newYearDz);

  // let diff = newYearDz.getTime() - currentDate.getTime();
  // let DayFoNewYear = diff / (1000 * 60 * 60 * 24);
  // let HoursFoNewYear = (diff / (1000 * 60 * 60)) % 24;
  // let MinFoNewYear = (diff / (1000 * 60)) % 60;
  // let SecondFoNewYear = (diff / 1000) % 60;
  // let MiliSecondFoNewYear = diff % 1000;
  console.log(
    newYearDz,
    currentDate,
    tmp
    // ,
    // diff,
    // DayFoNewYear,
    // HoursFoNewYear
  );
}

console.log("Завдання:5  ==============================");

console.log(nextNewYear());
//Виведе

// Завдання 6
/**
 * Функція `isLeapYear` перевіряє, чи є рік високосним.
 *
 * year - Рік, який треба перевірити.
 *
 * Повертає об'єкт:
 * {
 *   year: // Рік, який був перевірений.
 *   isLeap: // Чи є рік високосним.
 * }
 */
function isLeapYear(year) {
  // Перевірка, чи є вхідне значення числом якщо ні повертаємо рядок .
  // Перевірка, чи є рік високосним.
  // Високосним вважається рік, який ділиться націло на 4
  // Повертаємо об'єкт з роком та інформацією про те, чи є він високосним.
  if (typeof year === "number") {
    if (year % 4 === 0) {
      let result = {};
      result.year = year;
      result.isLeap = true;
      return result;
    }
  } else {
    return {};
  }
}
console.log("Завдання: 6 ==============================");

console.log(isLeapYear(2020));
//Виведе { year: 2020, isLeap: true }

// Завдання 7
/**
 * Функція `addDays` додає задану кількість днів до вказаної дати.
 *
 * date - Об'єкт Date.
 * days - Кількість днів, які треба додати.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   addedDays: // Кількість доданих днів.
 *   resultDate: // Результуюча дата в форматі 'гггг-мм-дд'.
 * }
 */
function addDays(date, days) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Перевірка, чи є кількість днів числом.
  // Якщо days не є числом, функція поверне рядок
  // "Помилка: кількість днів має бути числом" та повертає undefined.
  // Збереження початкової дати для виведення в форматі ISO.
  // Додавання заданої кількості днів до дати.
  // Збереження результуючої дати для виведення в форматі ISO.
  // Повертаємо об'єкт з початковою датою, кількістю доданих днів та результуючою датою.
  if (typeof date.getTime === "function") {
    if (typeof days === "number") {
      let beginDate = new Date(date);
      let resultDate = date;
      resultDate.setDate(resultDate.getDate() + days);
      let result = {};
      result.inputDate = beginDate;
      result.addadDays = days;
      result.resultDate = resultDate;
      // console.log(beginDate, resultDate);
      return result;
    } else {
      console.log("Помилка: кількість днів має бути числом");
      return undefined;
    }
  } else {
    return console.log("Помилка: вхідне значення має бути об'єктом Date");
  }
}

console.log("Завдання: 7 ==============================");

console.log(addDays(new Date("2023-01-01"), 7));
//Виведе
// {
//   inputDate: '2023-01-01T00:00:00.000Z',
//   addedDays: 7,
//   resultDate: '2023-01-08T00:00:00.000Z'
// }

// Завдання 8
/**
 * Функція `getDayOfWeek` повертає день тижня вказаної дати українською мовою.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   dayOfWeek: // День тижня українською мовою.
 * }
 */
let daysOfWeek = [
  "неділя",
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п’ятниця",
  "субота",
];

function getDayOfWeek(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Збереження початкової дати для виведення  в форматі ISO.
  // Отримання дня тижня як числа (0 - неділя, 1 - понеділок, ..., 6 - субота).
  // Отримання назви дня тижня з масиву daysOfWeek за індексом.
  // Повертаємо об'єкт з початковою датою та днем тижня.
  if (typeof date.getTime === "function") {
    let beginDate = new Date(date);
    let dayWeek = beginDate.getDay();
    // console.log(dayWeek, typeof dayWeek);

    for (let item in daysOfWeek) {
      // console.log(typeof item, item, daysOfWeek[item]);
      if (item === dayWeek.toString()) {
        let resultDatofWeek = daysOfWeek[item];
        let widpowid = {};
        widpowid.inputDate = beginDate;
        widpowid.dayOfWeek = resultDatofWeek;
        return widpowid;
      }
    }

    // console.log(beginDate, beginISoDate, dayWeek, resultDatofWeek);
  } else {
    console.log("Помилка: вхідне значення має бути об'єктом Date");
  }
}

console.log("Завдання: 8 ==============================");

console.log(getDayOfWeek(new Date("2023-01-01")));
//Виведе { inputDate: '2023-01-01T00:00:00.000Z', dayOfWeek: 'неділя' }

// Завдання 9
/**
 * Функція `getDaysInMonth` повертає кількість днів у місяці вказаної дати.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   daysInMonth: // Кількість днів у місяці.
 * }
 */
function getDaysInMonth(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Збереження початкової дати для виведення  в форматі ISO.
  // Отримання поточного місяця.
  // Отримання поточного року.
  // Створення об'єкта Date для першого дня наступного місяця.
  // Віднімання одного дня від наступного місяця, щоб отримати останній день поточного місяця.
  // Отримання числа останнього дня поточного місяця - це кількість днів у місяці.
  // Повертаємо об'єкт з початковою датою та кількістю днів у місяці.
  if (typeof date.getTime === "function") {
    let beginDate = new Date(date);
    let beginISoDate = Date.parse(date);
    let currMon = beginDate.getMonth();
    let currYear = beginDate.getFullYear();
    let lastDateMon = new Date(currYear, currMon + 1, 1);
    let resultDay = lastDateMon.getDate();
    console.log(currMon, currYear, lastDateMon, resultDay);
  } else {
    console.log("Помилка: вхідне значення має бути об'єктом Date");
  }
}
console.log("Завдання: 9 ==============================");

console.log(getDaysInMonth(new Date("2023-02-01")));
//Виведе { inputDate: '2023-02-01T00:00:00.000Z', daysInMonth: 28 }

// Завдання 10
/**
 * Функція `getFormattedTime` повертає час в форматі 'гг:хх:сс'.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   formattedTime: // Час в форматі 'гг:хх:сс'.
 * }
 */
function getFormattedTime(date) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є date.getTime по типу функція .
  // Якщо date не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Збереження початкової дати для виведення  в форматі ISO.
  // Отримання годин.
  // Отримання хвилин.
  // Отримання секунд.
  // Форматування часу у вигляді 'гг:хх:сс', ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.
  // Повертаємо об'єкт з початковою датою та отформатованим часом.
  if (typeof date.getTime === "function") {
    let beginDate = new Date(date);
    let beginISoDate = Date.parse(date);
    let currHour = beginDate.getHours();
    let currMin = beginDate.getMinutes();
    let currSec = beginDate.getSeconds();
    let result = {};
    result.inputDate = beginDate;
    result.formattedTime = `${currHour
      .toString()
      .padStart(2, "0")}:${currMin
      .toString()
      .padStart(2, "0")}:${currSec.toString().padStart(2, "0")}`;
    // console.log(currHour, currMin, currSec);
    return result;
  } else {
    console.log("Помилка: вхідне значення має бути об'єктом Date");
  }
}
console.log("Завдання: 10 ==============================");

console.log(getFormattedTime(new Date("2023-12-25T09:30:00.000Z")));
//Виведе { inputDate: '2023-12-25T09:30:00.000Z', formattedTime: '12:30:00' }

// Завдання 11
/**
 * Функція `getAge` обчислює вік на підставі вказаної дати народження.
 *
 * birthDate - Об'єкт Date, представляє дату народження.
 *
 * Повертає об'єкт:
 * {
 *   birthDate: // Дата народження в форматі 'гггг-мм-дд'.
 *   age: // Обчислений вік.
 * }
 */
function getAge(birthDate) {
  // Перевірка, чи є вхідне значення об'єктом Date,це можно зробити перевіривши чи є birthDate.getTime по типу функція .
  // Якщо birthDate не є об'єктом Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Отримання поточної дати.
  // Вираховування різницю років між поточною датою та датою народження.
  // Перевірка, чи поточна дата ще не пройшла день народження, тобто поточний місяць має бути менше, а якщо дорівнює дата має бути менше.
  // Якщо день народження ще не пройшов, вік потрібно зменшити на 1.
  // Збереження дати народження для виведення в форматі ISO.
  // Повертаємо об'єкт з датою народження та обчисленим віком.
}
console.log("Завдання: 11 ==============================");

console.log(getAge(new Date("1990-05-15")));
//Виведе { birthDate: '1990-05-15T00:00:00.000Z', age: 33 }

// Завдання 12
/**
 * Функція `compareDates` порівнює дві дати і повертає результат порівняння.
 *
 * date1 - Об'єкт Date.
 * date2 - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   date1: // Перша дата в форматі 'гггг-мм-дд'.
 *   date2: // Друга дата в форматі 'гггг-мм-дд'.
 *   comparison: // Результат порівняння: -1, якщо date1 < date2, 0, якщо date1 === date2, 1, якщо date1 > date2.
 * }
 */
function compareDates(date1, date2) {
  // Перевірка, чи є вхідні значення об'єктами Date.
  // Якщо date1 або date2 не є об'єктами Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Порівняння дат і отримання результату порівняння: -1, якщо date1 < date2, 0, якщо date1 === date2, 1, якщо date1 > date2.
  // Збереження дат для виведення  в форматі ISO.
  // Повертаємо об'єкт з порівнюваними датами та результатом порівняння.
  if (typeof date.getTime === "function") {
    let compDate1 = new Date(date1);
    let compDate2 = new Date(date2);
    let comparison = 0;
    if (compDate1 < compDate2) {
      comparison = -1;
    } else if (compDate1 === compDate2) {
      comparison = 0;
    } else if (compDate1 > compDate2) {
      comparison = 1;
    }
    // console.log(comparison);
    let result = {};
    result.date1 = compDate1;
    result.date2 = compDate2;
    result.comparison = comparison;

    return result;
  } else {
    console.log("Помилка: вхідне значення має бути об'єктом Date");
  }
}
console.log("Завдання: 12 ==============================");

console.log(compareDates(new Date("2023-01-01"), new Date("2022-12-31")));
//Виведе
// {
//   date1: '2023-01-01T00:00:00.000Z',
//   date2: '2022-12-31T00:00:00.000Z',
//   comparison: 1
// }

// Завдання 13
/**
 * Функція `getDaysDifference` обчислює різницю в днях між двома датами.
 *
 * startDate - Початкова дата.
 * endDate - Кінцева дата.
 *
 * Повертає об'єкт:
 * {
 *   startDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   endDate: // Кінцева дата в форматі 'гггг-мм-дд'.
 *   daysDifference: // Різниця в днях між двома датами.
 * }
 */
function getDaysDifference(startDate, endDate) {
  // Перевірка, чи є вхідні значення об'єктами Date.
  // Якщо startDate або endDate не є об'єктами Date, повертаємо рядок
  // "Помилка: вхідне значення має бути об'єктом Date"
  // Отримання часу в мілісекундах для початкової та кінцевої дати.
  // Різниця в мілісекундах між двома датами.
  // Перетворення різниці в мілісекундах у дні поділивши мілісекунди на (1000 * 60 * 60 * 24).
  // Збереження дат для виведення в форматі ISO.
  // Повертаємо об'єкт з початковою та кінцевою датами та різницею в днях.
  if (
    typeof startDate.getTime === "function" ||
    typeof endDate.getTime === "function"
  ) {
    let dzStartDate = new Date(startDate);
    let dzEndDate = new Date(endDate);
    let risnitsa = (dzEndDate - dzStartDate) / (1000 * 60 * 60 * 24);
    let result = {};
    result.startDate = dzStartDate;
    result.endDate = dzEndDate;
    result.daysDifference = risnitsa;
    return result;
  } else {
    console.log("Помилка: вхідне значення має бути об'єктом Date");
  }
}
console.log("Завдання: 13 ==============================");

console.log(getDaysDifference(new Date("2023-01-01"), new Date("2023-01-10")));
//Виведе
// {
//   startDate: '2023-01-01T00:00:00.000Z',
//   endDate: '2023-01-10T00:00:00.000Z',
//   daysDifference: 9
// }
