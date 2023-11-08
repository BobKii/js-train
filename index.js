/*
 * Клас: Musician
 * Статичні поля:
 * ------------------------
 * | Поле   |  Значення   |
 * |--------|-------------|
 * | count  |  0          |
 *
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Тип                |
 * |--------------|---------------------|
 * | #name        |  String             |
 * | #instrument  |  String             |
 *
 * Гетери:
 * ---------------------
 * | Гетер    |  Повертає |
 * |----------|-----------|
 * | name     |  string   |
 * | instrument | string  |
 *
 * Методи:
 * --------------------------
 * | Метод   |  Дія         |
 * |---------|--------------|
 * | play()  | Виводить рядок в консоль |
 */

class Musician {
  // статичне поле count, яке відслідковує кількість музикантів, початкове значення 0
  // Об'являємо приватні поля #name; #instrument;
  static count = 0;
  #name = String();
  #instrument = String();

  constructor(name, instrument) {
    // Конструктор приймає два параметри: name та instrument
    // присвоєння вхідного значення name до приватного поля #name
    this.#name = name;
    // присвоєння вхідного значення instrument до приватного поля #instrument
    this.#instrument = instrument;
    // збільшення значення статичного поля на 1
    this.count++;
  }

  get name() {
    // гетер для приватного поля #name
    // повертає значення приватного поля #name
    return this.#name;
  }

  get instrument() {
    // гетер для приватного поля #instrument
    // повертає значення приватного поля #instrument
    return this.#instrument;
  }

  set name(newName) {
    // сетер для приватного поля #name
    // присвоює нове значення приватному полю #name
    this.#name = newName;
  }

  set instrument(newInstrument) {
    // сетер для приватного поля #instrument
    // присвоює нове значення приватному полю #instrument
    this.#instrument = newInstrument;
  }

  play() {
    // метод, що виводить рядок в консоль <#name> грає на <#instrument>
    return console.log(`${this.#name} грає на ${this.#instrument}`);
  }
}
console.log("================== 1 завдання ==================");
let xxx = new Musician("IT-Graints", "нервАх");
console.log(xxx.play());
/*
 * Клас: Guitarist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Guitarist extends Musician {
  // Об'являємо приватні поля #band;
  #band = String();
  // Конструктор приймає три параметри: name, instrument та band
  // виклик конструктора батьківського класу super з двома параметрами name, instrument
  // присвоєння вхідного значення band до приватного поля #band
  constructor(name, instrument, band) {
    super(name, instrument);
    this.#band = band;
  }
  // гетер для приватного поля #band
  // повертає значення приватного поля #band
  get band() {
    return this.#band;
  }
  // сетер для приватного поля #band
  // присвоює нове значення приватному полю #band
  set band(newBand) {
    this.#band = newBand;
  }
  // метод joinBand, що змінює значення #band, this.#band = band
  joinBand() {
    this.#band = band;
  }

  // перевизначений метод play(), що виводить рядок в консоль
  //${super.name} грає на ${super.instrument} в групі ${this.#band}
  play() {
    return console.log(
      `${super.name} грає на ${super.instrument} в групі ${this.#band}`
    );
  }
}

console.log("================== 2 завдання ==================");
let xxx2 = new Guitarist("IT-Graints", "нервАх", "від 29 травня 2023 року:)");
console.log(xxx2.play());

/*
 * Клас: Bassist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Bassist extends Musician {
  // Об'являємо приватні поля  #band;
  #band = String();
  // Конструктор приймає три параметри: name, instrument та band
  // виклик конструктора батьківського класу super з двома параметрами name, instrument
  // присвоєння вхідного значення band до приватного поля #band
  constructor(name, instrument, band) {
    super(name, instrument);
    this.#band = band;
  }
  // гетер для приватного поля #band
  // повертає значення приватного поля #band
  get band() {
    return this.#band;
  }
  // сетер для приватного поля #band
  // присвоює нове значення приватному полю #band
  set band(newBand) {
    this.#band = newBand;
  }
  // метод joinBand, що змінює значення #band,this.#band = band
  joinBand() {
    this.#band = band;
  }
  // перевизначений метод play(), що виводить рядок в консоль
  //${super.name} грає на ${super.instrument} в групі ${this.#band}
  play() {
    return console.log(
      `${super.name} грає на ${super.instrument} в групі ${this.#band}`
    );
  }
}
console.log("================== 3 завдання ==================");
console.log(Object.getOwnPropertyDescriptor(Bassist), typeof Bassist);
console.log(Object.keys(Bassist), typeof Bassist);

// Тут ми використовуємо Object.defineProperty(), щоб додати сетер band до класу Musician після його створення.
// Перший аргумент - це об'єкт, до якого ми хочемо додати властивість. У цьому випадку це Musician.prototype,
// тому що ми хочемо додати сетер до всіх екземплярів класу Musician.
// Другий аргумент - це ім'я властивості, яку ми хочемо додати. У цьому випадку це 'band'.
// Третій аргумент - це об'єкт, який описує властивість. У цьому випадку ми хочемо додати сетер,
// тому ми вказуємо функцію, яка буде викликатися при спробі встановити властивість 'band'.  this.band = newBand

//Object.defineProperty(Musician.prototype, "band", (this.band = newBand));

let xxx3 = new Bassist("IT-Graints", "нервАх", "від 29 травня 2023 року:)");
console.log(xxx3.play());

/*
 * Клас: Band
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | members     |  array     |
 */

