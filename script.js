// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, 
// а если не равны - false.

// function getBoolean() {
//   const a = prompt('Put a number A');
//   const b = prompt('Put a number B');
//   alert ((a == b)? true : false);
// }

// getBoolean();

// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет 
// true, а если нет - false.

// function getBoolean() {
//   const a = prompt('Put a number A');
//   const b = prompt('Put a number B');
//   const sum = +a + +b;
//   alert ((sum > 10)? true : false);
// }

// getBoolean();

 // Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
//  Если отрицательное - пусть функция вернет true, а если нет - false.

// function getBoolean() {
//   const a = prompt('Put a number');
//   return ((a < 0)? true : false);
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

//  // Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей
//  не работает
//  const obj = {js:'test',
//  jq: 'hello',
//  css: 'world'};
// const arr = [obj]
// const arr1 = arr.map(item => obj.item);
// document.write(arr1);

// Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл. 

// const str = '123456';
// // const arr = [str];
// let arr = Array.from(str);
// arr.reverse();
// document.write(arr);

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

const fromPairs = (array) => Object.fromEntries(array);

const data = [['a', 1], ['b', 2]];
console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }

// Without. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.

// const without = (array, ...arg) => { 
//     let [first, second] = arg;
//     let arr2 = array.filter(item => item != first);
//     let arr3 = arr2.filter(item => item != second);                       
//     return (arr3);
//   }
  
//   const data = [1, 2, 3, 1, 2];
//   console.log(without(data, 1, 2)); // [3]

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
  
const array = [1, 2, 1, 2, 3];
  let newArr = [];
  for(let i = 0; i <= array.length; i++) {
    for(let j = 0; j <= i; j++){
      if(array[i] != newArr[j]){
        newArr.push(array[i]);
      }
    }
  }
    console.log (newArr);

// IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

// const isEqual = (firstArray, secondArray) => firstArray.join('') === secondArray.join('');

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false

const chunk = (array, size) => {
    const newArr = [];
    for(let i = 0; i <= array.length; i++){
      let newArr2 = [].push(array[i]);
      newArr.push(newArr2);
    }
    return (newArr);
  }
  
  const data = [1, 2, 3, 4, 5, 6, 7];
  console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
  console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]
  
  