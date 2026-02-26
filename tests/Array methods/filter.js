let number= [1,2,3,4,5,6];

let even= number.filter((ref)=>ref%2===0);
console.log(number, even);



console.log("-------");


let marks= [35,40,60,65,70];

let passmarks= marks.filter((ref)=>ref>=60);
console.log(passmarks,marks);

console.log("-------");

let users = [
  { name: 'priyanka', active: true },
  { name: 'rahul',    active: false },
   { name: 'rahul',    active: true }
];

let activeusers = users.filter((user) => user.active === true).map((u)=>u.name).map((name)=> name.toUpperCase());

console.log(activeusers[0]); 