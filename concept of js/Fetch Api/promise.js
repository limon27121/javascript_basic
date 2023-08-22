
//promise.then

let persons=[
    {firstname:"limon",lastname:"alam"},
    {firstname:"arifin",lastname:"islam"}
]


function create_persons(person){
    let prom=new Promise(function(resolve,reject){
        persons.push(person)
        let err=false
        if(!err){
        resolve()
        }
        else{
            reject("something wrong")
        }
    })
    return prom
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
create_persons({firstname:"mansur",lastname:"rahman"}).then(get_person).catch(function(err){
    console.log(err)
})
