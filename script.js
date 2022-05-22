// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, 
// а если не равны - false.

// function getBoolean() {
//   const a = prompt('Put a number A');
//   const b = prompt('Put a number B');
//   alert (a === b);
// }

// getBoolean();

// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет 
// true, а если нет - false.

// function getBoolean() {
//   const a = prompt('Put a number A');
//   const b = prompt('Put a number B');
//   const sum = +a + +b;
//   alert (sum > 10);
// }

// getBoolean();

 // Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
//  Если отрицательное - пусть функция вернет true, а если нет - false.

// function getBoolean() {
//   const a = prompt('Put a number');
//   return (a < 0);
// }

// document.write (getBoolean());

// С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
// let str = '';
// for(let i = 1; i<10; i++) {
//   str +=i;
// }

// document.write(str);

// Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

// let str = '';
// for (let i = 'x'; str.length < 20; ) {
//   str += i;
//   console.log(str);
// }

// С помощью двух вложенных циклов нарисуйте следующую пирамидку:

//  for(let i = 0; i < 10; i++) {
//     let str = '';
//     for(let j = 1; j <= i; j++){
//         str += i;
//     }
//     console.log(str);
//   }

// Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:

// let str = '';
// for (let i = 'xx'; str.length < 10; ) {
//   str += i;
//   console.log(str);
// }

// Давайте выведем на экран следующую пирамидку:

// for(let i = 1; i < 10; i++) {
//     let str = '';
//     for(let j = 1; j = i; j++ ) {
//         str += i;
//     };
//     console.log(str);
// };

// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// let a = ['a', 'b', 'c'];
// let b = [1, 2, 3];
// console.log(a.concat(b));

// Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// const arr1 = ['a','b','c'];
// arr1.push(1, 2, 3)
// document.write(arr1);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// const arr1 = [1,2,3,4,5];
// arr1.splice(1,2);
// document.write(arr1);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// const arr1 = [1,2,3,4,5];
// const arr2 = arr1.slice(1, 4);
// document.write(arr1);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// const arr1 = [1, 2, 3, 4, 5];
// arr1.splice(3, 0, 'a', 'b', 'c');
// document.write(arr1);

 // Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//  const arr1 = [1, 2, 3, 4, 5];
//  arr1.splice(1, 0, 'a', 'b');
//  arr1.splice(6, 0, 'c');
//  arr1.splice(8, 0, 'e');
//  document.write(arr1);

// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// const arr = [3, 4, 1, 2, 7];
// arr.sort();
// document.write(arr);

// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей

//  const obj = {js:'test',
//  jq: 'hello',
//  css: 'world'};
// console.log(Object.keys(obj));

// Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл. 

// const str = '123456';

// let arr = str.split('').reverse();

// console.log(arr.join(''));

// Проверьте, что строка начинается на http://.

// const str = 'http://learn.javascript.ru/array-methods';

// if(str.indexOf('http://') === 0){
//  document.write(true);
// }

// Проверьте, что строка заканчивается на .html

// const str = 'http://learn.javascript.ru/array-methods.html';

// alert(str.endsWith('.html'));

// Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', 
// а если нет - выведите 'нет'.

// const arr = [1, 3, 5];
// alert(arr.includes(5) ? 'yes' : 'no');

//  // Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме 
// себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все 
// числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.

// const num = 31;
// function isIteger(){
//   let isTrue = 0;
//   for (let i = 2; i < 30; i++) {
//     let test = num / i;
//     if(test.toFixed(1).endsWith('0')) {
//     isTrue += 1;
//     } 
//   }
//   if(isTrue > 0) {
//     document.write(true);
//     } else {
//       document.write(false)
//       };
// }

// isIteger();

// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. 
// Если есть - выведите 'да', а если нет - выведите 'нет'

// const arr = [1, 3, 5, 5, 4];
// let isTrue = 0;
// for(let i = 0; i <= arr.length - 1; i++){
//   if(arr[i] === arr[i + 1]){
//     isTrue += 1;
//   }
// };
// document.write(isTrue > 0 ? 'yes' : 'no');

 // Заполните массив следующим образом: в первый элемент 
//  запишите '1', во второй '22', в третий '333' и так далее (два цикла)

//  const arr = [];
//  for(let i = 1; i < 10; i++) {
//    let str = '';
//    for(let j = 1; j <= i; j++){
//      str += i;
//    }
//    arr.push(str);
//  }
//  alert(arr);

