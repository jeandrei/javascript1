/* Seção 07 Aula 74  PRIORIZE O ELEMENT DA AULA ANTERIOR POIS 99,9% VC VAI USAR ELEMENT
pelo que eu entendi node é tudo no documento inclusive espaços, comentarios etc. já elements são basicamente as tags, classes e ids
um node nem sempre é um elemento agora todo elemento é um node
*/
let output;

// Get child nodes

// Create a const parent and with querySelector get the class parent assigned to it

// output = parant childNodes

// output = parent childNodes index zero textContent it will return nothing because the zero node is a blank space

// output = parent childNodes index zero nodeName

// output = parent childNodes index three textContent

// output = parent childNodes index three outerHTML

// output = parent childNodes index three innerText = Child One

// output = parent childNodes index five style color = red

//output = parent firstChild

//output = parent lastChild

//parent lastChild textContent = Hello

// Get parent node

// create a const child and select class child

// output = child parentNode

// output = child parentElement

//child parentNode style backgroundColor = #ccc

//child parentNode style padding 10 px
child.parentNode.style.padding = '10px';

// Get sibling nodes
// const secondItem = child nth 2
const secondItem = document.querySelector('.child:nth-child(2)');

//output = secondItem nextSibling
output = secondItem.nextSibling;
//output = secondItem previousSibling
output = secondItem.previousSibling;

console.log(output);
