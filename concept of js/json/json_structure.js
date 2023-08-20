
// structure of object
var student={
    name:"limon",
    id:27121,
    college:"bcic"

};

// structure of json
var student_json={

    "name":"limon",
    "id":27121,
    "college":"bcic"

};

console.log(typeof(student_json))



// convert object to json

var student_json1=JSON.stringify(student);

console.log(typeof(student_json1))
console.log(student_json1)


// convert to json to object

var student_obj=JSON.parse(student_json1)

console.log(typeof(student_obj))
console.log(student_obj)