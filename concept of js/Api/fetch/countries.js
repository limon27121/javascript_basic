async function country(){
    try{
    let response=await fetch('https://restcountries.com/v3.1/all')
    let data=await response.json()
    console.log(typeof(data))
    display(data)
   
    }
    catch(error){
        console.log("error is : ",error)
    }

}

function display(data){
    data.forEach(element => {
     console.log("city name: ",element.name.common)
     console.log("flags are: ",element.flags.png)
     console.log("region is: ",element.region)
     console.log("capital is : ",element.capital[0])
    });
 }


country()