//simple function 
function Myname(){
    console.log("I am name function");
}

Myname();

//function with name , arguments with out return 
function add (a,b){
    let c = a+b;
    console.log(c);
}

add(1,2);// it will automatically print as we have used console.log in method it self

function add2 (a,b){
    console.log(a+b);
}

add2(2,2);//4

//function with name, arguments with return 

function multiplication(a,b){
    let c = a*b;
    return c;
}


console.log(multiplication(5,5))//25
console.log(multiplication); //this prints the code f multiplication(a,b){ let c = a*b;return c;}


