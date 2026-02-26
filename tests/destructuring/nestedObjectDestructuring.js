let student={
        name: "Tanmayi",
        age: 6,
        studies: {
            studentclass: "UKG",
            school: "SSPS"
        }
};

//destructuring nested object 
let {name, age,studies:{ studentclass,school} } = student;
console.log(name, age, studentclass,school);

//renamming 

let {name:newname1,age:newage3,studies:{school:hydschool,studentclass:higherclass}}=student;
console.log(newname1,newage3,hydschool,higherclass);

//default value 
let {name:newnam3,studies:{pincode = 500001}}=student;
console.log(newnam3,pincode);