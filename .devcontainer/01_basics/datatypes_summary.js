// Primitive
// 7types : String , Number , Boolean , null , undefined , Symbol  , BigInt 

const score =100
const scoreValue = 102

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);

console.log(id);
console.log(anotherId);

const bigNumber = 3446758966485758464856485679n
console.log(typeof bigNumber);


// Reference (Non primitive)
// Array , Objects , Functions

const heros = ["sd","gh","hd"]

let myObj = {
    name:"SGH",
    roll_no: 578,
}

const myFunction = function(){
    console.log("Hello World");
}
// datatypes of non-primitive is FUNCTION and datatype of function is OBJECT FUNCTION


 //  /workspaces/javascript/.devcontainer/01_basics/datatypes_summary.js