//Lesson 59 Get some data from a text file and bring it to the web page using XHR object

document.querySelector("#button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  /**
   * The xhr object has properties and methods associated
   * just like other methods
   * OPEN - The type of request we want to make and the URL or the
   * file name we wanna make it through
   */

  /**
   * GET - Method
   * data.txt - what to load
   * true - asynchronous
   */
  xhr.open("GET", "data.txt", true);

  // Optional - Used for spinners/loaders Display while is loading
  xhr.onprogress = function(){
    console.log('READYSTATE IN PROGRESS PROCESSING REQUEST CODE (3)', xhr.readyState);
  }


  //console.log('READYSTATE', xhr.readyState);

  // onload is already on state 4 don't need to check for readyState
  // this is the correct way to do it
  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    //if the HTTP Statuses = 200 everything is ok
    if (this.status === 200) {
      //console.log(this.responseText);
      document.querySelector('#output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

 /*  xhr.onreadystatechange = function(){
    console.log('READYSTATE', xhr.readyState);
    // se o HTTP status = 200 e o readyState = 4 request finished
    if(this.status === 200 && this.readyState === 4){
      console.log(this.responseText);
    }
  } */

  // if an error occurred
  xhr.onerror = function(){
    console.log('Request error');
  }

  xhr.send();
}

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
