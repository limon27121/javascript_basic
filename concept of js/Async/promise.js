const status1=true;
console.log("task 1 completed")

// promise definition
const promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        if(status1)
        resolve("task 2 completed")
        else{
           reject("failed")
        }
   },2000);
})

//promise call
promise
.then(function(value){
    console.log(value)
})
.catch(function(err){
    console.log(err)
})

console.log("task 3 completed")