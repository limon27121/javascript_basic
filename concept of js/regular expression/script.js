let re
let str

re=/hello/i

console.log(re);
console.log(re.source)

str="Hello world my boy"

//it gives the array
let result=re.exec(str)

console.log(result)

// find the index

console.log(result["index"])


//test() gives true or false

result=re.test(str)
console.log(result)


// Match()=return array or null

result=str.match(re);
console.log(result)


// search()-return first index of match or -1


result=str.search(re)
console.log(result)


//replace()-return new string

let str1=str.replace(re,"hi")

console.log(str1)
