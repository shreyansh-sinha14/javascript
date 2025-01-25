 const score = 400 // automatically declared as a number
 console.log(score);
 
 const balance = new Number(100) // explicitly declared as number
 console.log(balance);

 console.log(balance.toString().length);
 console.log(balance.toFixed(1));

 const otherNumber = 23.89943
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

// ***********************************************MATHS********************************************************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(6.4));
console.log(Math.ceil(8.4));
console.log(Math.floor(8.7));
console.log(Math.min(6,4,7,19,4));
console.log(Math.max(4,6,3,22,5,78));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
 console.log(Math.floor(Math.random() * (max - min + 1)) + min);

 










 
 
 