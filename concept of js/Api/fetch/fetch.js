
const url='https://api.kanye.rest/'
async function fetch_data(){
    try{
    let response=await fetch(url)
    let data=await response.json()
    console.log(data.quote)
    }
    catch(error){
        console.log("error is : ",error)
    }

}
fetch_data()