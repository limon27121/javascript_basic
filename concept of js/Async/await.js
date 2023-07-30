const payment_success=true;
var marks=80


function enroll(){
    console.log("enrollment processing")
    const promise=new Promise(function(resolve,reject){
        setTimeout(function(){
            if(payment_success)
            resolve()
            else
            reject("payment failed")
          },2000)

    })
     
    return promise
     
    }


function progress(){
    console.log("course is progressing")

    const promise=new Promise(function(resolve,reject){
        setTimeout(function(){
                    if(marks>=80){
                         resolve()
                    }
                    else
                   reject("please try again and earn sufficient marks")
                },3000)
    })
    return promise
}


function getcertificate(){
        console.log("preparing certificate")
        const promise=new Promise(function(resolve){
            setTimeout(function(){
                resolve("congrats! here is your certificate")
            },3000)
        })
        return promise
    }
    
   

    // enroll()
    // .then(progress)
    // .then(getcertificate)
    // .then(function(value){
    //     console.log(value)
    // })
    // .catch(function(err){
    //     console.log(err)
    // })

     async function course(){
        try{
        await enroll();
        await progress();
       const message= await getcertificate();
       console.log(message);
        }
        catch(err){
            console.log(err);
        }
    }

    course()