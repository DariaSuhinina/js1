// task 1

// const user = {}

// user.name= "John";

// user.surname= "Smith";

// user.name = "Peter";

// console.log(user.name);

// delete user.name;

// console.log(user.name);


// task 2

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     };
//     return true;
// }

// const shedule = {};

// console.log (isEmpty(shedule));


// task 3

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;

// for( let key in salaries) {
//     sum += salaries[key];
// }

// console.log(sum);


// task 4

// const menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for(let key in obj) {
//         if( typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     console.log(obj[key]);
//     }
// }

// multiplyNumeric(menu);


//task 5

// const user = {
//     name: "John",
//     age: 30,
// }

// for (let key in user) {
//     console.log(key);
// }

// console.log( "age" in user);


// task 6

// const obj = {
//     id: 5,
//     token: 123123,
// }

// const id = "id";
// alert ( obj[id] );


// task 7

// const obj = {
//     id: 5,
//     token: 123123,
// }

// const userId = obj.id;
// console.log(userId);


//task 8

//Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города, строка) 
//со значением «ГородN» и population (населенность города, число) со значением 10 млн.

// const city1 = {
//     name: 'ГородN',
//     population: 1000000,
// }

// const city2 = {
//     name: 'ГородM',
//     population: 1e6,
// }

//Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов

// city1.getName = function() {
//     return this.name;
// }

// city2.getName = function() {
//     return this.name;
// }

// console.log(city1.getName());

//Создайте методы exportStr() у каждого из объектов. Этот метод должен возвращать
//  информацию о городе в формате «name=ГородN\npopulation=10000000\n». Для второго города 
//  будет строка со своими значениями. Примечание: можно 
// обращаться к каждому свойству через цикл for/in, но методы объекта возвращать не нужно

// function exportStr() {
//     return `name=${this.name}/n population=${this.population}/n`;
// }

// city1.exportStr = exportStr;

// city2.exportStr = exportStr;

// console.log (city1.exportStr());

///Создайте глобальную функцию getObj(), которая возвращает this. А у каждого из 
// объектов city1 или city2 метод getCity, который ссылается на getObj. 
// Проверьте работу метода. Примечание: к объекту вызова можно обратиться через this.

// function getObj() {
//     return this.name;
// }

// city1.getObj = getObj;
// city2.getObj = getObj;

// console.log (city1.getObj());

//task 9

// let obj = {
//     method1() {
//         return;
//     },
//     method2() {
//         return;
//     },
//     method3() {
//        document.write('метод3');
//     }
// }

// console.log (obj.method1().method2().method3());
