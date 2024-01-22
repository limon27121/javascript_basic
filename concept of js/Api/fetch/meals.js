
async function meal_data(){
    try{
    let response=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    let data=await response.json()
    console.log(typeof(data))
    console.log(data.meals[0].strCategory)
    console.log(data.meals[0].strMeal)
    }
    catch(error){
        console.log("error is : ",error)
    }

}


// function nested_data(){
//     console.log("hello check")
// }
meal_data()