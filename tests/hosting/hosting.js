console.log(a);
let a=10;


example(); //NaN  for hosting inside the function,

function example(){
    console.log(x+y);
    
    var x=10;
    var y=5;

    console.log(x+y); //this will print 15

}