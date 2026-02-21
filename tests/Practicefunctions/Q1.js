console.log("-----1------");

//Q1. Day of the Week
/**
 * Write a function that takes a number (1–7) as input and returns the day of the week using a switch
case.
Input: 3 → Output: &quot;Wednesday&quot;
Input: 7 → Output: &quot;Sunday&quot;
Input: 9 → Output: &quot;Invalid day&quot;
 */

function dayofweek(number){
    switch(number){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;   
        case 4:
            console.log("Thursday");
            break;  
        case 5:
            console.log("Friday ");
            break;  
        case 6:
            console.log("Saturday");
            break;  
        case 7:
            console.log("Sunday");
            break;     
        default :
            console.log("Invalid day")
            break;  
    }

}
 dayofweek(5);

console.log("-----2-----");


 /**
Simple Calculator
Write a program using switch case that takes two numbers and an operator 
(+, -, *, /) and returnsthe result.
Input: 10, 5, + → Output: 15
Input: 10, 5, * → Output: 50
Input: 10, 0, / → Output: Cannot divide by zero
Invalid operator → Output: Invalid operator
 */

function Calculator(num1, numb2,operator){
    
    switch (operator){
        case "+":
           console.log(num1+numb2);
            break;
        case "-":
           console.log(num1-numb2);
            break;
        case "*":
           console.log(num1*numb2);
            break;
        case "/":
           console.log(num1/numb2);
            break;
    }   
}


Calculator(2,2,"+");
Calculator(2,2,"-");
Calculator(3,3,"*");
Calculator(4,2,"/");

 
