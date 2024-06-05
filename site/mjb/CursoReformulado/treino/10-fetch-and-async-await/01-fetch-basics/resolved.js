
/* Seção 11 Aula 125  */

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