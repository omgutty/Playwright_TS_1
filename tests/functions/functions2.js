/**
 When To Use Function Expression?
When assigning functions to variables
In callbacks
In closures
In functional programming
 */

//function expression 
const add = function (){
console.log("add function ");
}
add();

console.log("----0------");
//example code need to ask this 
setTimeout(function () {
    console.log("Executed after 2 seconds");
}, 2000);

console.log("----1----");

//function expression with parameter
const add2 = function (a,b){ 
    return a+b;
}
console.log(add2(2,2));

console.log("---2-----");

const add3= function(a,b){
    return console.log(a+b);
}
add3(1,1);

console.log("----3----");

let add4= function(a,b){
    return console.log(a+b);
}

add4(2,2);

console.log("----4----");
//named function 
//multiplyNumbers is only accessible inside the function body.
/*
Function has its own internal name: multiplyNumbers

That name is only accessible inside the function body

Useful for recursion or debugging stack traces
*/
const multiply = function multiplyNumbers(a, b) {
    return a * b;
};

console.log(multiply(4, 3)); // 12

console.log("----5----");


//anonymouse
/*
 this function dont have any internal name, 
 it is called anonymous function 
Stored in variable add5
Cannot refer to itself by name inside Used commonly
*/
const add5 = function (a, b) {
    return a + b;
};

console.log(add5(5, 3));  // 8

console.log("----6----");

//arrow function 

//this is wrong 
const add6= (a,b)=>{
    a+b
};
console.log(add6(5,5));

//correct arrow function with two parameter
const add7= (a,b)=> a+b;
console.log(add7(7,7));

//with return we use brackets 
const add8 = (a,b)=>{
    return c= a+b;
}
console.log(add8(6,6));

console.log("----6----");

//arrow function with single parameter

const square1= x=>x*x;
console.log(square1(8));


console.log("---normal function and arrow function ---");


function normal(){
    console.log("Normal");
}
normal();


const arrow=()=>{
    console.log("arrow function");
}

arrow();







