//map - trasfarm all 
let number= [1,2,3,4,5];
let double=number.map((num)=>num*2);
console.log(double);
console.log("--1---");

let names= ["kitt","om","siva"];
let addhi= names.map((ref)=>"hi "+ref);
console.log(addhi);

console.log("--2---");

//with for loop 
let names2= ["kitt","om","siva"];
let addhi2= [];
for (let n of names2){
        addhi2.push("hi "+n);
}
console.log(addhi2);
console.log("--3---");

let fruit= ["mango","banan","apple"];
let capitalfruite= fruit.map((ref)=>ref.toUpperCase());
console.log(capitalfruite);




console.log("--4---");
let users = [ 
    { 
        name: 'priyanka', active: true 
    }, 
    {
        name: 'rahul', active: false 
    }, 
    { 
        name: 'anita', active: true 
    } ]; 

let result = users.filter(u => u.active).map(u => u.name); console.log(result);

let fruits = ['apple', 'mango', 'banana']; 
let result2 = fruits.map(f => f.toUpperCase()); console.log(fruits[0]);

console.log(result2);


console.log("---4-----");

let student=[ {
    name: "om",
    age:35,
    active:true
},
{
    name:"kitt",
    age  : 30,
    active:false
},
{
    name:"tanmayi",
    age  : 7,
    active:true
}];

let name5= student.map((n)=>n.name);
console.log(name5);

console.log("---5---");

let name6= student.filter(n=>n.active);
console.log(name6[0].name,name6[1].name);