class Band {
  // Об'являємо приватні поля #name; #members;
  #name = String();
  #members = Array();
  /*
   * Створюємо конструктор з двома вхідними параметрами: #name і #members
   * #members - це масив об'єктів, що є екземплярами класу Musician або його нащадків
   */
  constructor(name, members) {
    this.#name = name;
    this.#members = this.members;
  }
  // Створюємо getter для #name, що повертає приватну властивість #name
  get name() {
    return this.#name;
  }
  // Створюємо getter для #members, що повертає приватну властивість #members
  get members() {
    return this.#members;
  }
  // Створюємо сетер для #name
  set name(newName) {
    this.#name = newName;
  }
  // Створюємо метод addMember(), що додає нового учасника до гурту
  addMember(newMember) {
    this.members.push(newMember);
  }
  // Перевіряємо чи Musician є прототипом newMember

  // Ось тут ми використовуємо сетер band класу Musician
  // До приватного поля #members яке є масивом додаємо мового музиканта
  // Якщо ні виводимо в консоль повідомлення Новий учасник повинен бути екземпляром класу Musician
  // Створюємо метод playMusic(), за допомогою forEach перебираємо масив
  //і викликаємо метод play() для кожного учасника гурту
}

console.log("================== 4 завдання ==================");
console.log(Object.getOwnPropertyDescriptor(Band));
console.log(Object.keys(Band), typeof Band);

/*
 * Клас: Performance
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 */
class Performance {
  // Об'являємо приватні поля #band; #location; #date;
  #band = String();
  #location = String();
  #date = Date();
  // Створюємо конструктор з трьома вхідними параметрами: #band, #location та #date
  constructor(band, location, date) {
    this.#band = band;
    this.#location = location;
    this.#date = date;
  }
  // Створюємо getter для #band, що повертає приватну властивість #band
  get band() {
    return this.#band;
  }
  // Створюємо getter для #location, що повертає приватну властивість #location
  get location() {
    return this.#band;
  }
  // Створюємо getter для #date, що повертає приватну властивість #date
  get date() {
    return this.#date;
  }
  // Визначаємо метод info(), що виводить рядок в консоль
  //`Гурт ${this.#band.name} виступить в ${this.#location} ${this.#date.toLocaleDateString()}`
  info() {
    return console.log(
      `Гурт ${this.#band} виступить в ${
        this.#location
      } ${this.#date.toLocaleDateString()}`
    );
  }
}

console.log("================== 5 завдання ==================");
console.log(Object.getOwnPropertyDescriptor(Performance));
console.log(Object.keys(Performance), typeof Performance);

let xxx5 = new Performance("IT-Graints", "платформі", new Date());
console.log(xxx5.info());

/*
 * Клас: Concert
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 * | ticketPrice |  number    |
 */
class Concert extends Performance {
  // Об'являємо приватні поля #ticketPrice;
  // #ticketPrice = Number(); // я бачу - що треба число
  #ticketPrice = String();

  // Створюємо конструктор з чотирма вхідними параметрами: #band, #location, #date та #ticketPrice
  constructor(band, location, date, ticketPrice) {
    // this.band = band;
    // this.location = location;
    // this.date = date;
    super(band, location, date);
    this.#ticketPrice = ticketPrice;
  }
  // використання super для виклику конструктора базового класу
  // Створюємо getter для #ticketPrice, що повертає приватну властивість #ticketPrice
  get ticketPrice() {
    return this.#ticketPrice;
  }
  // Створюємо setter для #ticketPrice, що дозволяє змінити приватну властивість #ticketPrice
  set ticketPrice(newPrice) {
    return (this.ticketPrice = newPrice);
  }
  // Визначаємо метод info(), що виводить рядок в консоль
  //`Гурт ${super.band.name} виступить в ${super.location} ${super.date.toLocaleDateString()}, ціна квитка ${this.#ticketPrice}`
  info() {
    return console.log(
      `Гурт ${super.band} виступить в ${
        super.location
      } ${super.date.toLocaleDateString()}, ціна квитка ${this.#ticketPrice}`
    );
  }
}

console.log("================== 6 завдання ==================");
console.log(Object.getOwnPropertyDescriptor(Concert));
console.log(Object.keys(Concert), typeof Concert);

let xxx6 = new Concert("IT-Graints", "платформі", new Date(), "1000 USDT");
console.log(xxx6.info());

