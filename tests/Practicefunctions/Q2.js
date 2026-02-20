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