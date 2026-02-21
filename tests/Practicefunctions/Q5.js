/**
 Month to Season
Write a function that takes a month number (1–12) 
and returns the season using grouped switch
cases.

Months 3, 4, 5 → Spring
Months 6, 7, 8 → Summer
Months 9, 10, 11 → Fall&
Months 12, 1, 2 → Winter
Invalid month → Invalid month
Bonus: Try doing this with both switch case AND if-else, 
then compare which one looks cleaner.
 */


function season(number){

    switch(number){
        case 1:
        case 2:
        case 12:
            console.log("Winter");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall");
             break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
             break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
             break;
        default:
            console.log("Invalid month");
             break;
    }

}

season(4);


console.log("------------------");

function season2(number){
    if (number==1 || number==2 || number==12){
        console.log("Winter");
    }else if(number==9 || number==10 || number==11){
        console.log("Fall");
    }else if(number==6 || number==7 || number==8){
        console.log("Summer");
    }else if(number==3 || number==4 || number==5){
        console.log("Spring");
    }else{
        console.log("Invalid month");
    }

}

season2(15);