
let arr1=[1,2,3,4,5,67]
let arr2=[1,2,3,4,5,67]


//array destructing
let [d1,d2]=arr1
console.log(d2)

let person = {
    firstName: "Fazle",
    lastName: "Rahat",
    dob: '09-27-1995'
}

// Enclose the destructuring assignment in parentheses
let { firstName, lastName, dob } = person;

console.log(firstName, lastName, dob);

// using function and give other name 

function display({firstName:fname,lastName:lname,dob:date}){
    console.log(fname,lname,date)
}

display(person)




// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let person2 = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'Exampleland'
    }
}


const{address:{city}}=person2

//handling undefined
// const{address:{city}={}}=person2

console.log(city)