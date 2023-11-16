// Ланцюжок відповідальності (Chain of Responsibility) — це паттерн програмування, який дозволяє передавати запити послідовно через ланцюжок обробників, кожен з яких може обробити або передати запит далі.

//AuthProcessor клас для обробки аутентифікації.
class AuthProcessor {
  // setNextProcessor Метод, який приймає наступний обробник
  //(processor) в ланцюгу.
  // Зберігає наступний обробник в поточному об'єкті.
  // Повертає переданий обробник,
  //щоб дозволити подальше ланцюжкове викликання.
  setNextProcessor(processor) {
    this.nextProcessor = processor;
    return processor;
  }
  //validate Метод для перевірки аутентифікації.
  //Приймає ім'я користувача (username) і пароль (passkey).
  // Перевіряє, чи є наступний обробник в ланцюгу.
  // Якщо так, передає запит на перевірку аутентифікації
  //наступному обробнику,
  //this.nextProcessor.validate(username, passkey),
  //та повертаємо результат.
  // Якщо наступного обробника немає, повертає false,
  //сигналізуючи про невдалу аутентифікацію.
  validate(username, passkey) {
    if (this.nextProcessor) {
      return this.nextProcessor.validate(username, passkey);
    } else {
      return false;
    }
  }
}

// TwoStepProcessor Клас обробника, який перевіряє двофакторний код. Наслідує базовий клас AuthProcessor.
class TwoStepProcessor extends AuthProcessor {
  // Метод для перевірки аутентифікації validate.
  //Перевіряє ім'я користувача (username), пароль (passkey)
  //і викликаємо метод isValidTwoStepCode().
  // Якщо username дорівнює "john", passkey дорівнює "password"
  // та метод isValidTwoStepCode() повертає true,
  //аутентифікація успішна.
  // Виводить повідомлення про успішну аутентифікацію:
  //Вхід дозволено з двофакторною аутентифікацією,
  //і повертає true.
  // Якщо дані не вірні, запит на аутентифікацію передається
  //наступному обробнику в ланцюгу,
  //super.validate(username, passkey).
  validate(username, passkey) {
    if (
      username === "john" &&
      passkey === "password" &&
      this.isValidTwoStepCode()
    ) {
      console.log("Вхід дозволено з двофакторною аутентифікацією");
      return true;
    } else {
      return super.validate(username, passkey);
    }
  }

  // isValidTwoStepCode Метод для перевірки
  //двофакторного коду,який повертає true.
  isValidTwoStepCode() {
    return true;
  }
}

// RoleProcessor Клас обробника, який перевіряє ролі
//користувача. Наслідує базовий клас AuthProcessor.
class RoleProcessor extends AuthProcessor {
  // validate Метод для перевірки аутентифікації.
  //Перевіряє роль користувача.
  // Якщо роль користувача - гість (guest),
  //аутентифікація успішна.
  // Виводить повідомлення про успішну аутентифікацію
  //Вхід дозволено з роллю гостя, і повертає true.
  // Якщо роль не відповідає, запит на аутентифікацію
  //передається наступному обробнику в ланцюгу.
  validate(username, passkey) {
    if (username === "guest") {
      console.log("Вхід дозволено з роллю гостя");
      return true;
    } else {
      return super.validate(username, passkey);
    }
  }
}

// CredentialsProcessor Клас обробника,
//який перевіряє облікові дані користувача.
//Наслідує базовий клас AuthProcessor.
class CredentialsProcessor extends AuthProcessor {
  //validate Метод для перевірки аутентифікації.
  //Перевіряє облікові дані користувача.
  // Якщо облікові дані вірні, username=admin,
  //та passkey=admin123, аутентифікація успішна.
  // Виводить повідомлення про успішну аутентифікацію
  //Вхід дозволено за обліковими даними, і повертає true.
  // Якщо облікові дані не вірні, запит на аутентифікацію
  //передається наступному обробнику в ланцюгу.
  validate(username, passkey) {
    if (username === "admin" && passkey === "admin123") {
      console.log("Вхід дозволено за обліковими даними");
      return true;
    } else {
      return super.validate(username, passkey);
    }
  }
}

// Клас Builder для створення об'єкта ланцюга обробників.
class ProcessorBuilder {
  // Конструктор який не приймає вхідні значення
  //Властивість firstProcessor, що зберігає перший обробник
  //у ланцюгу, за замовчуванням дорівнює null.

  //Властивість lastProcessor, що зберігає останній обробник
  //у ланцюгу, за замовчуванням дорівнює null.
  constructor() {
    this.firstProcessor = null;
    this.lastProcessor = null;
  }

  // Метод add для додавання нового обробника в ланцюг.
  // Якщо це перший обробник, він зберігається як
  //перший і останній.
  // Якщо це не перший обробник, він додається в кінець ланцюга,
  // і стає останнім.
  // Повертає this.
  add(processor) {
    if (!this.firstProcessor) {
      this.firstProcessor = processor;
      this.lastProcessor = processor;
    } else {
      this.lastProcessor.setNextProcessor(processor);
      this.lastProcessor = processor;
    }
    return this;
  }

  // Метод create для створення ланцюга обробників.
  // Повертає перший обробник у ланцюгу.
  create() {
    return this.firstProcessor;
  }
}
console.log("Завдання 6 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо Builder для ланцюга обробників.
const processorBuilder = new ProcessorBuilder();

// Додаємо обробники в ланцюг за допомогою builder'а.
const processor = processorBuilder
  .add(new CredentialsProcessor())
  .add(new TwoStepProcessor())
  .add(new RoleProcessor())
  .create();

// Перевіряємо користувачів за допомогою нашого ланцюга обробників.
processor.validate("admin", "admin123"); // Вхід дозволено за обліковими даними
processor.validate("john", "password"); // Вхід дозволено з двоступінчастою аутентифікацією
processor.validate("guest", "guest123"); // Вхід дозволено з роллю гостя
processor.validate("user", "password"); // Вхід заборонено
