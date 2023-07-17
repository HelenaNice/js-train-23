// Композит (Composite) — це патерн програмування, який дозволяє створювати структуру об'єктів у вигляді дерева, де кожен об'єкт може бути окремим елементом або групою об'єктів.
// Ця структура називається "деревоподібною" через ієрархію "один-багато".

// Клас ContentContainer використовується для управління списком вкладених елементів контенту
class ContentContainer {
  constructor() {
    this.elements = []; // Початково масив елементів порожній
  }

  addElement(element) {
    this.elements.push(element); // Додаємо елемент у масив
  }

  removeElement(element) {
    const index = this.elements.indexOf(element); // Знаходимо індекс елемента у масиві
    if (index !== -1) {
      this.elements.splice(index, 1); // Видаляємо елемент за індексом, якщо він знайдений
    }
  }
}  

// Клас Message, що є розширенням класу ContentContainer. Використовується для створення повідомлень з текстом.
class Message extends ContentContainer {
  constructor(content) {
    super();
    this.content = content; // Ініціалізуємо властивість content
  }

  display(indentation = "") {
    console.log(`${indentation}Повідомлення: "${this.content}"`);
    for (let element of this.elements) {
      element.display(indentation + "  ");
    }
  }
}
  // Створюємо конструктор класу, який приймає content як параметр та ініціалізує його
  // Створюємо метод display, який виводить ${this.content} для всіх елементів масиву


// Клас Article, що є розширенням класу ContentContainer. Використовується для створення статті з вкладеними елементами.
class Article extends ContentContainer {
  constructor(title) {
    super();
    this.title = title; // Ініціалізуємо властивість title
  }

  display() {
     console.log(`Стаття: "${this.title}"`);
    for (let element of this.elements) {
      element.display("  ");
    }
  }
}

console.log("Завдання 1 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо об'єкт Article з назвою "Навчальна стаття"
const article = new Article("Навчальна стаття");

// Додаємо повідомлення до статті
article.addElement(new Message("Дуже корисна стаття"));
article.addElement(new Message("Дякую за чудовий матеріал!"));

// Додаємо вкладене повідомлення до першого повідомлення в статті
article.elements[0].addElement(new Message("Відповідь: Згоден!"));

// Виводимо інформацію про статтю та всі її вкладені елементи
article.display();

// Виводимо масив вкладених елементів статті
console.log(article.elements);
