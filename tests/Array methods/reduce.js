//accumulator, and number 
// accu 0 + num is 1 = 1 
//acc 1+num is 2= 3
// acc 3+num 2= 5 and so on ,

//intilizing the 0  it is not compulsory 
//acc is  the temp value sum will store in acc,
//accumulator is collecting all the sum 
let nums = [1, 2, 3, 4]; 
let sum = nums.reduce((acc, num) => acc + num, 0); console.log(sum);

let numbers = [1, 2, 3]; 
let total = numbers.reduce((acc, num) => acc * num, 20); console.log(total);

console.log("-----");
let nums4 = [10, 20, 30];  
let total4 = nums4.reduce((acc, num) => acc + num, 0); console.log(total4); 

console.log("-----");





let words = ['playwright', 'javascript'];
let joined = words.reduce((result, ele) => result + ' ' + ele);
console.log(joined);