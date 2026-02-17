
//if i remove var in line 4, still out is  same. for priyanka it is error on day 2 class,  

 var b=100; //globally 
function example(){

    var b=10;
    console.log(b);
}
console.log(b);//globally calling variable 

example(); // it will print block value 

console.log(b);//globally calling the variable
