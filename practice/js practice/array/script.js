
//using for loop

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     let fLen = fruits.length;
//     let text = "<ul>";
//     for (let i = 0; i < fLen; i++) {
//       text += "<li>" + fruits[i] + "</li>";
//     }
//     text += "</ul>";

//     document.getElementById("demo").innerHTML = text;

//using for each loop
// const fruits=["mango","apple","banana","malta"];

// let text="<ul>";
// fruits.forEach(My_function);
// text+="</ul>";

// document.getElementById("demo").innerHTML=text;

// function My_function(value){
//     text+="<li>"+value+"</li>"
// }



// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits1.join("+"));


// console.log(fruits1.toString())
// console.log(fruits1.length)

// console.log(fruits1.pop())

// fruits1.push("lemon")
// console.log(fruits1)

// let array1=fruits.concat(fruits1)
// console.log(array1)


const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.slice(2, 2, "Lemon", "Kiwi");
console.log(fruits2)

// const array2=fruits2.slice(2);
// console.log(array2)

// console.log(fruits2)




// console.log(fruits2.sort())
// console.log(fruits2)

let array3=[40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML=array3;


//numerical sort

//ascending sort
array3.sort(function(a,b) {
    return a-b;
    
});
document.getElementById("demo1").innerHTML=array3;


//descending order

array3.sort(function(a,b){
    return b-a;
})

//find sum using array

let sum=0;
for(let i=0;i<array3.length;i++){
    sum+=array3[i];
}
document.getElementById("demo3").innerHTML=sum;
document.getElementById("max").innerHTML=high(array3);
document.getElementById("min").innerHTML=low(array3);

function high(array3){
    return Math.max.apply(null,array3);
}

function low(array3){
    return Math.min.apply(null,array3);
}
