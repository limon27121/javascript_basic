
//set of object
const li=new Set(["a","b","c"]);
li.add("d");
console.log(li)



let text = " ";
li.forEach (function(value) {
  text += value;
})

console.log(text)

console.log(li.values())

console.log(li.has("a"))

console.log(li.size)



const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let text1=" "
let text2=" "
fruits.forEach(function(key,value){
       text1+=value+"="+key 

})
console.log(text1)

for(let x of fruits.values()){
           text2+=x
}

//give value
console.log(text2)

//decleare map
const fruits1 = new Map();

// Set Map Values
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);
console.log(fruits1)


