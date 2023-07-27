

class car{
constructor(brand){
    this.car=brand
}
  present(){
    return "i have a "+this.car 
  }
  //getter method
  get cname(){
    return this.car;
  }
  //setter method

  set cname(x){
     this.car=x
  }
}

//inherit this class
class model extends car{

    constructor(model,brand){
        //inherit parent method and properties 
        super(brand)
        this.model=model
    }
    show(){
        return this.present()+ ', it is a ' + this.model;
    }
}

let mycar=new model("x7","BMW")
console.log(mycar)

//getter method
let c=new car("premio");
console.log(c.cname)

//setter method
c.cname="allion";
console.log(c.present())

