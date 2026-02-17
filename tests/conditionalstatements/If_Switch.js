if (true){
    console.log("i am true");
}

console.log("------------1-------------");

if(false){
    console.log('i am false');
}else {
    console.log('i am true from else block');
} 

console.log("------------2-------------");

let a=5;
if (a<10){
    console.log("a is lesthan 10");
}else{
    console.log('a is not less than 10');
}

console.log("------------3-------------");
//only one conditional block it will check

let b=2;
if (b<5){
    console.log("b is less than 5")
}else if(b<3){
    console.log("b is less than 3")
}else if (b<2){
    console.log("be is less than 2")
}else if (b==5) {
    console.log("b is equal to 5")
}else {
    console.log("b is grater than 5")
}

console.log("-----------4-------------");

//verify the number is lesser than 
let c=1;
if (c<5){
    console.log("c is less than 5");
    if (c<4){
        console.log("c is less than 4");
        if (c<3){
            console.log("c is less than 3");
            if (c<2){
                console.log("c is less than 2");  
                if (c<1){
                    console.log("c is less than 1");
                }
                if (c==1){
                    console.log("c is equal to 1");
                }
            }
            if(c==2){
                    console.log("c is equal to 2 ");
            }
        }
        if(c==3){
            console.log("c is equal to 3 ");
        }
    }
    if(c==4){
            console.log("c is equal to 4 ");
    }
}

console.log("------------5-------------");

let number= 4
for (let i=1;i<=number;i++){
    console.log(i);
}

console.log("------------6-------------");
//for of to iterate
let age= [10,20,30,40];
console.log(typeof age);// object  
for (let values of age){
    console.log(values);
}

console.log("------------7-------------");

let strings=["abc","def","ghi","jkl"];
console.log(typeof strings);
for (let values of strings){
    console.log(values)
}
console.log("-------------8------------");

//mixed data type 

let arr1= [a,b,3,"5","Z",true]; //index is 5 (0,1,2,3,4)  //length is index+1

console.log(arr1.length); //6 

console.log("-------------9------------");


let day =3;

switch (day){

case 1:
    console.log("Sunday");
    break;
case 2:
    console.log("Monday");

case 3: 
    console.log("Tuesday");
    

case 4:
    console.log ("Wednesday");
    break;


}









