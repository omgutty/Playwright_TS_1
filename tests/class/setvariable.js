
class setvariable{

    name="om";
    age= 25;

    constructor(a,b){
         this.name=a; 
         this.age=b;
    }

    methods(newname,newage){
      this.name=newname;
      this.age=newage;
     
      //both are fine to return, if not return u will get undefined. 
      // return [this.name,this.age];
      return `${this.name} $this{this.age}`;
    }


}

let obj= new setvariable("mohan",30);
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.methods("raju",40));
console.log(obj);
//console.log(setvariable.method("raju",40));

