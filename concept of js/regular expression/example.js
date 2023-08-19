// Examples
let re;
let str;

// Postal Code
// 4700, 4000
// re = /^[0-9]{4}$/;
// str = "4000";

// Phone Number
// 01717888888 +8801717888888 8801717888888
// re = /^(\+)?(88)?01[0-9]{9}$/;
// str = "+8801717888888";

// Email Address
// moontaser009@gmail.com
//bohubrihi.learn@edu.com.bd
re = /^([A-z0-9].?)+[^.]@([A-z0-9].?)+[^.]$/ ;
str = "moontaser009@gmail.com" ;

console.log(re.test(str)); 