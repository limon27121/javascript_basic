let cars = ["volvo", "rover", "chr"];
console.log(cars);
console.log(cars.length);
console.log(cars[2]);
//push
cars.push("premio", "lexsus");
console.log(cars);

//pop
cars.pop();
console.log(cars);

//shift
cars.shift();
console.log(cars);

//unshift
cars.unshift("volvo");
console.log(cars);

//splice
cars.splice(2, 1, "lexsus", "bmw", "audi");
console.log(cars);

//slice
newcars = cars.slice(3, 6);
console.log(newcars);

//concat

arr1 = [1, 23, 24];
arr2 = [8, 9, 10];
arr3 = [];
arr3 = arr3.concat(arr1, arr2);
console.log(arr3);

// string sort
cars.sort();
console.log(cars);

//reverse

cars.reverse();
console.log(cars);

//join
arr4 = arr1.join("$");
console.log(arr4);

//map
let data = arr1.map((x) => x + 2);
console.log(data);

//find(),find index() in w3 school
