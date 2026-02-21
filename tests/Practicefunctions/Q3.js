/*
Traffic Light Action
Write a function that takes a traffic light color (red&, yellow, green) 
as input and returns the
action using switch case.
Input: red → Output: Stop;
Input: yellow → Output: Slow Down
Input: green → Output: Go
Input: blue → Output:Invalid color;
*/

function trafficlight(color){
    switch(color){
        case "red":
            console.log("Stop");
            break;
        case "yellow":
            console.log("slow Down");
            break;
        case "green":
            console.log("Go");
            break;
        default:
            console.log("Invalid color");
            break;
    }

}
trafficlight("a");



