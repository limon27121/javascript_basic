const person = {
    name: "John",
    age: 30,
    city: "New York",
    //use getter method
    get lan(){
      return this.name;
    },

    set add_city(city){
        this.city=city
    }
  };
 
  //display object values and convert project to array
  let x=Object.values(person);
  console.log(x)
//convert object to json
  let y=JSON.stringify(person)
  console.log(y)

  console.log(person.lan)
  //using setter method
  person.add_city="bangladesh"

  console.log(Object.values(person))


