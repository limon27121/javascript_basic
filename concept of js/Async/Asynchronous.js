// console.log("print 1st line")

// setTimeout(function(){
//     console.log("print 2nd line")
// },2)

// console.log("print 3rd line")



const payment_success=true;
let marks=70;

function enroll(callback){
  console.log("enrollment processing")
  setTimeout(function(){
    if(payment_success)
    callback()
    else
    console.log("payment failed")
  },2000)
}


function progress(callback){
    console.log("course is progressing")
    setTimeout(function(){
        if(marks>=80){
             callback()
        }
        else
        console.log("please try again and earn sufficient marks")
    },3000)
}

function getcertificate(){
    console.log("preparing certificate")
    setTimeout(function(){
        console.log("congrats! here is your certificate")
    })
}

enroll(function(){
    progress(getcertificate)
})