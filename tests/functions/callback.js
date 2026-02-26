function caliculator(cal_function){
    return cal_function;
}

let addtion= function(a,b){
    let c = a+b;
    return console.log(c);
}

let subtraction= function(a,b){
    let c= a-b;
    return console.log(c);
}

caliculator(addtion(1,3));
caliculator(subtraction(5,2));


console.log("___________________");

//HOF, it is accepting another function as parameter
function computer(mouse){  
    console.log("computer");
    return mouse;
}

function mouse(){
    console.log("mouse");
}


computer(mouse);//it will  execute only HOF
computer(mouse()); //it will execute mouse first and then run the computer
//mouse is a call back function 
//

console.log("___________________");

//What a Real Callback Would Look Like

function caliculator_new(fun,x,y){
       return fun(x,y);
   // fun(x,y); it will return undefined, 
}

let addtion_new= function(a,b){
    let c = a+b;
    return c;
}

let subtraction_new= function(a,b){
    let c= a-b;
    return c;
}

let addedvalue=caliculator_new(addtion_new,5,5);
console.log(addedvalue);
let subtractedvalue=caliculator_new(subtraction_new,5,5);
console.log(subtractedvalue);

console.log("___________________");

//arrow function parameter
let add9= (a,b)=>a+b;
let sub9= (a,b)=> a-b;

function action(ref,x,y){
    return ref(x,y);
}

let addwitharrow=action(add9,9,9);
console.log(addwitharrow);
let subwitharrow=action(sub9,19,9);
console.log(subwitharrow);


console.log("___________________");

//arrwo with return print 

let add10= (a,b)=>{
    let c=a+b;
    return console.log(c); // this return c but not print
}
let sub10= (a,b)=>{
    let c= a-b;
     return c     // this return c as not print 
}

function action(ref,x,y){
    return ref(x,y);
}
action(add9,9,9);
action(sub9,19,9);

let addresult=action(add9,100,100);
console.log(addresult);
let subresult=action(sub9,100,10);
console.log(subresult);