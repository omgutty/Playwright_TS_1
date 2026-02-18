let student= {
    name: "tanmayi",
    age: 6,
    gender: "female",
    city : "hyd"
}

console.log("----print the object  {key value}----")
console.log(student); //

//addining property to object 
student.school='SSPS';
console.log(student); //print the object  with new school property {key value}

//update the property name 
student.name='Tanmayi Sri';
console.log(student);

//delete the property name

delete student.city;

console.log(student);

// Get all the key - it returns  array 

let studentkey=Object.keys(student);
console.log(studentkey);

//to get the all the value  - it returns array 

let studentvalue=Object.values(student);
console.log(studentvalue);

console.log("-----object entries with in loop -output is array ----------")
//to get the all entries including key and value 
let studententries=Object.entries(student);

console.log(studententries);

//this print the array of strings for each property 
for (let k in studententries){
console.log(studententries[k]);
}

console.log("-----object entries with of loop, output is  in text----------")


for (let [key,value] of  Object.entries(student)){
    console.log(key,value);
}

//or 
for (let [k,v] of studententries){
    console.log(k,v);
}

console.log("------object directly passing in key to get the key values.---------")

//to get the object - key values to print 
//this print key values 
for(let k in student){
    console.log(k+ " "+student[k]);
}

console.log("---------------")




