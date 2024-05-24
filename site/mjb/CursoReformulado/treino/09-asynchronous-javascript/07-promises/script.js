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


const promise = new Promise((resolve,reject) =>{
  setTimeout(()=>{
    console.log('Asynk task complete');
    resolve();
  },1000)
});

promise.then(()=>{
  console.log('Promise consumed...');
})

const getUser = new Promise((resolve,reject) => {
  setTimeout(() => {
    let error = false;
    if(!error){
      resolve({name: 'John', age: 30});
    } else {
      reject('Erro: Something went wrong');
    }
  },1000);
});


getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('The promise has been resolved or reject'))