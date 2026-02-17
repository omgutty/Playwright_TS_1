let arr = [10, 20, 30];
arr.push(40);
console.log(arr.length);

let browsers = ['chrome', 'firefox', 'safari'];
let removed = browsers.pop();
console.log(removed)



for (let i = 0; i < 3; i++) {
    if (i === 1) {
        break;
    }
    console.log(i);
}
//0


let colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}


let message = 'Playwright Selenium Cypress';
let tools = message.split(' ');
console.log(tools); 


let fruits = ['apple', 'banana', 'orange'];

for (let index in fruits) {
    console.log(index + ': ' + fruits[index]);
}

let numbers = [5, 10, 15];
numbers.shift();
numbers.push(20);
numbers.unshift(1);
console.log(numbers);


let message1 = 'java automation selenium playwright';

let mg = message1.split(' ');

console.log(mg);


let mesg = 'java_javascript_ruby_python';

let m = mesg.split('_');

console.log(m[3]);


let test = 'aAseleniumAaAplaywrightAAaAtestingAA';

let t = test.split('aA');

console.log(t[0])



let number = [1, 2, 3, 4, 5, 6];

let num = number.slice(2, 4);

console.log(num);

console.log("-----");
let nm = [1, 2, 3, 4, 5, 6];

let mm = nm.slice(1);

console.log(mm);



let cart = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

let removed1 = cart.splice(2, 1);

console.log(removed1);

console.log(cart);


let cart1 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

cart1.splice(2, 3);

console.log(cart1);


let cart3 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

cart3.splice(1, 0, 'mango');

console.log(cart3);


let days = ['Monday', 'Tuesday', 'wednesday', 'thursday', 'friday'];

days.splice(2, 1, 'partyday');

console.log(days);


let months = ['jan', 'feb', 'march', 'april', 'may', 'jun'];

months.splice(2, 3, 'Spring', 'Summer', 'Holidays');

console.log(months);


let user = {

    name: 'abhi',

    age: 30,

    status: 'active',

    isEmployed: true

};

 console.log(user.name);    // Line 1: ?

console.log(user.age);     // Line 2: ?

console.log(user.city);    // Line 3: ?

console.log(user); 


let user2 = { name: 'abhi', age: 30, status: 'active' };

console.log(user2['status']);



let user5 = { name: 'pradeep', age: 30, status: 'active', isActive: true };

for (let e in user) {

    if (user5[e] === 'pradeep') {

        console.log(e);

    }

}


let u1 = { name: 'pradeep', age: 30 };

let u2 = { name: 'anu', age: 40 };

let u3 = { name: 'monika', age: 35 };

 console.log(u1.name); 

u1 = u2;

 

console.log(u1);  // ?

console.log(u2);  // ?

console.log(u3);  // ?

 

u2.name = 'ravi';

console.log(u1.name); 