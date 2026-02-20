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

 
