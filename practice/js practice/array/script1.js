let array=[1,2,3,4,25];
var sum=0;

function sum1(value){
    for(let i=0;i<array.length;i++){
           sum+=array[i];
    }
    return sum;
}
console.log(sum1(array));


function print(value){
    console.log(value);
}

function change(value){
    return value*2;
}

// function filter_numbers(value){
//     return value>18
// }

array.forEach(print);


let array1=array.map(change);
console.log(array1)

// let array2=array.filter(filter_numbers)
// console.log(array2)

// console.log(array.every(filter_numbers))
// console.log(array.some(filter_numbers))
// console.log(array.find(filter_numbers))
// console.log(array.findIndex(filter_numbers)+1)

// let y=array.keys(print);
// console.log(y)