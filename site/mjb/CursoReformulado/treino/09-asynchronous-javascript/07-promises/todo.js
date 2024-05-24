/**
 * Create a const promise 
 * inside create a setTimeout just console log 'Asynk task complete and resolve
 * The timer must be 1000 miliseconds
 * 
 * Then call the promise.then and just console log 'Promise consumed...'
 * 
 * Create a const getUser new Promise
 * Again setTimeout 
 * Inside setTimeout with 1000 miliseconds, inside create a let error and set to true
 * check if not error then
 * resolve returning { name: 'John', age: 30 }
 * else reject returnin 'Error: Something went wrong'
 * then call the promise .then((user) => console.log(user))
 * .catch((error) => console.log(error)) and 
 * .finally(() => console.log('The promise has been resolved or rejected'));
 * 
 * also at the end just console log 'Hello from global scope' to see the order of execution
 */