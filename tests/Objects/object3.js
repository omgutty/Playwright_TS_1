let student={
    name: "siva",
    age: 35,
    title: "Lead",
    city: "HYD"
};

// . Dot notation to call the value 
console.log(student.age);

//bracket notation to call the value 
console.log(student["age"]);

// to call the complete object 
console.log(student);

//to call the keys- it returns array 
let k= Object.keys(student);
console.log(k);

//to call the values- it returns the values in array
let v=Object.values(student);
console.log(v);

// to get the complete ojject use for loop 
let e=Object.entries(student);
console.log(e);

for (let [k,v] of e){
    console.log([k,v]);
}

for (let [k,v] of e){
    console.log(k,v);
}

//to check the property is exist
// use in 

console.log("age" in student);

// hasOwnproperty 
console.log(student.hasOwnProperty("age")); //return true 

//Assign method to copy and merth of object 

let custom= {
    school:"MGG",
    age: 40,
}

let merged =Object.assign({},student,custom);
console.log(merged);


//to copy the object 
let copystudent = {...merged};
console.log(copystudent);


console.log("---------");


//to copy and merge 
let copyandmerge1= {...student,gender:"male",age:50};
console.log(copyandmerge1);

console.log("---------");

//to copy and merge 
let copyandmerge2= {...merged,gender:"female",age:50};
console.log(copyandmerge2);



