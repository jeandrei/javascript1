// querySelectorAll()
// Returns a NodeList

// Create a const listItems with all elements with class item use querySelectorAll

// Access elements by index
// Console log listItems index 1 innerText

// Setting a color for specific element
// Set the listItems index 1 color to red

// We can use forEach() on a NodeList
/* Using forEach go through listItems array and change the color to red and 
if the index = 1 then remove the item  if the index = 0 then add the html below
Oranges
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>
*/


// getElementsByClassName()
// Returns an HTMLCollection that can't go through forEach, to do that you need to turn into array

// Create a const listItems2 and use getElementsByClassName to get all elements with classname item 

// Console log the listItems2 index 2 innerText

// Create a const listItemsArray that gets the listItems2 in array format using Array.from

// Now that listItemsArray is an array, go through it with forEach and console log item innerText

// getElementsByTagName()

// Create a const listItem3 that gets the elements by tag use getElementsByTagName to get all li tag

// Console log listItem3 index 0 innerText