//   * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
//   * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
//   * Сложность задачи: 1 of 5
//   * @param {number} arraySize - размер массива
//   * @param {?} value - значение для массива
//   * @returns {Array}

// const fill = (arraySize, value) => {
//     const arr = [];
//     arr.length = arraySize;
//     return (arr.fill(value));
//   }
  
//   const data = 3;
//   const valueToFill = 'a';
//   alert(fill(data, valueToFill));

// Reverse. Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.

// * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
// * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
// * Сложность задачи: 1 of 5
// * @param {Array} array - Массив любых элементов
// * @returns {Array}

//   const reverse = (array) => {
//     const rev = [];
//     for(let i = array.length - 1; i >= 0; i--){
//       rev.push(array[i]);
//     }
//     return rev;
//   }
//   const data = [1, 2, 3];
//   document.write(reverse(data)); // [3, 2, 1]

// Compact. Напишите функцию, которая очищает массив от 
// нежелательных значений, таких как false, undefined, пустые 
// строки, ноль, null.


// const compact = (array) => {
//     const filter = array.filter(item => !!item)
//     return filter;
//   }
  
//   const data = [0, 1, false, 2, undefined, '', 3, null];
//   console.log(compact(data)) // [1, 2, 3[]

// From Pairs. Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. 
// Первое элемент массива - ключ, второй - зачение. (используем метод массива reduce)

// const fromPairs = (array) => array.reduce((obj, item) => {
//   obj[item[0]] = item[1];

//   return (obj)
//   }, {});

  
//  const data = [['a', 1], ['b', 2]];
//  console.log(fromPairs(data)); // { 'a': 1, 'b': 2 }

// Without. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.

// const without = (array, ...arg) => { 
//     let [first, second] = arg;
//     let arr2 = array.filter(item => item != first);
//     let arr3 = arr2.filter(item => item != second);                       
//     return (arr3);
//   }
  
//   const data = [1, 2, 3, 1, 2];
//   console.log(without(data, 1, 2)); // [3]

// Flatten. Напишите функцию, которая преобразует глубокий массив в одномерный. 
// Пожалуйста, не используйте array.flat(), чтобы сделать задачу интереснее. (рекурсия)

пока сделала беез рекурсии

// const flatten = (array) => array.reduce((newArr, item) => newArr.concat(item), []).reduce((newArr, item) => newArr.concat(item), []);

// const data = [1, 2, [3, 4, [5]]];
// console.log(flatten(data)); // [1, 2, 3, 4, 5]

//Unique. Напишите функцию, которая убирает повторяющиеся значения.

// * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
// * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
// * Сложность задачи: 2 of 5
// * @param {Array<string | number>} array - Массив с примитивными значениями
// * @returns {Array}

// const unique = (array) => {
//     let set = new Set(array);
//     let arr =  Array.from(set);
//     return (arr)};
  
//   const data = [1, 2, 1, 2, 3];
//   console.log(unique(data)); // [1, 2, 3]
  
// Chunk. Напишите функцию, которая разделяет массив на части заданного размера.

// const chunk = (array, size) => {
//   let newArr = [];
//   let iteration = Math.ceil(array.length/size);
//   for(let i = 0; i < iteration; i++) {
//     newArr[i] = array.splice(0, size);
//   }
//   return newArr
// }

// const data = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
// // console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]

// IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

// const isEqual = (firstArray, secondArray) => firstArray.join('') === secondArray.join('');

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false

   // Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. 
  //  Массив, конечно же, может быть произвольным.

// const getSum = (arr) => {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++)
//       sum += arr[i][j];
//   }
//   return (sum);
// }

// const array = [[1, 2, 3], [4, 5], [6]];
// console.log(getSum(array));
  
// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. 
// Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый
//  символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// let str = 'заглавная первая буква';
// const getUpper = (string) => string.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
// console.log( getUpper(str));

  // Дана строка, например, '123456'. Сделайте из нее '214365'.

  // const str = '123456';
  // for(let i = 0; i < str.length; i += 2){
  //   [str[i], str[i + 1]] = [str[i + 1], str[i]];
  // }
  // console.log(str);  

  // Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

  // const array = [1, 2, 3, 4];
  // const getItem = (i) => {
  //   console.log (array[i]);
  //   if(i < array.length - 1){
  //     (getItem(i + 1));
  //   }
  // }
  // getItem(0)

  // Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. 
  // И так, пока сумма не станет однозначным числом (9 и менее).

  // let number = 2346865;
  // const getSum = (num) => {
  //   num = String(num);
  //   let result = 0;
  //   for(let item of num){
  //     result += +item;
  //   }
  //   console.log (result);
  //   if(result > 9) {
  //     getSum(result)
  //   }
  // }
  // getSum(number);

  // Сортировка вставками

  // const arr = [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3];
  // for(let i = 1; i < arr.length; i++){
  //   for(let j = i; j >= 0 && arr[j] < arr[j - 1]; j--){
  //     [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
  //   }
  // }
  // console.log(arr);

  // 2 Сортировка пузырьком

  //  const arr = [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3];

  //  for(let i = 0; i < arr.length; i++){
  //    for(let k = 0; arr[k] > arr[k + 1]; k++){
  //     [arr[k], arr[k+1]] = [arr[k+1], arr[k]];
  //    }
  //  }
  //  console.log(arr);

  // 3 Бинарный поиск

  // const array = [1, 2, 7, 13, 15, 16, 18, 24, 28, 29]
  // const getNum = (arr, x) => {
  //   let end = arr.length - 1;
  //   let start = 0;
  //   let middle;
  //   while(start <= end){
  //     middle = Math.round((end - start) / 2) + start;
  //     if(arr[middle] === x){
  //       return middle
  //     } else if(arr[middle] > x){
  //       end = middle - 1;
  //     } else if(arr[middle] < x){
  //       start = middle + 1;
  //     } 
  //   }
  //   return -1;
  // }

  // console.log(getNum(array, 15))

  // 4 Числа Фибоначчи

// function fib(n) {
//   if(n === 1 || n ===2) {
//     return 1
//   } else return (fib(n-1) + fib(n-2));
// };


// alert(fib(3)); // 2
// alert(fib(7)); // 13

// function fib(f) {
//   if(f === 1 || f === 2) {
//     return 1
//   } else if(typeof(f) === 'number'){
//     let n = 1;
//     let m = 1;
//     let x;

//     for(let i = 3; i <= f; i++){
//       x = n + m;
      
//       m = n;
//       n = x;
//     }
//     return x;
//   }
//   return ('некорректное значение');
// };

// console.log(fib('tgftu'));
// console.log(fib(7)); // 13
// console.log(fib(77));

// Напишите функцию range(), принимающую два аргумента: начало и конец диапазона, и возвращающую массив, который содержит все 
// числа из диапазона, включая начальное и конечное. Третий необязательный аргумент функции range() – шаг для построения массива. 
// Убедитесь, что функция range() работает с отрицательным шагом: например, range(5, 2, -1) возвращает [5, 4, 3, 2].

// const range = (start, end, step = 1) => {
//   let arr = [];
//   let j = start;

//   if((end - start) > 0) {
//     for(let i = 0; j <= end; i++){
//       arr[i] = j;
//       j += step;
//     }

//     if(arr[arr.length - 1] !== end) arr.push(end);

//     return arr;
//   } else {
//       for(let i = 0; j >= end; i++){
//         arr[i] = j;
//         j -= Math.abs(step); //модуль числа
//       }

//       if(arr[arr.length - 1] !== end) arr.push(end);

//       return arr;
//     }
// }

// console.log(range(3, 14, 3))

// Реализуйте функцию union(), которая объединит уникальные элементы всех массивов, переданных ей.

// const union = (...arrs) => {
//   let set = new Set();
//   for(let miniArr of arrs){
//     for(let i = 0; i < miniArr.length; i++){
//     set.add(miniArr[i]);
//     }
//   }
//   return Array.from(set)
//   }
  
//   console.log(union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]))

// Создать функцию createMatrix(), принимающую количество строк и количество столбцов матрицы и возвращающее матрицу (массив массивов),
//  заполненную случайными числами в диапазоне от 0 до 100. 

// const createMatrix = (str, column) => {
// const arr = []
// for(let i = 0; i < str; i++){
//   arr[i] = [];

//   for(let j = 0; j < column; j++){
//     arr[i][j] = Math.round(Math.random() * 100);
//   }
// }
// return arr;
// }

// console.log(createMatrix(5, 3))
