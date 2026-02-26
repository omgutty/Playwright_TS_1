//Array destructuring

let number= [10,20,30,40,50];

let {a,b,c}= number;
console.log(a);// defined. becuase we are trying to use object destructuring in array {}


let [x,y,z]=number;
console.log(x); // 10 , as we are using [] array destructuring. 

let [d,,f]=number;
console.log(f);//30

let[g,...h]=number;

console.log(g);//10
console.log(h);//[20,30,40,50]

//default 
let[i,j,k,l,m,n=100]=number;
console.log(i);//10
console.log(m);//50
console.log(n);//100// if not avaialble in array, default value will print 

