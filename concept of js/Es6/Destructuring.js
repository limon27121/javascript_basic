
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


