let arr2= ["5","a","b",3,"5","Z",true]; 

console.log('Length of arr2- '+arr2.length);
console.log(arr2);
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4]);
console.log(arr2[5]);
console.log(arr2[6]);


console.log("-------------1----------");

let arr4=['siva' , 'kittu', 'tanmayi'];

console.log(arr4.length);

console.log("-------------2------------");

let arr5=['siva' , 'kittu', 'tanmayi'];

for (let name of arr5){
    console.log(name);
}

for (let index in arr5){
    console.log(index);
}
console.log("-------------3------------");


//another way to to initilize the array 

let arr6= [35,'siva', 33, "Kittu",true];
console.log(arr6);
console.log(arr6[3]);

let mydata= new Array(35,'siva', 33, "Kittu",false);
console.log(mydata);
console.log(mydata[1]);

let mydata2=  Array.of(35,'siva', 33, "Kittu",true,true);
console.log(mydata2);
console.log(mydata2[0]); 
console.log("-------------failures------------");

//this will give error as a is not defined 

// let arr3= [a,b,3,"5","Z",true]; 

// console.log(arr2.length);

// console.log(arr3[0]);
// console.log(arr3[1]);
// console.log(arr3[2]);
// console.log(arr3[3]);
// console.log(arr3[4]);
// console.log(arr3[5]);



