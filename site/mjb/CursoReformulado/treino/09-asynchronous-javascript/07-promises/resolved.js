/* Seção 10 Aula 119  */

// Create a promise
const promise = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    console.log('Async task complete');
    resolve();
  }, 1000);
});

// promise.then(() => {
//   console.log('Promise consumed..');
// });

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      //what we want to return we must put in resolve
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('The promise has been resolved or rejected'));
//.then success
//.catch error
//.finally always

console.log('Hello from global scope');
