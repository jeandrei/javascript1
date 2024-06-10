/**
 * First we need to create a function to get the todo list
 * Lets create a const apiUrl so that if we need to changhe the url it will make it easeier set to 
 * 'https://jsonplaceholder.typicode.com/todos'
 * Now lets create the const getTodos using arrow function sintax 
 * Inside first fetch the apiUrl also limit the results + '?_limit=5'
 * then return res.json()
 * then just console log data
 */



const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiUrl + '?_limit=5')
  .then((res) => res.json())
  .then((data) => console.log(data))
}


getTodos();