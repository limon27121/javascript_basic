document.getElementById("output1").addEventListener("click",get_data)


function get_data(){
    fetch("https://api.chucknorris.io/jokes/categories").then(function(res){
              
    // console.log(res)
    return res.json()

    }).then(function(data){
        console.log(data)
    })
    .catch(function(err){
        console.log(err)
    })
}


// using arrow function

function get_data(){
    fetch("https://api.chucknorris.io/jokes/categories").then(res=>{
              
    // console.log(res)
    return res.json()

    }).then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
}