//input string
let str1 = "limon";
console.log(str1);
console.log("hello world");
console.log(typeof str1);

//find length

let size = str1.length;
console.log(size);

//compare string

var str2 = "oishi";
console.log(str1 == str2);

//find one character
console.log(str1.charAt(1));

//find any portion of string   substring(start, end)

console.log(str1.substring(0, 5));

//slice fuction slice(start, end)

let str3 = "Apple, Banana, Kiwi";
console.log(str3.slice(0, 5));
console.log(str3.slice(-20, -13));

//split fuction
console.log(str3.split(","));

//replace

let text = "Please visit Microsoft!";
let new_string = text.replace(" Microsoft", " W3Schools");
console.log(new_string);

//concat

new_string = str1.concat(" ", str2);
console.log(new_string);

//SEARCH ,include
console.log(str3.search(" Banana"));
console.log(str3.includes("Ba"));

//strats with

console.log(str3.startsWith("B", 7));
