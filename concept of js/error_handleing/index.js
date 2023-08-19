//error handling

// structure

let a=20
try{

    //this is error function

    // Sum()
    
    if(a>2){
        throw "big"
    }
    else{
        throw "small"
    }
}

catch(err){
    //give the err msg
    // console.log(err.message)
    // console.log(err.name)
    console.log(err)
}
finally{

    //whole part of code or rest of the part of code
    console.log("rest of the code")
}