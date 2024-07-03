/**
 * First create a function getData(endpoint) where endpoint is gonna be the url to XMLHttpRequest
 * This function return a Promise
 * In the promise create a const xhr  XMLHttpRequest
 * then xhr open GET endpoint
 * Then xhr onreadystatechange function check if readyState === 4 if so check if status === 200 if so resolve parsing this responseText
 * Else reject with the message Error: Something went wrong
 * To xhr.send create a setTimeout with a random number random 3000 + 1000
 * 
 * Then call getData('./movies.json') console log movies and return getData('./actors.json') console log actors and 
 * return getData('./directors.json') console log directors and in the catch console log error
 * 
 * After that create a function getAllData and get all the data using async await and console log movies, actors and directors
 * Then create a function getAllDataWithFetch and do the same above but instead using the getData use fetch and console log
 * movies, actors and directors
 * 
 * Now create a function getAllDataPromiseAll use destructuring like const [moviesRes, actorsRes, directorsRes] 
 * and fetch all three movies, actors and directors and console log them use promise.all() async await
 * 
 * Finaly create a function getAllDataPromiseAll2() use promise.all() but this time instead use await use .then
 * 
 */