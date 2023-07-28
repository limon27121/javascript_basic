// console.log("print 1st line")

// setTimeout(function(){
//     console.log("print 2nd line")
// },2)

// console.log("print 3rd line")



// const payment_success=true;
// let marks=70;

// function enroll(callback){
//   console.log("enrollment processing")
//   setTimeout(function(){
//     if(payment_success)
//     callback()
//     else
//     console.log("payment failed")
//   },2000)
// }


// function progress(callback){
//     console.log("course is progressing")
//     setTimeout(function(){
//         if(marks>=80){
//              callback()
//         }
//         else
//         console.log("please try again and earn sufficient marks")
//     },3000)
// }

// function getcertificate(){
//     console.log("preparing certificate")
//     setTimeout(function(){
//         console.log("congrats! here is your certificate")
//     })
// }

// enroll(function(){
//     progress(getcertificate)
// })

 
//using promise method

const payment_success=true;
let marks=70;


function enroll(callback){
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
            })
        })
        return promise
    }
    
   

    enroll()
    .then(progress)
    .then(getcertificate)
    .then(function(value){
        console.log(value)
    })
    .catch(function(err){
        console.log(err)
    })