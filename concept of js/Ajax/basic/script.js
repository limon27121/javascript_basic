document.getElementById("get").addEventListener("click",data)


function data(){

    //create object of XMLHttpRequest()
let xhr=new XMLHttpRequest()

//properties of object
xhr.open("GET","index.txt",true);

//function of this properties callback function
xhr.onload=function(){
// status list
// 200: "OK"
// 403: "Forbidden"
// 404: "Page not found"

//check the status is ok?
if(this.status==200){
    console.log(this.responseText);
    console.log(this.status)

    document.getElementById("output").innerHTML=this.responseText;
}

}

//send the value of data 
xhr.send();

//print the properties of object
 console.log(xhr)


}