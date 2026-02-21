
console.log("---6----");
/**
 * Section B: Basic Function Questions (Q6–Q10)
Q6. Greet User
Write a function called greetUser() that takes no 
inputs and prints Hello! Welcome to Playwright
Training to the console. Call the function three times.
greetUser() → Hello! Welcome to Playwright Training
 */

function greetUser(){
    console.log("Hello! Welcome to Playwright");
}

greetUser();
greetUser();
greetUser();


console.log("----7---");

/**
 * Q7. Square of a Number
Write a function called square(num) that takes 
a number as input and returns the square of that
number.
square(5) → 25
square(9) → 81
square(0) → 0
 
 */

function square(num){
    //let square= num*num;
    //return console.log(square);
    return console.log(num*num);
}
square(5);

console.log("----8---");
/**
 * Q8. Check Even or Odd
Write a function called checkEvenOdd(num) that takes
 a number and returns Even or Odd.
checkEvenOdd(4) → Even
checkEvenOdd(7) → Odd
checkEvenOdd(0) → Even
Bonus: Use the modulus operator (%). If num % 2 === 0, the number is even.
 * 
 */

// % gives the remainder.
// / gives you division result 
function checkEvenOdd(num){
    if((num%2)===0){
       return  console.log("Even");
    }else{
        return console.log("Odd");

    }
}

checkEvenOdd(5);


console.log("----9---");
/**
 * Q9. Find the Maximum
Write a function called findMax(a, b)
 that takes two numbers and returns the larger one.
findMax(10, 20) → 20
findMax(50, 30) → 50
findMax(7, 7) → 7
 * 
 */

function findMaxoftwo(a, b){

    if (a>b){
        return console.log(a);
    }else{
        return console.log(b);
    }
}

findMaxoftwo(20,10);

console.log("----10---");
/**
 * Q10. Reverse a String
Write a function called reverseString(str)
 that takes a string and returns it reversed.
reverseString("hello") → olleh
reverseString("Playwright") → thgirwyalP
Bonus: Hint: Use .split("").reverse("").join("") method chain.
 
 */

function reverseString(str){
    
   return str.split("").reverse().join("");
   

}

console.log(reverseString("Hello"));
console.log(reverseString("PlayWright"));


console.log("---11----");





