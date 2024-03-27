/*
  4 create a function insertAfter with two parameters newEl and existingEl
  first look at what is the existingEl.parent element and try to figure out what is gonna be the target if we put insertBefore newEl, existingEl
  we'll not get the target we want but if we do existingEl.nextSibling we'll get it
*/
function insertAfter(newEl, existingEl){
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling)
}


// New element to insert
// 1 create a const li and create an element li that we will insert
const li = document.createElement('li')

// 2 set li textContent to Insert Me After!
li.textContent = 'Insert Me After'

// Existing element to insert after
// 3 create a  select the firstItem o li
const firstItem = document.querySelector('li:first-child')

// Our custom function
// 5 call the function insertAfter passing li and firstItem
insertAfter(li,firstItem)
