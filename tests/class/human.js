

class Human {

//variable
//let name ,
//let age ,  
    constructor (name, age ){
        this.name= name;
        this.age= age;
    }

}

let objmohan= new Human("mohan",25);
let objom= new Human("om",30);
//calling variables inside the class
console.log(objmohan.age);
console.log(objmohan.name);
console.log(objom.name);
console.log(objom.age);





class animal{
    constructor(name){
        this.animalname=name;
    }

    legs(int){
        console.log(" number of legs : "+ int);
        console.log(`${this.animalname} animal have total legs of ${int}`);
    }

    dogsound(){
        return console.log("Barking ");
    }

    running = function(string){
        console.log(`${string} can run faster`);
    }

    jumping = ()=>{
        console.log("jumping arrow");
    }

}
console.log(animal.jumping);// undefined
console.log(animal);//[class animal]

//calling the methods inside the class

let dogobj= new animal("dog");
dogobj.legs(4);
dogobj.dogsound();
dogobj.running("dog");
dogobj.jumping();

//let rabitobj= new animal("Rabit");
//rabitobj.legs(2);
console.log(dogobj);
console.log(animal); //[class animal]
console.log(animal.jumping); //undefined