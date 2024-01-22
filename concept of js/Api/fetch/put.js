 async function put_data(){
    try{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method:"put",
        body:JSON.stringify({
            title:"put the data",
            body:"check the data from api",
            check:"true"

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    const res= await response.json()
    console.log(res)
} 
catch(error){
 console.log("error is : ",error)
}

}

put_data()