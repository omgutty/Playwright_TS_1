
/*
export let name= "om";
export  let age= 35;

export  function add(a,b){
 
    return a+b;
}
*/



let name= "om";
let age= 35;

function add(a,b){
    return a+b;
}

let af= function (){
    console.log ("af")
}

let arrowfunction=()=>{
    console.log("arrow function");
}

export default function multiplication (a,b){
    return a*b;
}



export { name, age, add ,af,arrowfunction};