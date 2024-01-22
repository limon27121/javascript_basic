// const url='https://randomuser.me/api/?gender=female'
async function nested_data(){
    try{
    let response=await fetch('https://randomuser.me/api/?exc=login')
    let data=await response.json()
    console.log(typeof(data))
    console.log(data.results[0].picture.large)
    }
    catch(error){
        console.log("error is : ",error)
    }

}


// function nested_data(){
//     console.log("hello check")
// }
nested_data()