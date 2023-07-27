//callback function

function display(some){
    return console.log(some)
}

function calculator(a,b,callback){
    let sum=a+b;
    if(callback)
    callback(sum)
    return sum
}

calculator(2,4,display)


//given argument without function
let result=calculator(3,2);
console.log(result)