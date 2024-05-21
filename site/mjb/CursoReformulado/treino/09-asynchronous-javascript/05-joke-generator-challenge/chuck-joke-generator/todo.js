/**
 * Create a const jokeEl and getElementById joke
 * Create a const jokeBtn and getElementById joke-btn
 * Create a const generateJoke as a arrow function
 * Inside the arrow function create a const xhr with a new XMLHttpRequest
 * Then open the xhr with method GET and url https://api.chucknorris.io/jokes/random
 * now still on the arrow function create a xhr.onreadystatechange function
 * check if the readyState === 4
 * then check if the status === 200
 * if so jokeEl innerHTML = JSON parse this.responseText value
 * else jokeEl innerHTML = Something went Wrong (Not Funny)
 * 
 * at the end of the arrow function call xhr send
 * 
 * At the end create a jokeBtn addEventListener click calling the generateJoke arrow function
 * to avoid the document load without any joke also add an addEventListener DOMContentLoaded calling the generateJoke arrow function
 * 
 * 
 */
