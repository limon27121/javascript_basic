// http://www.icndb.com/api/
// API
// RESTful API

document.getElementById('get_data').addEventListener('click', loadJokes);

function loadJokes(e) {
   
    let number = document.getElementById('numberJokes').value;
    // console.log(number);

    // http://api.icndb.com/jokes/random/
    // https://api.chucknorris.io/jokes/random

    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.chucknorris.io/jokes/categories`, true);

    //

    xhr.onprogress = function () {
        document.getElementById('output').innerHTML = "<h3>Loading......</h3>";
    }

    xhr.onload = function () {
        if (this.status === 200) {

            console.log(this.responseText)

            // convert json to object

            let data = JSON.parse(this.responseText);

            //print the object

            console.log(data)

            //access the value of object
            // let jokes = data;
            // console.log(jokes)
            
            //make a order list
            let output = "<ol>";

            data.forEach(function (item) {
                console.log(item);
                output += `<li>${item}</li>`;
            });
            output += "</ol>";
            document.getElementById('inner').innerHTML = "here is the list";
            document.getElementById('output').innerHTML = output;
            //console.log(jokes);
            //console.log(data);
            
        }
    }

    xhr.send();
    console.log(xhr)
}