/*
 * Клас: Vocalist
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 */
class Vocalist {
  // Об'являємо приватні поля #name; #band;
  #name = String();
  #band = String();
  // Створюємо конструктор з двома вхідними параметрами: #name та #band
  constructor(name, band) {
    this.name = name;
    this.band = band;
  }
  // Створюємо getter для #name, що повертає приватну властивість #name
  get name() {
    return this.#name;
  }
  // Створюємо getter для #band, що повертає приватну властивість #band
  get band() {
    return this.#band;
  }
  // Створюємо setter для #name, що дозволяє змінити приватну властивість #name
  set name(newName) {
    return (this.#name = newName);
  }
  // Створюємо setter для #band, що дозволяє змінити приватну властивість #band
  set band(newBand) {
    return (this.#band = newBand);
  }
  // Визначаємо метод info(), який виводить інформацію про вокаліста
  // Виводимо інформацію у форматі: "Вокаліст ${this.name} є членом гурту ${this.band}"
  info() {
    return console.log(`Вокаліст ${this.name} є членом гурту ${this.band}`);
  }
}

console.log("================== 7 завдання ==================");
console.log(Object.getOwnPropertyDescriptor(Vocalist));
console.log(Object.keys(Vocalist), typeof Vocalist);

let xxx7 = new Vocalist("ПучкоМудрецЬ", "IT-Graints");
console.log(xxx7.info());

/*
 * Клас: SongWriter
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | #songs       |  array     |
 */
class SongWriter {
  // Об'являємо приватні поля #songs;
  #songs = Array();
  // Створюємо конструктор з одним вхідним параметром: #songs
  constructor(songs) {
    this.#songs = songs;
  }
  // Створюємо getter для #songs, що повертає приватну властивість #songs
  get songs() {
    return this.#songs;
  }
  // Створюємо метод addSong для додавання нової пісні до масиву #songs
  addSong(newSongs) {
    return this.songs.push(newSongs);
  }
  // Визначаємо метод info(), який виводить інформацію про автора пісень
  // Виводимо інформацію у форматі: "Написав ${this.songs.length} пісень"
  info() {
    return console.log(`Написав ${this.songs.length} пісень`);
  }
}

console.log("================== 8 завдання ==================");
console.log(Object.getOwnPropertyDescriptor(SongWriter));
console.log(Object.keys(SongWriter), typeof SongWriter);

let xxx8 = new SongWriter("ПучкоМудрецЬ"); // рахує кількість СИМВОЛІВ ???
console.log(xxx8.info());

/*
 * Клас: LeadSinger
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 * | songs       |  array     |
 */

class LeadSinger extends Vocalist {
  // Створюємо конструктор з двома вхідними параметрами: name, band
  // super(name, band);
}

/*
 * Створення musician екземпляра класу Musician
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "John"           |
 * | instrument  | "Guitarist"      |
 */

/*
 * Створення guitarist екземпляра класу Guitarist
 * ---------------------------------------------------
 * | Властивість |  Значення         |
 * |-------------|-------------------|
 * | name        | "Jimmy Page"      |
 * | instrument  | "гітара"          |
 * | band        | "Led Zeppelin"    |
 */

/*
 * Створення bassist екземпляра класу Bassist
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "Paul McCartney" |
 * | instrument  | "бас-гітара"     |
 * | band        | "The Beatles"    |
 */

// Створення band екземпляру класу Band
/*
 * Створення band екземпляра класу Band
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "The Beatles"    |
 * | members     | [bassist]       |
 */

// Додаємо guitarist до band за допомогою addMember

/*
 * Створення vocalist екземпляра класу Vocalist
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | name        | "Freddie Mercury" |
 * | band        | "Queen"           |
 */

/*
 * Створення songwriter екземпляра класу SongWriter
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */

// Створення performance екземпляра класу Performance
/*
 * ------------------------------------------------------
 * | Властивість |       Значення                       |
 * |-------------|--------------------------------------|
 * | band        | band                                 |
 * | location    | "Liverpool"                          |
 * | date        | new Date('2023-08-01')               |
 */

// використання Object.assign() для успадкування властивостей songwriter для LeadSinger.prototype

/*
 * Створення concert екземпляра класу Concert
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | band        | band             |
 * | location    | "BBC studios"    |
 * | date        | new Date("1994-07-06") |
 * | ticketPrice | 100              |
 */

/*
 * Створення leadsinger екземпляра класу LeadSinger
 * -------------------------------------
 * | Властивість |  Значення         |
 * |-------------|------------------|
 * | name        | "Mick Jagger"    |
 * | band        | "The Rolling Stones" |
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */

// Методи для тестування розкоментувати після виконня всіх завдань
// musician.play();
// guitarist.play();
// bassist.play();
// band.playMusic();
// performance.info();
// concert.info();
// vocalist.info();
// songwriter.info();
// leadsinger.info();

console.log("================== 9 завдання ==== не встигаюЮ  ==============");
console.log("=                                                            =");
console.log("=                                                            =");
console.log("=                                                            =");
console.log("======== схоже день в день робити завдання всі НЕВИХОДЕ  =====");
console.log("== і тому треба щось міняти, скоріше завше почну відставати ==");
console.log("=                                                            =");
console.log("=                                                            =");
console.log("=     всі збіги в назвах - випадкові, нічого особистоГо      =");
console.log("=                                                            =");
console.log("=                                                            =");
