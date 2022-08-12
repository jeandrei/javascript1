// set local storage item keeps value even after close browser
//localStorage.setItem('name', 'John');
//localStorage.setItem('age', '30');
//Para ver os valores no console clique em >> Application->Local Storage->http://127.0.0.1 

// set session storage item delete values as soon as session/browser closes
//sessionStorage.setItem('name', 'Beth');
//Para ver os valores no console clique em >> Application->Session Storage->http://127.0.0.1 

// remove from storage
//localStorage.removeItem('name');

// get from storage
//const name = localStorage.getItem('name');
//console.log(name);
//const age = localStorage.getItem('age');

// clear local storage
// localStorage.clear();

// console.log(name, age);

 document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    //se não existe tasks cria o array tasks
    tasks = [];
  } else {
    // se não pega os tasks gravados no localstorage se não vai reescrever com um array vazio
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  //coloca a nova task que vem do input no array tasks que está com todas as tasks que vem do else
  tasks.push(task);

  // grava a nova task no localstorage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
}); 