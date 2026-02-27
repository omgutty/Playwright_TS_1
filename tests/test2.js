function saygoodmorning() {
    console.log("Good Morning !")
};

saygoodmorning();



function addNumbers(a,b){
    return a+b;
}

console.log(addNumbers(5,4));


const greetUser= function(name){
    console.log("Welcome "+name );
}

greetUser("Arjun");


const sayHello= function(){
console.log('Hello from anonymous function!')
};

sayHello();


const sum= (a,b)=> {return a+b}

console.log(sum(10,20));

const square= num=>{return  num*num}

console.log(square(6));



function show({name}) { console.log(name); } 


function sum(a,b){
  return a+b;
}

function calculate(callback){
  console.log(callback(2,3));
}

calculate(sum);