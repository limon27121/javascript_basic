
// string Spreading
let str = "Bohubrihi";
let newStr = [...str];
console.log(newStr)

// array Spreading
let fruit1 = ["Apple", "Pine-apple", "Mango"];
let fruit2 = ["Orange", "Grape"];
let newFruit = "Jackfruit";
let newarray=[...fruit1,...fruit2]
console.log(newarray)


// obj  Spreading
let person = {
    fname: "Simanta",
    lname: "Paul"
}

let new_person={...person,dob:"22/11/1996"}
console.log(new_person)



// Spread Operator ...

let numbers = [23, 1, 0, -1];

//console.log(Math.max(...numbers));

let person1 = ["Simanta", "Paul"]

let test = (fname, lname) => {
    console.log(`Hello ${fname} ${lname}`);
}

test(...person1); 