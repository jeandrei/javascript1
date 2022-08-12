const http = new EasyHTTP;

// Get Users from https://jsonplaceholder.typicode.com/users
// it will return a Promise
/*  http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));  */

// User Data
const data = {
  name: 'Jhon Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}
  //Create Post
/* http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
 */
  //Update Post
/*   http.put('https://jsonplaceholder.typicode.com/users/1', data)
  .then(data => console.log(data))
  .catch(err => console.log(err)); */

  //Delete post
  http.delete('https://jsonplaceholder.typicode.com/users/1', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));