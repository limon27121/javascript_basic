// try{
//  addalert("hi i am limon")
// }
// catch(err){
//  document.getElementById("error").innerHTML=err.message;
// }



let e=4
try{
       if (e=="")
       throw "empty"
       if(e>5)
       throw "greater than 5";
       if(e<5)
       throw {
        message:"too low",
        id:5001
       };

}
catch(err){
      console.log(err);
}

console.log("test case passed")




// const person={
//     first_name:"limon",
//     last_name:"boss",
//     age:25,
//     f1:function(){
//         return this.first_name;
//     }
// }

// console.log(person.f1);
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     },
//     getfullname:

//   };

// console.log(person.fullName)


// let func=(a,b)=>{
//     return a*b
// }

// console.log(func(3,4));

// function print(){
//     console.log("hello world")
// }
// print()

class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    age(){
        const date=new Date();
        const t=date.getFullYear();
        return t-this.year;
    }
}

const my_car=new Car("premio",2014);

console.log(my_car.name);
console.log(my_car.age());
