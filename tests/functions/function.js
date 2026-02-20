//simple function 
function Myname(){
    console.log("I am name function");
}

Myname();

//function with name , arguments with out return 
function add (a,b){
    let c = a+b;
    console.log(c);
}

add(1,2);// it will automatically print as we have used console.log in method it self
console.log("--1---");


function add2 (a,b){
    return a+b;
}

let additon=add2(2,2);
console.log(additon);//4
console.log(add(3,3));//6 and undefined is printing 
console.log("----2-");
console.log(additon+2);//4+2


//function with name, arguments with return 

function multiplication(a,b){
    let c = a*b;
    return c;
}


console.log(multiplication(5,5,))//25
console.log("---")
console.log(multiplication); //this prints the code f multiplication(a,b){ let c = a*b;return c;}

console.log("-------3-------");


function greet(nameofperson){
    console.log("Hello , "+nameofperson + " Welcome to PW");
}

greet("Raja");
greet("Raji");

console.log("-------4-------");
//default parameter
function defaultage(age= 8){
    console.log("Hello age : "+age);
}

defaultage(4);
defaultage();


