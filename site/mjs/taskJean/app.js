//Criar a constante selecionando botão ADD TASK
btnAdd = document.querySelector('#btnAdd');

//Seleciona a ul onde iremos adicionar a nova li
taskList = document.querySelector('.collection');

//Seleciona a ul com a task para poder criar o eventListenter no x para excluir
btnX = document.querySelector('ul');

taskInput = document.querySelector('#task');

//Clear task
clearBtn = document.querySelector('.clear-tasks');

//Seleciona o Filter Task input
filterInput = document.querySelector('#filter');


// Get Tasks from Local Storage
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));    
  }
  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    // Create text node and append to li TextNode objects contain only text content without any HTML 
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class secondary-content nos li para ficar do lado direito no materialize
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></li>';
    // Append the link to li
    li.appendChild(link);
    //Append li to ul
    taskList.appendChild(li); 
  });
}




//Criar a função addTask
function addTask(e){
  e.preventDefault();  
  const task = document.createElement('li');//cria um li
  storageTask(taskInput.value);
  let texto = document.createTextNode(taskInput.value);//adiciona um texto ao li
  task.appendChild(texto);//integra o texto ao li
  task.className = 'collection-item';//adiciona a classe ao li
  const link = document.createElement('a');//cria um link
  link.className = 'delete-item secondary-content';//adiciona a classe ao link
  const x = document.createElement('i');//cria o elemento x para remover a li
  x.className = 'fa fa-remove';
  link.appendChild(x);
  task.appendChild(link);
  taskList.appendChild(task);
  taskInput.value = '';  
}

//Cria a função removeTask
function removeTask(e){
  e.preventDefault();
  //parentElement se clicar na li o parent será a ul se clicar no x a parent sera o a href
  //então verifica se a classe do (a) contem delete-item
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Tem certeza que deseja remover')){
      removeStorageTask(e.target.parentElement.parentElement);
      e.target.parentElement.parentElement.remove();
    }
    
  } 
}

function clearTasks(e){
  e.preventDefault();
  //taskList.innerHTML = '';
  //taskList é a ul enquanto a ul tiver um filho no caso li
  while(taskList.firstChild){
    taskList.firstChild.remove();    
  }
  localStorage.clear();
}


//Para ver se armazenou no chrome clica em Application Local Storage 127.0.0.1:5501
function storageTask(task){
  let tasks;
  //se não existe no localStorage uma chave tasks
  if(localStorage.getItem('tasks') == null){  
    //o LocalStogage está vazio criamos um array vazio  
    tasks = [];
  } else {   
    //Caso tenha itens no localStorage de chave tasks pego todos os valores e passo para o array tasks
    //parse transforma um array em objetos 
    tasks = JSON.parse(localStorage.getItem('tasks')); 
  }
  //adiciono a task nova no array
  tasks.push(task);
  //Adiciono todos os valores novamente no localStorage dessa vez com o último valor informado    
  //stringify converte o valor em string exemplo texto 123 -> "texto 123"
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeStorageTask(taskItem){  
  let tasks;
  //se não existe no localStorage uma chave tasks
  if(localStorage.getItem('tasks') == null){  
    //o LocalStogage está vazio criamos um array vazio  
    tasks = [];
  } else {   
    //Caso tenha itens no localStorage de chave tasks pego todos os valores e passo para o array tasks 
    //parse converte um texto em um objeto
    //exemplo '{"result":true, "count":42}' -> {result: true, count: 42}
    tasks = JSON.parse(localStorage.getItem('tasks')); 
  }

  tasks.forEach(function(task,index){    
    
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//para funcionar o filter na função addTask ao criar o li
//tem que adicionar a classe e já em seguida fazer o append do texto
function filterTask(e){  
  //transormo o texto sempre em letra minúscula
  const text = e.target.value.toLowerCase();
  //Seleciono todas as li para dar um foreach em cada uma delas
  document.querySelectorAll('.collection-item').forEach(function (task){
    const item = task.firstChild.textContent;
    //-1 é que não tem o caractere na string, logo se for diferente
    //de -1 existe o caractere então mostra a task caso contrário não
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

//executa toda vez que o documento é carregado DOMContentLoaded
document.addEventListener('DOMContentLoaded', getTasks);

//Criar o eventListener do botão add
btnAdd.addEventListener('click',addTask);

//Cria a função para excluir a task
btnX.addEventListener('click',removeTask);

//Cria o eventListener do botão Clear Task
clearBtn.addEventListener('click',clearTasks);

//Cria o eventListener do Filter Tasks
filterInput.addEventListener('keyup',filterTask);