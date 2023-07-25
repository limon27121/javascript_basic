//object with methods

const person={
      first_name:"Limon",
      last_name:"Alam",
      age:25,
      full_name:function(){
        //using this keyword instead of object declaration
        return this.first_name.toUpperCase()+" "+this.last_name;

      },
        //using arrow function
      add:(a,b)=>{
           return a*b
      }
}

//calling methods
console.log(person.full_name())
console.log(person.add(2,4))