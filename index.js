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

/* 
let checkBoxEls = document.querySelectorAll('[type=checkbox]');
console.log(checkBoxEls);
const submitButtonEl = document.querySelector('button[type=submit]');
submitButtonEl.addEventListener('click', e => {
  e.preventDefault();
  for (const element of checkBoxEls) {
    if (element.checked) {
      element.parentNode.innerHTML = '';
      checkBoxEls = document.querySelectorAll('[type=checkbox]');
    }
  }
});
 */

/*
Задача 10
Дан список людей. Сделай возможность сортировки списка по имени и по фамилии.
*/
// const contactsListEl = document.querySelector('.people');
// const sortByNameButton = document.querySelector('#sortByNameButton');
// const sortByLastNameButton = document.querySelector('#sortByLastNameButton');
// const contacts = [...document.querySelectorAll('.person')].map(contact =>
//   contact.textContent.split(' ')
// );

// const contactObj = [];
// contacts.map(contact => {
//   contactObj.push({ name: contact[0], lastName: contact[1] });
// });

// const sortedByName = [...contactObj].sort(function (a, b) {
//   if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//   if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
//   return 0;
// });

// const sortedByLastName = [...contactObj].sort(function (a, b) {
//   if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
//   if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
//   return 0;
// });

// function contactsMarkup(array) {
//   return array
//     .map(element => `<li class="person">${element.name} ${element.lastName}</li>`)
//     .join('');
// }

// sortByNameButton.addEventListener('click', e => {
//   e.preventDefault();
//   contactsListEl.innerHTML = contactsMarkup(sortedByName);
// });

// sortByLastNameButton.addEventListener('click', e => {
//   e.preventDefault();
//   contactsListEl.innerHTML = contactsMarkup(sortedByLastName);
// });

/*
Задача 11
Дан список людей. Сделай фильтр по имени/фамилии.
*/

// const filterInputEl = document.querySelector('.contactsFilter');
// const contactsEl = document.querySelector('.contacts');
// const contactEls = document.querySelectorAll('.contact');

// filterInputEl.addEventListener('input', onFilterChange);

// function onFilterChange(e) {
//   const filter = e.target.value.toLowerCase();

//   const filteredItems = [...contactEls].filter(elem =>
//     elem.textContent.toLowerCase().includes(filter)
//   );
//   const contactsMarkup = filteredItems
//     .map(elem => `<li class="contact">${elem.textContent}</li>`)
//     .join('');

//   contactsEl.innerHTML = contactsMarkup;
// }

/*
Задача 12
Клик по кнопке заменяет символ с первого поля ввода 
на символ со второго поля ввода во всем тексте.
Если одно из полей пустое, вызывай alert с просьбой заполнить их.
*/

/* 
const textEl = document.querySelector('p.text');
const fromEl = document.querySelector('#from');
const toEl = document.querySelector('#to');
const replaceButtonEl = document.querySelector('#replaceButton');

const textContent = textEl.textContent;

replaceButtonEl.addEventListener('click', onClick);

function onClick() {
  if (fromEl.value === '' || toEl.value === '') {
    console.error('Fill up the fields, please!');
  } else {
    console.log(`Changing all "${fromEl.value}" >>> "${toEl.value}"`);
    const newText = textContent.replaceAll(fromEl.value, toEl.value);
    textEl.textContent = newText;
  }
}

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

// /*******************************************************************************************/
//  * ЗАДАЧА 8
//  * Створи перелік справ.
//  * Є  інпут, в який вноситься зміст задачі.
//  * При натисканні на кнопку "Додати" задача додається в список #list.
//  * Поруч з кожною задачею знаходится кнопка "Видалити", щоб можна було
//  * видалити цю задачу із списку.
//  * Список з задачами має бути доступним післе перезавантаження сторінки.
//  */

const formRef = document.querySelector('#task-form');
const listRefs = document.querySelector('#task-list');

formRef.addEventListener('submit', onSubmit);
onLoad();

listRefs.addEventListener('click', event => {
  const deleteButtonEl = [...document.querySelectorAll('button.delete-button')];
  if (!deleteButtonEl.includes(event.target)) {
    return;
  }
  event.target.parentNode.remove();
  absolutelyComplitelyDeleteFcknTaskFromFcknStorage();
});

function onLoad() {
  const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
  createElements(taskList);
  //addHandlers();
}

