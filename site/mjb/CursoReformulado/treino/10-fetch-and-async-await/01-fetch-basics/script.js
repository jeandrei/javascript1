
/**
 * fetch the ./movies.json and just console log the data
 * First just console log the .then response and see that we don't get the data
 * to do so we need to return the response.json and then console log the data
 * 
 * Then do the same but fitching the ./test.txt note that the response must be .text() instead of .json because it is a text file
 * 
 * And then fetch the https://api.github.com/users/bradtraversy and put the data.login to the h1
 */

// Fetching a JSON file
fetch('./movies.json').then((response)=> response.json())
.then((data) => console.log(data))

// Fetching a text file
fetch('./test.txt').then((response) => response.text())
.then((text) => console.log(text))

// Fetching from an API
fetch('https://api.github.com/users/bradtraversy').then((response) => response.json())
.then((data) => {
  document.querySelector('h1').innerText = data.login;
})