console.log("Завдання: 9 ==============================");

function task9() {
  // Створюємо функцію fetchWithError, яка симулює помилку
  //при запиті до сервера.

  function fetchWithError() {
    // Створюємо константу errorMessage в яку записуємо
    //рядок "Помилка при з'єднанні з сервером"
    const errorMessage = "Помилка при з'єднанні з сервером";

    // Використовуємо Promise.reject(errorMessage)
    // для створення вже відхиленого промісу.
    let result = Promise.reject(new Error(errorMessage));
    return result;
  }

  // Викликаємо функцію fetchWithError
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
  fetchWithError()
    .then((value) => console.log(value))
    .catch((Err) => console.log(Err))
    .finally(() => console.log(`==  Виконання завдання 9 заверщено  ==`));
}

// Викликаємо функцію task10
task9();
