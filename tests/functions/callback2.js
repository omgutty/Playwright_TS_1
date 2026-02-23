let firstname=(name)=>console.log("hello: "+name);

let sirname= function(mainname){
    return mainname;
}

let lastname= function(mainname){
    return mainname;
}


sirname(firstname("Om"));

lastname(firstname("kitt"));


console.log("-----------");

//8. create a string array and add hi to every element. 

let name7= ["siva","raji", "kitt"];

for (let a in name7 ){
  console.log("Hi "+name7[a]);
}



console.log("-----1------");

let name8= [];
for (let i of name7){
    let c= "hi "+ i;
    name8.push(c);
}

console.log(name8);

console.log("------2-----");
//delete kittu  and add kittu the designer 

let newname=name7.splice(2,1,"kittu the designer");
console.log(newname);
console.log(name7);

//to add at last 3 names
name7.splice(3,0,"playwright","selenium");
console.log(name7);