// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution se problem hoti hai kai baar isliye global scope ke variables ya jo bhi uske pollution hai 
// unko hatane  ke liye IIFE ka use hota hai

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
