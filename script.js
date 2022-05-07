// Деструктурирующее присваивание

// let user = {
//     name: "John",
//     years: 30
//   };

// let {name, years, isAdmin = false} = user;
// console.log(name, years, isAdmin);

//Максимальная зарплата

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalaries() {
      let max = 0;
      let maxName = null;

      for(const [name, sal] of Object.entries(salaries)) {
          if(max < sal) {
                max = sal;
                maxName = name;
          }
      }
      return(maxName);
  }

// function topSalary(salaries) {

//     let max = 0;
//     let maxName = null;
  
//     for(const [name, salary] of Object.entries(salaries)) {
//       if (max < salary) {
//         max = salary;
//         maxName = name;
//       }
//     }
  
//     return maxName;
//   }

console.log(topSalaries(salaries));
