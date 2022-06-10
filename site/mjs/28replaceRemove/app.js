// REPLACE ELEMENT AULA 28
let val;
// Create Element
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heding
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove listitem
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES AND ATRRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];//get first a tag

val = link.className;
val = link.classList;//retorna todas as classes em um array
val = link.classList[0];
val = link;

// Add class
link.classList.add('teste');

// Remove class
link.classList.remove('teste');

// Atrributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');//vai retornar true or false
link.removeAttribute('title');//vai remover o atributo title
val = link;
console.log(val);