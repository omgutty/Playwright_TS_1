
//this is instant function as we are not applied set timeout but still used the promise 
// this is a promise function as it is returing a promise- but instently run
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
            let username=true;
                if(username){
                    resolve("Om G");
                }else{
                    reject("User Not found");
                }
        },2000);
    })
}

getuserdetails()
.then((name)=>{
    console.log(name);
})
.catch((error)=>{
    console.log(error);
});

instentuser()
.then((name)=>{
    console.log(name);
})
.catch((error)=>{
    console.log(error);
});

//let [one, two]= Promise.all([getuserdetails,instentuser]);

//if i want to call both the frunction paralel exeution ,
//go with the promise.all 

Promise.all([getuserdetails(),instentuser()])
.then(([one,two])=>{
    console.log("first promise : "+ one);
    console.log("second promise: "+two);
})
.catch((error)=>{
    console.log(error);
});
