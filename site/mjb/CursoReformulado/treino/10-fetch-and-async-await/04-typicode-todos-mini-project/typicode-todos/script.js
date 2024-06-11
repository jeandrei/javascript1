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
 * Lets set a attribut to the div so that we can target it when we want to remove
 * div setAttribute 'data-id' as the name and todo.id as the value
 * you'll see that every element now have a data-id="value"
 * Before append the div lets create a class to make it dark when the task is done
 * so check if todo.completed is true if so change the style of the div
 * div classList add 'done'
 * then add to the the div created to the todo-list id element in the DOM
 * 
 * Now let's convert the code inside forEach into a const function addTodoToDOM once we're gonna have to use this code
 * every time we create a new one.
 * Create a const addTodoToDOM as arrow function and pass a todo as parameter
 * Cut the code inside the foreach and past inside the function
 * now inside the foreach just call the addTodoToDOM(todo)
 * 
 * Now let's do the create.
 * First create const function init as arrow function where we're gonna have all the init functions
 * Put the getTodos inside
 * Call init() at the end of the file
 * If you want you can call the getTodos as EventListener like document.addEventListener('DOMContentLoaded', getTodos)
 * Now let's create another EventListener for the form
 * so select the 'todo-form' id and add an EventListener for submit and call a function createTodo
 * Then create a const createTodo passing the e event object because we want to prevent the default behiver of the form
 * inside the function prevent the default an just console log 1 to check if everything is working
 * now console log e target firstElementChild to see the result you'll see thet it is selecting the input
 * as we are selecting the form and not the button the firstElementChild of the form is the input
 * now just console firstElementChild.value, if you typ something in the input and clic the add button it should 
 * console the value
 * Now instead of console log the value let's create an object const newTodo the title is the input value
 * and completed must be false
 * now let's make a post request
 * fech(apiUrl) 
 * the body must be JSON stringify newTodo
 * in .then add the new task to the DOM addTodoToDOM(data)
 * 
 * Now in the console click in Fetch/XHR then in todos and then in headers
 * see that the method is post, status is 201
 * Click in response and seee the response of the server, you'll see that we get the id of 201 so that the post was created
 * 
 * 
 * names:
 * apiUrl
 * getTodos -> ?_limit=5 -> data-id
 * init 
 * addTodoToDOM
 * createTodo
 * 
 */