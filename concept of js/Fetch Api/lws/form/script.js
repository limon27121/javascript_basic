function validation() {
    const inputObj = document.getElementById("id1");

    //check validation in custom way
    if (inputObj.validity.rangeOverflow) {
        inputObj.setCustomValidity("You have made a range overflow error!");
    } else if (inputObj.validity.rangeUnderflow) {
        inputObj.setCustomValidity("You have made a range underflow error!");
    } else if (inputObj.validity.valueMissing) {
        inputObj.setCustomValidity("Value missing!");
    }

     //check validation in default way
    if (!inputObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inputObj.validationMessage;
    }
}
