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
