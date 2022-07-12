const http = new EasyHTTP;


 //get with Promise
http.getP('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err)); 


 //get with async await
http.getA('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err)); 

data = [
  {
    name: 'Jean',
    username: 'Jeandex',
    email: 'jeandex@gmail.com'
  }
]

//Post with Promise
http.postP('https://jsonplaceholder.typicode.com/users',data)
.then(res => console.log(res))
.catch(err => console.log(err)); 

//Post with async await
http.postA('https://jsonplaceholder.typicode.com/users',data)
.then(res => console.log(res))
.catch(err => console.log(err)); 

//Post with Promise
http.putP('https://jsonplaceholder.typicode.com/users/2',data)
.then(res => console.log(res))
.catch(err => console.log(err)); 

//Put with Async
http.putA('https://jsonplaceholder.typicode.com/users/2',data)
.then(res => console.log(res))
.catch(err => console.log(err));

//Delete with Promise
http.deletP('https://jsonplaceholder.typicode.com/users/2')
.then(res => console.log(res))
.catch(err => console.log(err))

//Delete with await async
http.deleteA('https://jsonplaceholder.typicode.com/users/3')
.then(res => console.log(res))
.catch(err => console.log(err));