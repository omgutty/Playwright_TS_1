//here two functions  created with same name 
// first with var inside the function and same variable with var type inside the block 
// second with var inside the function and let inside the block with same datatype name 

//both the functions print one after another one by one, explain me this ?

function example(){

    var name= "om";
    if (true){
        var name='kittu';
    }
    console.log(name);

}


example();

function example(){

    var name= "om";
    if (true){
        let name='kittu';
    }
    console.log(name);

}

example();