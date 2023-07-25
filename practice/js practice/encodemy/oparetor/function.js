// function write

// x = add(4, 3);
// function add(a, b) {
//   return a + b;
// }
// console.log(x);

//nested function
// function f1() {
//   console.log("my 1st function");
// }
// function f2() {
//   f1();
//   console.log("my 2nd fuction");
// }
// f2();

//varible fuction

// let mul = function (a1, b1) {
//   console.log(a1 * b1);
// };
// mul(4, 3);

//arrow function

// let sub = (num1, num2) => {
//   result = num1 - num2;
//   console.log(result);
// };
// sub(10, 5);

//Anonymous fuction

(() => {
  console.log("hello world");
})();

//call back function

function printname(name) {
  console.log("hello " + name);
}

function getname(fn) {
  let name = "limon";
  fn(name);
}

getname(printname);
