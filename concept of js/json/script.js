var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        //console.log(data);
        //call function
        jsonData(data);
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();


function jsonData(json_obj) {
    // console.log(json_obj);

    //convert obj
    var js_obj = JSON.parse(json_obj);
    // console.log(js_obj);
    for(let x in js_obj.persons){
        var persons=js_obj.persons
        console.log(persons[x])

        for(let y in persons[x]){
            // properties of persons

            // console.log(y)
              
            //values of person
            console.log(persons[x][y])
        }
    }
}


