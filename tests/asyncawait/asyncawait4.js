function instentuser(){
    return new Promise((getuser,nouser)=>{
        let username=true;
        if(username){
            getuser("Om G");
        }else{
           nouser("User Not found");
        }
    })
}


//in this function we used promise and settimeout for pause exeuction
//promise funciton as it is returing a promise
function getuserdetails(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let username=false;
                if(username){
                    resolve("Om G");
                }else{
                    reject("User Not found");
                }
        },2000);
    })
}

//here i will call these by using async and awit 

//creating a async function to use await 


async function getusedetails2(){

    // await will wait untill the getuserdetails is finished and return
    //get userdetails methode return promise
    //store in variable
    
    //if user is found and not found we have to handle so using try catch 
    // if not handle this try catch , if user not found unhandle promies reject 
    try{
       
        let user2=await instentuser();
        console.log(user2);
        let user=await getuserdetails();
        console.log(user);
    }catch(error){
        console.log(error);
    }
}

getusedetails2();

//if i call user first, it will dirctly execute catch block  
// if i call both in one console, it will exeute catch block only here as well. 

// here to execute both paralally we need to use  promise.all
