// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Sempre defina o id que quer alterar a uma constante
const taskTitle = document.getElementById('task-title');

// Changing styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
//desapear
//taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Task';
// Quando quiser colocar com código html
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()
//select by id
console.log(document.querySelector('#task-title'));
//select by id
console.log(document.querySelector('#task-title'));
//select by tag
console.log(document.querySelector('h5'));

// gonna apply for the first li
document.querySelector('li').style.color = 'red';

// subclass
document.querySelector('ul li').style.color = 'blue';

//selecionar o último usa css li:last-child
document.querySelector('li:last-child').style.color = 'red';

// specify a particular item in this case the third one
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';

// document.getElementsByClassName
/* const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello'; */

// Retorna todos os elementos de classe collection-item dentro da ul
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// document.getElementsByTagName
let lis = document.getElementsByTagName('li')
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Convert HTML Collection into array
lis = Array.from(lis);
lis.reverse();
lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index} : Hello`;
});

// document.querySelectorAll
// collection e collection-item são as classes nesse caso retorna um NodeList
// daí não precisa converter para array. É só olhar no console vai aparecer NodeList
const items2 = document.querySelectorAll('ul.collection li.collection-item');
items2.forEach(function(item, index){  
  item.textContent = `${index} : Hello`;
});

//cores alternadas
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){  
  li.style.background = '#ccc';
});

liEven.forEach(function(li, index){  
  li.style.background = '#f4f4f4';
});



console.log(items2);