// task 1

// let user = {}
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

// let shedule = {};
// console.log (isEmpty(shedule));


// task 3

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// sum = 0;
// for( let key in salaries) {
//     sum += salaries[key];
// }

// console.log(sum);


// task 4

// let menu = {
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

// let user = {
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

const obj = {
    id: 5,
    token: 123123,
}

const userId = obj.id;
console.log(userId);
