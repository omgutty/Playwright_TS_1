//1. what is annyomoous function and arrow function
// anonymous function is nothing but, funciton with out name 
// arrow function is nothing but shorter syntax for functional expression introduced in ES6 
// arrow function has implicit retur, 
//No own this binding. 

//2. what is IIFE function 
/**
 * imediate invoke function expression
 * which invoke at the expression it self. 
 * it run after creatio it self
 * 
 * (function (){//code})();
 * (function(){consol.log("IIFE")})();
 * (function(name){consol.log("IIFE"+name)})();
 * (()=>{consol.log("IIFE")})();
 * 
 */

// 

//3. how diffeerent way to define afunction in java

/**
 * 1. function declartion
 * 2. function expression assign in variable
 * 3. arrow function with inbuild return
 */

//4. function delcaration and expression difference

/**
 * declaration can be hoisted, but not expression 
 * expression is assaigned to variable 
 * declaration has its own this, but expression no, 
 * expression will  be used at call back 
 * in expression anonymous function can be created with out name 
 * 
 * style code ES5, ES6 
 */

//5. create anonymous with two parameter 

let num= function (a,b){
    let c = a+b;
    return console.log(c);
}



//6. what is difference bet ween == and ===
/**
 * == compare the value 
 * === compare the type as well. full comparition
 */



//7. call back function 

let sum= function (a,b){
    c= a+b;
    console.log(c);
}

function addtion(callbyref,x,y){
    return  callbyref(x,y);
}

addtion(sum,1,3);


//creating a object

let obj= {
    name: "suva",
    age: 35
};

//create a arrow function, then you do call back function 

let arrow = (a,b)=> {return console.log(c=a+b)}
function callbyref(call){
    return call;
}
callbyref(arrow(1,5));







