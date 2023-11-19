console.log("Завдання: 10 ==============================");

function task10() {
  // Створюємо проміс promise1, які вирішуються через 500мс,
  // та повертають як успішне виконання рядок "Promise 1".
  function promise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise 1"), 500);
    });
  }
  // Створюємо проміс promise2, які вирішуються через 200мс,
  // та повертають як успішне виконання рядок "Promise 2".
  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise 2"), 200);
    });
  }
  // Створюємо проміс promise3, які вирішуються через 300мс,
  // та повертають як успішне виконання рядок "Promise 3".
  function promise3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise 3"), 300);
    });
  }
  // Promise.any() приймає масив промісів які ми створили вище
  // і вирішується, як тільки перший із цих промісів вирішується.
  // Якщо проміс виконаний успішно виводимо в консоль дані
  // які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
  let allPromis = [promise1(), promise2(), promise3()];
  Promise.any(allPromis).then((value) => console.log(value));
}

// Викликаємо функцію task10
task10();
