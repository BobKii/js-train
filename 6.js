// Стратегія (Strategy) — це патерн програмування, який дозволяє визначати різні алгоритми та забезпечує можливість обміну їх під час виконання програми.

// Клас Basket представляє кошик для покупок з певною стратегією знижки
class Basket {
  // Створимо конструктор приймає, що стратегію знижки discountPlan як параметр
  // Властивість discountPlan отримує значення стратегії знижки,
  // яке було передано конструктору
  constructor(discountPlan) {
    this.discountPlan = discountPlan;
  }

  // Створюємо новий пустий масив для зберігання товарів (goods) в кошику
  goods = [];

  // Робимо метод addGood, що приймає один параметр - good,
  // який потрібно додати до масиву
  // Додаємо новий товар в масив товарів
  addGood(good) {
    this.goods.push(good);
  }

  // Робимо метод calculateTotalPrice, що розраховує
  // загальну вартість товарів в кошику з урахуванням знижки
  // За допомогою метода reduce ми сумуємо вартість всіх товарів в масиві
  calculateTotalPrice() {
    let price = this.goods.reduce((acc, good) => acc + good.price, 0);
    return this.discountPlan.applyDiscount(price);
  }

  // Застосовуємо знижку до загальної вартості за допомогою
  // метода applyDiscount нашого об'єкта discountPlan
  applyDiscount(price) {
    return price > 100 ? price * 0.9 : price;
  }
}

// Клас RegularDiscountPlan: стратегія знижки для постійних клієнтів
class RegularDiscountPlan extends Basket {
  // Робимо метод applyDiscount, що приймає ціну price як параметр
  // Повертає ціну з урахуванням знижки в 10% price * 0.9
  applyDiscount(price) {
    return price * 0.9;
  }
}

//Клас VIPDiscountPlan: стратегія знижки для VIP клієнтів
class VIPDiscountPlan extends Basket {
  // Робимо метод applyDiscount, що приймає ціну price як параметр
  // Повертає ціну з урахуванням знижки в 20% price * 0.8
  applyDiscount(price) {
    return price * 0.8;
  }
}

// Клас NewClientDiscountPlan: стратегія знижки для нових клієнтів
class NewClientDiscountPlan extends Basket {
  // Робимо метод applyDiscount, що приймає ціну price як параметр
  // Повертає ціну з урахуванням знижки в 5% price * 0.95
  applyDiscount(price) {
    return price * 0.95;
  }
}

console.log("Завдання 6 ====================================");
// Після виконання розкоментуйте код нижче

// Створення нового екземпляру кошика зі стратегією знижки для нових клієнтів
const basket1 = new Basket(new NewClientDiscountPlan());

// Додавання товарів до кошика
basket1.addGood({ name: "Product 1", price: 100 });
basket1.addGood({ name: "Product 2", price: 50 });

// Розрахунок і виведення загальної вартості товарів з урахуванням знижки
console.log(basket1.calculateTotalPrice());
