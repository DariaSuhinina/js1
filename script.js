// Сумма свойств объекта

//   let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
  
//   function sumSalaries() {
//       let sum = 0;
//       for(let value of Object.values(salaries)) {
//         sum += value;
//       }

//       return(sum);
//   }

//   alert( sumSalaries(salaries) );

//   Подсчёт количества свойств объекта

//   let user = {
//     name: 'John',
//     age: 30
//   };

//   function count() {
//       let map = new Map(Object.entries(user));
//       return(map.size);
//   }
  
//   alert( count(user) );

// или 

let user = {
    name: 'John',
    age: 30
  };

  function count() {
      return Object.keys(user).length;
  }
  
  alert( count(user) );
