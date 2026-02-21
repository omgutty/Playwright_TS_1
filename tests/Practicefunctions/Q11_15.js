console.log("-----11------");
//Section C: Functions with Inputs
/*
Q11. Area of a Rectangle
Write a function called calculateArea(length, width) 
that takes length and width as inputs and
returns the area.
calculateArea(5, 10) → 50
calculateArea(3.5, 2) → 7
calculateArea(100, 50) → 5000
*/

function calculateArea(length, width) {
    let area=length*width;
    return console.log("Area : "+ area );
}

calculateArea(5,10);

console.log("-----12------");

/*
Q12. Full Name Generator
Write a function called getFullName(firstName, lastName) 
that takes first name and last name as
inputs and returns the full name with a space in between.
getFullName("Prathyusha", "K") → Prathyusha K

Bonus: Add a third optional parameter middleName
 with a default value of "" and include it in the
output if provided.
*/

function getFullName(firstName, lastName, middleName=""){
    return console.log(firstName+" "+middleName +" "+lastName);

}

getFullName("om", "gutty");

console.log("-----13------");

/**
 Q13. Discount Calculator
Write a function called calculateDiscount(price, discountPercent)
 that calculates and returns the
final price after applying the discount.
calculateDiscount(1000, 20) → 800
calculateDiscount(500, 10) → 450
calculateDiscount(200, 110) → &quot;Invalid discount&quot;
Bonus: Formula: finalPrice = price - (price * discountPercent / 100)
 */

function calculateDiscount(price, discountPercent){
    let finalPrice= price- (price*discountPercent/100);
    return console.log("Discounted Price : "+finalPrice);

}

calculateDiscount(1000, 20);

console.log("-----14------");

/**
 Q14. Temperature Converter
Write TWO functions: 
celsiusToFahrenheit(celsius) and fahrenheitToCelsius(fahrenheit)
to convert temperatures.
Formula: F = (C × 9/5) + 32
celsiusToFahrenheit(100) → 212
celsiusToFahrenheit(0) → 32
fahrenheitToCelsius(212) → 100
fahrenheitToCelsius(32) → 0
 */

function celsiusToFahrenheit(celsius) {
    console.log("farhrenheit : ")
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
     console.log("Celsius : ")
    return (fahrenheit - 32) * 5/9;
}

// Test cases
console.log(celsiusToFahrenheit(100)); // 212
console.log(celsiusToFahrenheit(0));   // 32
console.log(fahrenheitToCelsius(212)); // 100



console.log("-----15------");


/**
Q15. Password Validator
Write a function called validatePassword(password) 
that checks if a password is strong or weak
based on its length.
validatePassword("abc") → "Weak Password"
validatePassword("myPass123") → "Strong Password"
validatePassword("hello") → "Weak Password"
validatePassword("Playwright1") → "Strong Password"

Bonus: Level 2 challenge: Also check if the password contains 
at least one number. Hint: Use a loop to
check each character with !isNaN().
 */

function validatePassword(password) {

    let hasNumber = false;
/*
    for (let i = 0; i < password.length; i++) {
      
    }
*/
    if (password.length > 5 && hasNumber) {
        return "Strong Password";
    } else {
        return "Weak Password";
    }
}
validatePassword("abc");// → "Weak Password"
validatePassword("myPass123");// → "Strong Password"
validatePassword("hello");// → "Weak Password"
validatePassword("Playwright1");// → "Strong Password"
