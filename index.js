// 1. Напишіть скрипт, який для об'єкта user, послідовно:
//1 додасть властивість mood зі значенням 'happy'
//2 замінить значення властивості hobby на 'skydiving'
//3 замінить значення властивості premium на false
//4 використовуючи Object.keys() и for...of, виведе зміст об'єкта users у форматі:
//name: John
//age: 20
//hobby: skydiving
//premium: false
//mood: happy

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// console.log(user);
// user.hobby = 'skydiving';
// console.log(user);
// user.premium = false;
// console.log(user);

// for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`)
// }

//2. Є об'єкт, в якому зберігаються зарплати команди. Напишіть функцію getTotalSalary, яка буде повертати загальну суму зарплат. Якщо об'єкт пустий, то функція має повернути 0

// const salaries = {
//   mango: 100,
//   poly: 160,
//   ajax: 1470,
// };

// function getTotalSalary() {
//   const allSalaries = Object.values(salaries);
//   let totalSalary = 0;
//   for (let i = 0; i < allSalaries.length; i += 1) {
//     totalSalary += allSalaries[i];
//   }

//   return totalSalary;
// }

// console.log(getTotalSalary());

//3. Напишіть фукцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і рядок з назвою каменю.
//Функція обчислює і повертає загальну вартість каменів з таким іменем

// const stones = [
//   { name: "emerald", price: 1300, quantity: 4 },
//   { name: "diamond", price: 2700, quantity: 6 },
//   { name: "sapphire", price: 400, quantity: 7 },
//   { name: "rubble", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {

//    return stones.reduce((totalPrice, element,) => {

//     if (element.name ===  stonesName) {

//         return totalPrice += element.price*element.quantity
//     }

// return totalPrice;

//    }, 0)
// };
// console.log(calcTotalPrice(stones, "sapphire"));

//4. Створіть об'єкт calculator з трьома методами
//read(a, b) - приймає два аргумента та зберігає їх як властивості об'єкта під ключами prop1 та prop2
//sum() перевіряє чи присутні  властивості prop1/prop2 та повертає їх суму, в противному випадку повертає null
//mult() перевіряє чи присутні  властивості prop1/prop2 та повертає їх добуток, в противному випадку повертає null
// Не забудьте, що математичні оператори працюють коректно тільки з числовими значеннями

// const calculator = {
//   read(a, b) {
//     this.prop1 = a;
//     this.prop2 = b;
//   },

//   sum() {
//     if( Number(this.prop1)  && Number(this.prop2)) {
//         return  Number(this.prop1) + Number(this.prop2)
//     } else {
//         return null;
//     }

//   },
//   mult() {
//     if( Number(this.prop1)  && Number(this.prop2)) {
//         return Number(this.prop1) * Number(this.prop2)
//     } else {
//         return null;
//     }

//   },
// };
// calculator.read(2, "5");

// console.log(calculator.sum());

// console.log(calculator.mult());

// task5

//5. Напишіть функцію updateObject, яка приймає об'єкт та ключ
//і повертає новий об'єкт без вказаної властивості
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b') => {a: 1, c: 3}

// function updateObject(object, key) {
// const newObject = {...object}
//      delete newObject[key];
//      return newObject;
// };

// variant2
// function updateObject(object, nameKey) {
//    const keys = Object.keys(object);
//    const newObject = {};
//    for(const key of keys) {
//     if (key !== nameKey) {
//         newObject[key] = object[key];
//     }
//     }
//     return newObject
//      };

// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b'));

// // {a: 'a', c: 'c'}

//6. Напишіть функцію updateObject, яка приймає об'єкт та перелік ключів
//і повертає новий об'єкт без вказаних властивостей
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b', 'c') => {a: 1}

// / 7. Напишіть функцію changeObject, яка приймає як параметр об'єкт
// та повертає масив, в якому кожен елемент це масив, який складається з двох елементів [key, value]
// Очікуваний результат console.log(changeObject({ a: 1, b: 2, c: 3 })) // [["a", 1], ["b", 2], ["c", 3]]
// const user = {
//   name: 'John',
//   surName: 'Stones',
//   age: 20,
//   hobby: 'tenis',
//   haveCar: true,
//   merried: false,
// }

// 8. Напиши скрипт керування особистим кабінетом інтернет банку.
//Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією трансакцій
//Типів трансакцій усього два. Можна поповнити рахунок або списати з нього гроші.
//
// const TYPES_TRANSACTION = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// }
//Кожна трансакція має мати властивості: id, type, amount.

// {
//     const account = {
//       //поточний баланс рахунку
//       balance: 0,

//       //Історія трансакцій
//       transactions: [],

// //Метод приймає суму та тип трансакції і створює та додає у transactions об'єкт трансакції за зразком {id, type, amount}
// createTransaction(type, amount) {
//     return {
//       id,
//       type,
//       amount,
//     }
//   },

//Метод відповідає за додавання суми до балансу.
//Приймає суму трансакції.
//Викликає createTransaction для створення об'єкта трансакції після чого додає його в історію трансакцій
//   deposit(amount) {},

//Метод відповідає за списання коштів з балансу.
//Приймає суму трансакції, викликає createTransaction для створення об'єкту трансакції
//післе чого додає його в історію трансакцій
//Якщо amount більше ніж поточний баланс, виводимо повідомлення про те, що недостатньо коштів на рахунку
//   withdraw(amount) {},

