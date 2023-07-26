function person(first,last,age){
    this.first=first;
    this.last=last;
    this.age=age;
    this.fname=function(){
        return this.first+" "+this.last;
    }
}

let p1=new person("limon","alam",25)
let p2=new person("arifin","kazi",25)

console.log(p2)
console.log(p2.fname());

// add country properties but value are common for every instance
person.prototype.country="bangaldesh";

let p3=new person("arifin1","kazi",25,"italy")

console.log(p3.country)

console.log(p1.country)