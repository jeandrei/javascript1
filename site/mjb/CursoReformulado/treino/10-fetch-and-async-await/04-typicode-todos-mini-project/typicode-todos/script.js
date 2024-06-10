/**
 * First we need to create a function to get the todo list
 * Lets create a const apiUrl so that if we need to changhe the url it will make it easeier set to 
 * 'https://jsonplaceholder.typicode.com/todos'
 * Now lets create the const getTodos using arrow function sintax 
 * Inside first fetch the apiUrl also limit the results + '?_limit=5'
 * then return res.json()
 * then just console log data
 * 
 * So now we want to put the data into the DOM inside the todo-list id
 * inside the .then with the actual data lets do a forEach to show the data in the DOM
 * inside the forEach create a const div and create an alement div to it
 * then in div appendChild a document.createTextNode(todo.title)
 * then add to the todo-list id element in the DOM
 */



const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiUrl + '?_limit=5')
  .then((res) => res.json())
  .then((data) => {
    data.forEach(todo => {
      const div = document.createElement('div')
      div.appendChild(document.createTextNode(todo.title))
      document.getElementById('todo-list').appendChild(div)
    });
  })
}

//continuar minuto 6


getTodos();