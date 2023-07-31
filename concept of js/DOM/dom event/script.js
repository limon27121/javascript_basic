function myfunction1(){
       const x=document.getElementById("h1tag");
       x.innerHTML="welcome to limons world "
       x.style.color="red"
}



function displayDate() {
  
    const y=document.getElementById("demo")
    y.innerHTML= Date();

  }

  function uppercase(){
    const x=document.getElementById("in1")
    x.value=x.value.toUpperCase()
    x.style.background="yellow"
  }

  function light(obj){
   obj.style.background="green"
  }


  //addevent listener add
  document.getElementById("bt2").addEventListener("click",function(){
    document.getElementById("demo1").innerHTML="event listener works well";
  });
  