let student={
        name: "Tanmayi",
        age: 6,
        studies: {
            studentclass: "UKG",
            school: "SSPS"
        }
};


function printstudent(){
    //below with out destructuring 
    console.log(student.name,student.studies.studentclass);
}
printstudent()

console.log("-------");
//with destructuring of function paramters

function printstudent2({name, age}){
    console.log(name,age);
}

let user={name:"kittu", age:35};

printstudent2(user);

//Nested Destructuring in Parameters
console.log("-----3--");

function readstudent({name, age,studies:{studentclass,school}}){
    console.log(name, age,studentclass,school);
}

readstudent(student);

//Nested Destructuring in Parameters with variable name change 

console.log("-----4--");
//we are directly renaming the to new studies, property naem 
//We removed newstudies because once you destructure inside, the original object reference is not stored.
function readstudent2({name:newname,age:newage4, studies :{studentclass,school}})
{
    console.log(newname,newage4,studentclass,school)
    // console.log(newname,newage4,studies);// this is giving error. 
}
readstudent2(student);