class car{
    constructor(name,year){
        this.year=year;
        this.name=name;

    }
    //method
    run(){
        console.log(this.name+" is running")
    }
    //method with parameters
    add(a,b){
         return a+b
    }
}

let x=new car("Bmw",2010);
x.run()
let y=x.add(2,4)
console.log(y)
console.log(x)