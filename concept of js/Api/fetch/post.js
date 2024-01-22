async function postData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
      });
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  postData();



  
  