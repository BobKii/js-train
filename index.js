/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */
console.log(`======= завдання 1 ==== ${new Date()}================`);
// Створюємо функцію конструктор Vehicle.
function Vehicle(brand, model, year, mileage) {
  //  Записуєм в this.brand значення аргументу brand,
  //в this.model значення аргументу model і так далі зі всіми аргументами

  // console.debug(this.brand(), brand);
  console.log(new Date()); // Хотел потестировать
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;

  this.toString = function () {
    return this.brand + " " + this.model + " " + this.year;
  };
  this.valueOf = function () {
    return this.mileage;
  };
  return Object.create(Vehicle, {
    brand: { value: brand },
    model: { value: model },
    year: { value: year },
    mileage: { value: mileage },
  });
  // return this.brand + " " + this.model + " " + this.year;
  //// console.log(this.brand + " " + this.model + " " + this.year);
}
//// let testArg = { brand: "111", model: "222", year: "333", mileage: "444" };
//// let myCheck = Vehicle.bind(testArg);
let myCheck = new Vehicle("111", "222", "333", "444");
console.log(myCheck, Vehicle.length);

// Рядковому представленю Vehicle призначаємо функцію яка повертає рядок: <brand> <model> <year>

// valueOf - це метод, який використовується JavaScript для конвертації об'єкта в примітивне значення.
// Ми перевизначаємо його тут, щоб він повертав this.mileage.

/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */
console.log(`======= завдання 2 ==== ${new Date()}================`);
//Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
function Car(brand, model, year, mileage, fuelType, speed) {
  // Викликаємо конструктор Vehicle за допомогою apply, передаємо в нього this, [brand, model, year, mileage].
  Vehicle.apply(this, [brand, model, year, mileage]);
  //  Записуєм в this.fuelType значення аргументу fuelType, в this.speed значення аргументу speed
  this.fuelType = fuelType;
  this.speed = speed;

  this.toString = function () {
    console.log("Виклик ,toString ---> from -- Car");
    return (
      this.brand + " " + this.model + " " + this.year + "-" + this.fuelType
    );
  };

  this.accelerate = function (xSpeed) {
    this.speed = speed + xSpeed;
    return console.log(
      `Автомобіль ${brand} ${model} прискорився до швидкості ${speed} км/год`
    );
  };

  this.brake = function (xSpeed) {
    this.speed = speed - xSpeed;
    return console.log(
      `Автомобіль ${brand} ${model} зменшив до швидкості ${speed} км/год`
    );
  };
}

// Ми можемо перевизначити методи з Vehicle в Car.
// Рядковому представленю прототипу Car призначаємо функцію яка повертає рядок: <brand> <model> <year> - <fuelType>.

// Cтворюємо метод accelerate для прискорення швидкості прототипу Car,
//збільшує this.speed на передане число та виводить рядок в консоль:
//Автомобіль <brand> <model> прискорився до швидкості <speed> км/год

// Метод brake для гальмування прототипу Car,зменшує this.speed на передане число
//та виводить рядок в консоль в консоль: Автомобіль <brand> <model> зменшив до швидкості <speed> км/год

// Створюємо новий екземпляр об'єкта Car
/*
 * Екземпляр об'єкту: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Значення           |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */
console.log(console.log(Object.getOwnPropertyDescriptors(Car)));
let newExmplCar = new Car();
console.log(console.log(Object.getOwnPropertyDescriptors(newExmplCar)));
newExmplCar.brand = "Audi";
newExmplCar.model = "A6";
newExmplCar.year = 2018;
newExmplCar.mileage = 30000;
newExmplCar.fuelType = "Petrol";
newExmplCar.speed = 0;
newExmplCar.toString();
newExmplCar.accelerate(50);
newExmplCar.brake(20);
// console.log(console.log(Object.getOwnPropertyDescriptors(newExmplCar)));
console.log(newExmplCar.length);

// Викличемо функції toString та valueOf об'єкта car

// Використовуємо методи для прискорення та передаємо 50

// Використовуємо методи для гальмування та передаємо 20

