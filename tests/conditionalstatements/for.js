let strings=["abc","def","ghi","jkl"];
console.log(typeof strings);

console.log(" ");

for (let values of strings){
    console.log(values)
}
console.log(" ");

for (let k in strings){
    console.log(k);
}

console.log(" ");

for (let k in strings){
   console.log([k]);
}

console.log(" ");

for (let k in strings){
    console.log(k,strings[k]);
}


console.log("-------------");

let age= [10,20,30,40];
console.log(typeof age);// object  
for (let values of age){
    console.log(values);
}

console.log("-------------");

let obj= {
    name: "siva",
    age:35,
    salary: 1000,
    title: "lead"
}


for (let k in obj){
    console.log(k);
}

for (let v in obj){
    console.log(obj[v]);
}

for (let v in obj){
    console.log(v,obj[v]);
}

console.log("-------------");

let a =20;

let agelimit= a>18? "true":"false";

console.log(agelimit);