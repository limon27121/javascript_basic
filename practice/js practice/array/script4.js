let em='{ "employees" : ['+
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj1=JSON.parse(em);
console.log(em);
console.log(obj1.employees[0].firstName)


let p={
    first_name:"limon",
    last_name:"alam"
}

console.log(p.first_name)

console.log(JSON.stringify(p))

const person = {
    fname:"John",
    lname:"Doe",
    age:25
  }; 
  
  let txt = "";
  for (let x in person) {
    console.log(person[x]);
  }
  
