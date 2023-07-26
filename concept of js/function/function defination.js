//function declaration

function myFunction(a, b) {
    return a * b;
  }

  console.log(myFunction(2,3))


  let x=function sum(a,b){
    return a+b
  }

  let z=x(2,3);
  console.log(z)

  let y=(a,b)=>{
    return a-b
  }

  let sub=y(10,2);
  console.log(sub)
  
//call method work
  const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }


  console.log(person.fullName.call(person1))

//apply method use
  console.log(Math.max.apply(null,[1,2,3,4,5]))
  console.log(Math.min.apply(null,[1,2,3,4,5]))

  //closure

  function temp(){
    let c=0;
    return function(){

        c++;
        return c
    }
  }

  let add=temp();
  console.log(add())
  console.log(add())