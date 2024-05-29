
/**
 * Create const promise with new promise
 * then create a setTimeout with 1000ms
 * inside the setTimeout create a const error set to true
 * then check if no error resolve with a object name: 'John', age: 30
 * and reject with 'Error: Something went wrong'
 * 
 * Then chain the promise clg user and return username
 * clg name returning name length
 * clg nameLength
 * catch clg error and returning 123
 * and at the end clg 'This will run no matter what', x
 */


const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true
    if(!error){
      resolve({name: 'John', age: 30})
    } else {
      reject('Something went wrong...')
    }
  },1000)
})


promise
.then((user) => {
  console.log(user)
  return user.name
})
.then((name) => {
  console.log(name)
  return name.length
})
.then((nameLength) => {
  console.log(nameLength)
})
.catch((err) =>{
  console.log(err);
  return 123;
})
.then((x) => {
  console.log('This will run no metter what, ' + x);
})