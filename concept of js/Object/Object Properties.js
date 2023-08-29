
//declare object
const person = {
  fname:" John",
  lname:" Doe",
  age: 25
};

//access properties
console.log(person.fname)

//add properties
person.gender="male";

//print whole class
console.log(person);

//use for loop to access the whole objects
for(let x in person){
    console.log(person[x])
}

//delete the object properties
delete person.age;

//using loop to print the value of properties

for(let x in person){
    console.log(person[x])
}


//nested object

const my_obj={
    name:"Limon",
    age:25,
    cars:{
        car1:"premio",
        car2:"chr",
        car3:"mark2"
    }
}

console.log(my_obj.cars.car3)

for (const key in my_obj) {
    if (typeof my_obj[key] === "object") {
        console.log(`${key}:`);
        for (const subKey in my_obj[key]) {
            console.log(`  ${subKey}: ${my_obj[key][subKey]}`);
        }
    } 
    else {
        console.log(`${key}: ${my_obj[key]}`);
    }
}

//array with object

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
 let text1=" "
 let text2=" "
  for(let x in myObj.cars){
    text1+=myObj.cars[x].name
    console.log(text1)
    text1=" "
    for(let y in myObj.cars[x].models){
    text2+=myObj.cars[x].models[y]
    console.log(text2)
    text2=" "
  }
  
  }
  