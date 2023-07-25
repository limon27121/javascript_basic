const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
 
  //display object values and convert project to array
  let x=Object.values(person);
  console.log(x)
//convert object to json
  let y=JSON.stringify(person)
  console.log(y)