//Метод повертає поточний баланс
//   getBalance() {},

//   //Метод шукає та повертає об'єкт трансакції по id
//   getTransactionDetails(id) {},

//   //Метод повертає загальну суму трансакції певного типу із всієї історії трансакцій
//   getTotalSumByType(type) {},
// }
// }

// Задача 1
// Нажатие на кновку "SHOW ME" должно выводить
// значение с поля ввода (смотрите на элементы в html-разметке)

// const input = document.querySelector("#alertInput");
// const button = document.querySelector("#alertButton");

// button.addEventListener("click", () => console.log(input.value));

// Задача 2
// По нажатию на кнопку "SWAP ME" осуществляется обмен содержимым между двумя инпутами.
// можете понажимать на нее несколько раз или вручную сменить содержимое инпутов.
// */

// const swapBtn = document.querySelector("#swapButton");
// const leftInput = document.querySelector("#leftSwapInput");
// const rightInput = document.querySelector("#rightSwapInput");

// swapBtn.addEventListener("click", swapBtnHandler);

// function swapBtnHandler() {
//   const acc = leftInput.value;
//   leftInput.value = rightInput.value;
//   rightInput.value = acc;
// }

/*
Задача 3
Кнопка "Скрыть" прячет текст и заменяет название кнопки на
"Раскрыть", при повторном нажатии текст снова становится доступен
и кнопка принимает начальный вид.
*/

// const inputEl = document.querySelector("#passwordInput");
// const buttonEl = document.querySelector("#passwordButton");

// buttonEl.addEventListener("click", () => {
//   //   if (inputEl.type !== "password") {
//   //     inputEl.type = "password";
//   //     buttonEl.textContent = "Раскрыть";
//   //   } else {
//   //     inputEl.type = "text";
//   //     buttonEl.textContent = "Скрыть";
//   //     }

//   inputEl.type !== "password"
//     ? ((inputEl.type = "password"), (buttonEl.textContent = "Раскрыть"))
//     : ((inputEl.type = "text"), (buttonEl.textContent = "Скрыть"));
// });
// Задача 4
// Кнопка "Уменьшить" делает квадрат меньше на 10 пикселей, кпопка "Увеличить" - больше на 10 пикселей.

{
  /* <div>
    <p class="taskTitle">ЗАДАЧА 4</p>
    <div id="box"></div>
    <button id="decrease">Уменьшить</button>
    <button id="increase">Увеличить</button>
</div> */
}

// const buttonDecrease = document.querySelector("#decrease");
// const buttonIncrease = document.querySelector("#increase");
// const box = document.querySelector("#box");
// box.style.backgroundColor = "#000";

// buttonDecrease.addEventListener("click", () => {
//   box.style.width = `${box.offsetWidth - 10}px`;
//   box.style.height = `${box.offsetWidth - 10}px`;

// });

// buttonIncrease.addEventListener("click", () => {
//   box.style.width = `${box.offsetWidth + 10}px`;
//   box.style.height = `${box.offsetWidth + 10}px`;

// });

// Задача 8
// При клике на каждую из кнопок суммируются значения с data-атрибутов.
// По нажатию на кнопку "Вывести результат" выводится сумма значения, а также статистика с
// информацией о том, какая кнопка была нажата сколько раз.

// const box = document.querySelector(".statList");
// const resultButton = document.querySelector("#resultButton");

// let sum = 0;

// box.addEventListener("click", onButtonClick);
// resultButton.addEventListener("click", () => console.log(sum, obj));

// function onButtonClick(e) {
//   sum += Number(e.target.dataset.number);

//   if (obj.hasOwnProperty(e.target.textContent)) {
//     obj[e.target.textContent] += 1;
//   } else {
//     obj[e.target.textContent] = 1;
//   }
// }

// const obj = {};

/*
Задача 9
Удали из списка те элементы, которые отмечены.
*/

// const formRef = document.querySelector(".checkboxForm");
// const filtrBtnRef = document.querySelector("button[type='submit']");
// const checkBoxesListRef = [
//   ...document.querySelectorAll(".checkboxWrapper input[type='checkbox']"),
// ];

// formRef.addEventListener("submit", onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();

//   checkBoxesListRef.forEach((item) => {
//     if (item.checked) {
//       item.closest(".checkboxWrapper").remove();
//     }
//   });
// }

/*
Задача 10
Дан список людей. Сделай возможность сортировки списка по имени и по фамилии.
*/

/*
Задача 11
Дан список людей. Сделай фильтр по имени/фамилии.
*/

/*
Задача 12
Клик по кнопке заменяет символ с первого поля ввода 
на символ со второго поля ввода во всем тексте.
Если одно из полей пустое, вызывай alert с просьбой заполнить их.
*/

/*
Задача 13
Круг должен изчезать при наведении на него.
При этом позиция соседних кругов должна оставаться прежней.
*/

//  ЗАДАЧА 1
//  Перероби функцію на проміс таким чином, щоб проміс повертав значення
//  через 2 секунди після виклику функції

// function greet() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("hello world"), 2000);
//   });
// }

// greet()
//   .then((res) => console.log(res))
//   .catch((reject) => console.log(reject));
