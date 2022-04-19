// 1 задача

// function getName(a,b) {
//     if(a>b) return 1
//     else if(a<b) return -1
//     else if(a==b) return 0
// }

// console.log(getName(2,3));

//не работает
// function getName(a,b) {
//     (a>b) ? 1 :
//     (a<b) ? -1 :
//     (a==b) ? 0;
// }

// console.log(getName(2,3));

let getName = (a,b) => {
   return(a>b)? 1 : -1;
}

console.log(getName(2,3));

// работает

// let getName = (a,b) => {
//     if(a>b) return 1
//     else if(a<b) return -1
//     else if(a==b) return 0
// }

// console.log(getName(2,3));

// 2 задача

// function calcArea(a,b) {
//     return a*b || a**2;
// }

// console.log( calcArea(3));


// 3 задача

// function getName(a, b) {
//     if ((a % 2 == 0) && (b % 2 == 0)) {
//         return a*b;
//     } else if ((a % 2 !== 0) && (b % 2 !== 0)) {
//         return b + a;
//     } else if ((a % 2 == 0) && (b % 2 !== 0)) {
//         return b;
//     } else if ((a % 2 !== 0) && (b % 2 == 0)) {
//         return a;
//     }
// }

// console.log (getName(3,5));

// 4 задача

// function seguence(start, step) {
//     while(true){
//         start = start || 0;
//         step = step || 1;
//         start +=step;
//         return start;
//     }
// }

// function sequence(start = 0, step = 1) {
//    let callNum = start; 
//    return function() { 
//    let retVal = callNum; 
//    callNum += step; 
//    return retVal; 
//    } 
//    }

// let generator = sequence(10, 3);
// alert (generator());
// alert (generator ());
// alert (generator());

//worked!!!

// let a = 0;
// let b = 1;
// function count() {
//     a += +b;
//     return a;
// };

// alert (count());
// alert (count());
// alert (count());

// let a = 0;
// let b = 1;
// function count(a, b) {
//     a += +b;
//     return a;
// };

// alert (count());
// alert (count());
// alert (count());