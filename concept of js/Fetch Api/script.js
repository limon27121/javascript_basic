// callback function structure

setTimeout(function(){
    console.log("hello world")
},3000)


let persons=[
    {firstname:"limon",lastname:"alam"},
    {firstname:"arifin",lastname:"islam"}
]

//using call back function we can make it asence
function create_persons(person,callback){
     setTimeout(function(){
        persons.push(person)
        callback()
     },3000)



}

function get_person(){
    setTimeout(function(){
       let output=" "

       persons.forEach(function(person){
            output+=`<li>${person.firstname} ${person.lastname}</li>`
       })
       document.getElementById("output").innerHTML=output
    },1000)

    }
 create_persons({firstname:"mansur",lastname:"rahman"}, get_person)


      
