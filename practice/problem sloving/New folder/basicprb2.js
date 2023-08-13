// // "use strict"

// // const ps= require("prompt-sync");
// // const prompt=ps();
// const prompt = require('prompt-sync')();

// var number = prompt("Enter your number");
// number=parseInt(number);
// var grade;

// if(number>=80 && number<=100){
//     grade= "A+";
// }

// else if(number<80 && number>=70){
//      grade="A";
// }

// else if(number<70 && number>=60){
//         grade="A-"
// }
// else if(number<60 && number>=50){
//     grade="B"
// }
// else if(number<50 && number>=40){
//     grade="C"
// }

// else if(number<40 && number>=33){
//     grade="D"
// }

// else if(number>0&&number<33){
//     grade="F"
// }

// else{
//     console.log("INVALID NUMBER")
// }
// console.log("your grade is: ",grade)

//calculator

// console.log("option 1: addition \n option 2: subtraction \n option 3: multiplication \n option 4: division");

// var number1=prompt("enter your first number");

// var number2=prompt("enter your second number");

// var option= prompt("enter your option");

// number1=parseFloat(number1);
// number2=parseFloat(number2);
// option=parseInt(option);
// let result=0;
// switch(option){
 
//     case 1:
//         result=number1+number2;
//         console.log("sum is :",result);
//         break;


//         case 2:
//             result=number1-number2;
//             console.log("subtraction is :",result);
//             break;

//         case 3:
//                 result=number1*number2;
//                 console.log("multiplication is :",result);
//                 break;
        
//         case 4:
//                     result=number1/number2;
//                     console.log("division is :",result);
//                     break;

//         default:
//             console.log("invalid input")
            
    

   
// }


// var number=prompt("enter your number");

// number=parseInt(number)

// var sum=0;
// var series=" ";

// for(let i=1;i<=number;i++){
//     sum+=i**2;
//     series+=(i**2).toString();
   
//     if(i==number){
//         continue;
//     }
//     series.concat("+");
// }

// console.log(series,"=",sum);


var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";

for (var i = 1; i <= n; i++) {
    sum += i ** 2;
    series += `${i}^^2`;
    if (i == n) {
        series=series.concat("=")
         break; }
    series=series.concat("+")
}

console.log(`${series}${sum}`); 



var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];



foods.forEach(print)

function print (value){
    console.log(value)
}