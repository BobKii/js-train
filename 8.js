console.log("Завдання: 8 ==============================");

function task8() {
  // Створюємо функцію fetchFakeData, яка симулює запит до сервера
  // та повертає "дані" через Promise.resolve().
  // Створюємо fakeData константу з данними { name: "John",age: 30}
  // Використовуємо Promise.resolve(fakeData) для того, щоб створити
  // вже зарезолвлений проміс.
  function fetchFakeData() {
    const fakeData = { name: "John", age: 30 };
    let result = Promise.resolve(fakeData);
    console.log(result);
    return result;
  }
  // Викликаємо функцію fetchFakeData
  // Якщо проміс виконаний успішно виводимо в консоль дані
  // які він повертає

  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
  fetchFakeData()
    .then((value) => console.log(value))
    .catch((Err) => console.log(Err))
    .finally(() => console.log(`==  Виконання завдання 8 заверщено  ==`));
}

// Викликаємо функцію task8
task8();
