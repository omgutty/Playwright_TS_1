let message = "I_am_Automation_lead";
let arr = message.split("_");
console.log(arr);
console.log(arr[2]);

arr.push("Advance");

console.log(arr);

arr.push(7);

console.log(arr);

console.log("----------1-------");

let arr2= [5,10,15,20];

arr2.push(25);

console.log(arr2);

console.log("----------2-------");

arr2.pop(); // even though we pass argument, inside the method, it is popping the last elemetn 
console.log(arr2);

arr2.unshift(0);
arr2.unshift('Hi ');

console.log("----------3-------");
console.log(arr2);

arr.shift();
console.log("----------4-------");
console.log(arr2);


console.log("----------4-------");

let aa = [0,1,2,3,4,5,6];
let aa1=slice.aa(3,5); //ans 3, 4
console.log (aa1);
slice (1,5); //ans1, 2,3,4
slice (7,9) //ans ?


console.log("----------4-------");

