let employee= {
    name: "siva",
    role: "Lead",
    company:{
        name: "cygnet",
        location: "Ahmedabad"
    },
    skills: {
        automation:["selenium","playwright"],
        API:["postman","rest assured"],
        languages: ["JAVA","JS","TS"]
    },
    contact: {
        email: "om.gutty@gmail.com",
        phone:{
            work: 9099483219,
            home: 9099483211,
        }
    }
}

// accessing the nested properties
console.log(employee.skills.languages[0]);
console.log(employee.contact.phone.work);

let string =employee.company.location="bangalore";
console.log(string);
console.log(employee.company.location="bangalore","ka");