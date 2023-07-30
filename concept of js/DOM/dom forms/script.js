function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    let y=document.forms["myForm"]["age"].value
    if(y==""){
        return false;
    }
  }


//   function valid(){
    
//     if(document.forms["myForm"]["fname"].value==""){
//         return false;
//     }
//   }