/* Seção 11 Aula 128  */


const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiUrl + '?_limit=5')
    .then((res) => res.json())
    .then((data) => {
      data.forEach(todo => addTodoToDOM(todo))
    })
}

const addTodoToDOM = (todo) => {
  const div = document.createElement('div')
  div.setAttribute('data-id', todo.id)
  div.classList.add('todo')
  if(todo.completed){
    div.classList.add('done')
  }
  div.appendChild(document.createTextNode(todo.title))
  document.querySelector('#todo-list').appendChild(div) 
}

const toggleCompleted = (e) => {
  e.preventDefault()
  if(e.target.classList.contains('todo')){
    e.target.classList.toggle('done');
   updateTodo(e.target.dataset.id, e.target.classList.contains('done'))
  }  
}

const createTodo = (e) => {
  e.preventDefault()
  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false
  }
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type':'application/json'
    }
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data))
}

const updateTodo = (id, completed) => {
  fetch(`${apiUrl}/${id}`,{
    method: 'PUT',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type':'application/json'
    }
  }).then((res) => res.json())
    .then((data) => console.log(data))
}

const deleteTodo = (e) => {
  if(e.target.classList.contains('todo')){
    const id = e.target.dataset.id
    fetch(`${apiUrl}/${id}`,{
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data) => e.target.remove())
  }
}

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos)
  document.querySelector('#todo-form').addEventListener('submit', createTodo)
  document.querySelector('#todo-list').addEventListener('click', toggleCompleted)
  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo)
}

init()