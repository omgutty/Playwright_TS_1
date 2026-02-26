function course(calbackref){
    console.log("course function");
    calbackref();
}

//course(); // this will error  as we not passing the calllback funcion 
//diretly pass the call back function while calling the main function
// while calling declaring the call back 
course(()=>{
    console.log("execute the functin")
})

console.log("----------");

function taskone (functioname,URL){
    console.log("enter the URL: "+URL);
    return functioname();
}

taskone(()=>{
    console.log("callback function ");
    },"http://cygnet.one"
);

console.log("----------");


function add(callback){
    return callback();
}


add(()=>console.log("callback"));