function createElements(arr) {
  const markUp = arr
    .map(
      task =>
        `<li class="task-element">
          <span class="task-text">${task}</span> 
          <button class="delete-button" type="button">Видалити</button>
        </li>`
    )
    .join('');
  listRefs.insertAdjacentHTML('beforeend', markUp);
}

function onSubmit(event) {
  event.preventDefault();
  const input = [formRef.taskName.value];
  createElements(input);
  updateStorage(...input);
  //addNewEventListener();
}

function updateStorage(element) {
  const dataFromLS = JSON.parse(localStorage.getItem('taskList')) || [];
  localStorage.setItem('taskList', JSON.stringify([...dataFromLS, element]));
}

function absolutelyComplitelyDeleteFcknTaskFromFcknStorage() {
  const taskListElements = document.querySelectorAll('.task-text');
  const tasks = [...taskListElements].map(task => task.textContent);
  localStorage.setItem('taskList', JSON.stringify(tasks));
}

// function addNewEventListener() {
//   const newTask = listRefs.lastElementChild;
//   newTask.addEventListener('click', () => {
//     newTask.remove();
//     absolutelyComplitelyDeleteFcknTaskFromFcknStorage();
//   });
// }

// function addHandlers() {
//   const deleteButtonEl = document.querySelectorAll('.delete-button');
//   if (!deleteButtonEl) {
//     console.log('No such elements!');
//     return;
//   } else {
//     deleteButtonEl.forEach(elem =>
//       elem.addEventListener('click', () => {
//         elem.parentNode.remove();
//         absolutelyComplitelyDeleteFcknTaskFromFcknStorage();
//       })
//     );
//   }
// }

/***********************************************************************************************/
//  * ЗАДАЧА 2
//  * - Используй prompt и возвращай значение оттуда.
//  * - Создай функцию, внутри которой будет промис.
//  * Если значение не является числом, отклоняй промис и логируй "error".
//  * Если значение четное, решай промис и возвращай "even" через 1 секунду.
//  * Если значение не четное, решай промис и возвращай "odd" через 2 секунды.

//  * ЗАДАЧА 3
//  *
//  * Если имэйл и пароль пользователя совпадают, при сабмите сохраняй данные с формы
//  * в локальное хранилище и меняй кнопку login на logout и делай поля ввода
//  * недоступными для изменения.
//  * При перезагрузке страницы, если пользователь залогинен, мы должны видеть logout-кнопку
//  * и недоступные для изменения поля с данными пользователя.
//  * Клик по кнопке logout возвращает все в первоначальный вид и удаляет данные пользователя
//  * с локального хранилища.
//  *
//  * Если введенные данные не совпадают с нужными данными, вызывать аlert и
//  * уведомлять об ошибке.

//  * ЗАДАЧА 4
//  * Кнопка increment должна каждую секунду увеличивать значение на 1
//  * Кнопка decrement должна каждую секунду уменьшать значение на 1

//  * ЗАДАЧА 5
//  * Переделай код так, чтобы все данные собирались
//  * единовременно и приходили в виде массива

// const getData = () =>
//   new Promise((res) => {
//     setTimeout(() => {
//       const data = 1;
//       console.log(data);
//       res(data);
//     }, 1000);
//   });

// const getNewData = () =>
//   new Promise((res) => {
//     setTimeout(() => {
//       const data = 2;
//       console.log(data);
//       res(data);
//     }, 1000);
//   });

// const getAnotherData = () =>
//   new Promise((res) => {
//     setTimeout(() => {
//       const data = 3;
//       console.log(data);
//       res(data);
//     }, 1000);
//   });

// const getLastData = () =>
//   new Promise((res) => {
//     setTimeout(() => {
//       const data = 4;
//       console.log(data);
//       res(data);
//     }, 1000);
//   });

// const arr = [];

//  * ЗАДАЧА 6
//  * Функция startTimer должна логать каждый элемент массива раз в секунду.
//  * Когда очередь дойдет до последнего элемента массива, продолжить логать в обратном порядке
//  * до тех пор пока не дойдет до первого элемента, затем остановить процесс.

//  * ЗАДАЧА 7
//  * Функция countWithDelay принимает принимает 3 аргумента:
//  * 1) количество секунд перед тем как сработает ф-ция logCount
//  * 2) сколько раз должна отработать logCount
//  * 3) задержка между вызовами ф-ции
//  *
//  * logCount должна логировать кол-во вызовов
