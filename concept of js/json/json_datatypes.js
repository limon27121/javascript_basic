// https://jsonlint.com/


//string 
//number
//object
//array
//boolean
//null

var person={
name:"limon",
age:30,
days:{
    day1:"blue",
    day2:"red"
},


cars:["premio","bmw"],
present:"true",
taka:null
}

var s1_json=JSON.stringify(person)

console.log(s1_json)
console.log(typeof(s1_json))



// to access the json property

//convert the json to obj

var obj1=JSON.parse(s1_json)

console.log(obj1.name)


