let students = [
    { name: "Mohan",    age: 28, course: "Playwright" },
    { name: "Sowmya",   age: 25, course: "Selenium" },
    { name: "Jeevan",   age: 26, course: "Playwright" },
    { name: "Shilpa",   age: 24, course: "API Testing" },
    { name: "Priyanka", age: 27, course: "Playwright" }
];

//to get the first student details - it will get complete object 
console.log(students[0]);

//to get the first student name 
console.log(students[0].name);

console.log("----------");
//to get the all the details in array object using loop 
for (let i=0;i <students.length;i++){
    console.log(students[i].name+" "+students[i].age+" " +students[i].course);
}


console.log("----------");
//using slice and splice with array object 
//get first two students using slice 

let firsttwo=students.slice(0,2);
for(let i=0; i<firsttwo.length;i++){
console.log(firsttwo[i]);
}

console.log("----------");
let deletefirst= students.splice(1,1);
console.log("Deleted object "+deletefirst[0].name+deletefirst[0].age+deletefirst[0].course);
for (let i=0;i <students.length;i++){
    console.log(students[i].name+" "+students[i].age+" " +students[i].course);
}

console.log("----------");
// Add a new student at index 1 (using splice)
let a= students.splice(1, 0, { name: "Ravi", age: 29, course: "Playwright" });
console.log(a);

for (let i=0;i <students.length;i++){
    console.log(students[i].name+" "+students[i].age+" " +students[i].course);
}
