/*
Student Grade System
Write a function using switch case that takes a grade letter
 (A, B, C, D, F)
 and returns a descriptive message.
Input: &quot;A&quot; → Output: &quot;Excellent&quot;
Input: &quot;B&quot; → Output: &quot;Good Job&quot;
Input: &quot;C&quot; → Output: &quot;Average&quot;
Input: &quot;D&quot; → Output: &quot;Below Average&quot;
Input: &quot;F&quot; → Output: &quot;Fail&quot;
Input: &quot;X&quot; → Output: &quot;Invalid Grade&quot;
*/

function Grade(letter){
    switch(letter){
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good Job");
            break;
        case "C":
            console.log("Average");
            break;
        case "D":
            console.log("Below Average");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Invalid Grade");
            break;
    }
}

Grade("H");