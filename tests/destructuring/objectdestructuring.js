
let user={
    name: 'om',
    age: 35,
    gender: "male"
};

let {name,age}=user;
console.log(name);//om
console.log(age);//35

//creating the variables with same name in as  property name  
//instead of calling like below, we are destructured the object 
console.log(user.name);//om



//rename the variable 
let {name : username,age : newage}=user ;
console.log(username);//om

let {name:username2,age:newage2,city='HYD'}=user;


console.log(username2,city,newage2); //om HYD 35

console.log("------------------");

