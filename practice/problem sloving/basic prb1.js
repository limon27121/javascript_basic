// print random number using Math.random 



function get_random_number(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


  console.log(get_random_number(1,6))


//array sort alphabetically

let arr1=["limon","arifin","suvra","shad","mansur"]

console.log(arr1.sort())


//number sort in ascending order

let arr2=[2,4,7,3,9,15]
console.log(arr2.sort(function(a,b){
    return a-b;
}))


//descending order

let arr3=[2,3,4,5,6,7,8]

console.log(arr2.sort(function(a,b){
    return b-a
}))


//leap year checking

function leap_year(year){
    if((year%100===0)||(year%4===0 && year%100!==0)){
        console.log(`${year} is leap year`)
    }else{
        console.log(`${year} is not leap year`)
    }
}


leap_year(2028)


//vowel counting from sentence

const vowels=["a","e","i","o","u","A","E","I","O","U"]

function count_vowels(sentence){
    //convert string to array
const letters=Array.from(sentence)
let count=0
// check the vowels
letters.forEach(function(value){
   if(vowels.includes(value)){
     count++
   }
})
return count

}

console.log(count_vowels(" i love bangladesh"))


//find duplicate value of array

const numbers=[1,2,2,3,4,4,5,6,5,7,6]

const duplicates=numbers.filter(function(value,index){
    return numbers.indexOf(value)===index
})
console.log(duplicates)