console.log(`======= завдання 3 ==== ${new Date()}================`);
/*
 * Функція конструктор Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

// Конструктор Truck наслідуємо Vehicle викликавши його в конструкторі з call
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  // Викликаємо Vehicle.call та передаємо в нього: this, brand, model, year, mileage
  //  Записуєм в this.color значення аргументу color, в this.engineType значення аргументу engineType
  //і так далі зі всіми аргументами
  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;
  Vehicle.call(this, brand, model, year, mileage);
  this.specific = function (mValue) {
    if (mValue > this.towingCapacity) {
      console.log("Навантаження занадто важке для буксирування");
    } else {
      console.log("Тягнення навантаження...");
    }
  };
}

// Додатковий метод specific для прототипу Trucks, примає число якщо воно більше towingCapacity
//виводить рядок в консоль: Навантаження занадто важке для буксирування,
//якщо ні то рядок Тягнення навантаження...

// Створюємо новий екземпляр об'єкта Truck

let myTruck = new Truck();
myTruck.brand = "Toyota";
myTruck.model = "Tundra";
myTruck.year = 2019;
myTruck.mileage = 20000;
myTruck.color = "Red";
myTruck.engineType = "V8";
myTruck.fuelType = "Gasoline";
myTruck.transmissionType = "Automatic";
myTruck.doors = 4;
myTruck.weight = 5600;

/*
 * Екземпляр об'єкту: myTruck
 * Властивості:
 * ---------------------------------------------------
 * | Властивість      | Значення                     |
 * |------------------|------------------------------|
 * | brand            | "Toyota"                     |
 * | model            | "Tundra"                     |
 * | year             | 2019                         |
 * | mileage          | 20000                        |
 * | color            | "Red"                        |
 * | engineType       | "V8"                         |
 * | towingCapacity   | 10000                        |
 * | fuelType         | "Gasoline"                   |
 * | transmissionType | "Automatic"                  |
 * | doors            | 4                            |
 * | weight           | 5600                         |
 */

// Викликаємо метод tow з вагою меншою за towingCapacity
myTruck.specific(9000);
// Викликаємо метод tow з вагою більшою за towingCapacity
myTruck.specific(99000);

// Додаємо метод drive для прототипу Car, який збільшує kilometers на передане число,
// та виводить Подорожуємо <kilometers> кілометрів у <brand> <model>.

// Використовуємо bind для зв'язування методу drive з конкретним об'єктом car.
// Це створює нову функцію, в якій this постійно встановлено на car, незалежно від того, як функцію викликають.
// Викликаємо функцію зі значенням 100,

console.log(`================ завдання 4 ==== ${new Date()} ================`);

/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  // Перевіряємо, чи функцію було викликано з new, якщо ні виволимо помилку "Конструктор має бути викликаний з 'new'"
  // Викликаємо Car.call та передаємо в нього this, brand, model, year, mileage
  //  Записуєм в this.batteryCapacity значення аргументу batteryCapacity
  if (!new.target) {
    return new ElectricCar(brand, model, year, mileage, batteryCapacity);
  } else {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    Car.call(this, brand, model, year, mileage);
  }
  this.batteryCapacity = batteryCapacity;
  this.toString = function () {
    return (
      this.brand +
      " " +
      this.model +
      " " +
      this.year +
      " - Батарея: " +
      this.batteryCapacity +
      " kWh"
    );
  };
}

// Перевизначаємо toString для прототипу ElectricCar він має повертати
// <brand> <model> <year> - Батарея: <batteryCapacity> kWh

// Створюємо новий екземпляр ElectricCar
/*
 * Екземпляр об'єкту: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість     | Значення          |
 * |-----------------|-------------------|
 * | brand           | Tesla             |
 * | model           | Model S           |
 * | year            | 2020              |
 * | mileage         | 10000             |
 * | batteryCapacity | 100               |
 */
ElectricCar.brand = "Tesla";
ElectricCar.model = "Model S";
ElectricCar.year = 2020;
ElectricCar.mileage = 10000;
ElectricCar.batteryCapacity = 100;
console.log(console.log(Object.getOwnPropertyDescriptors(ElectricCar)));
let newElectricCar = new ElectricCar();
console.log(console.log(Object.getOwnPropertyDescriptors(newElectricCar)));
// (brand = "Tesla"),
// (model = "Model S"),
// (year = 2020),
// (mileage = 10000),
// (batteryCapacity = 100)

newElectricCar.toString();
// Викликаємо метод toString об'єкту tesla та виводимо в консоль
