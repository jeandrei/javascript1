/**
 * Create a itemList addEventListener click and call a function removeItem that we will create next
 * Create a function removeItem getting the e object event
 * To test what you are getting just console.log e.target
 * Another test if you just make e.target.remove() and click the x button it will remove the button and not the item
 * Now console e.target.parentElement and see that when you click at the x button what you get is the button because button is the parent of the icon
 * Now if you console e.target.parentElement.classList you'll see all the classes of the item you clicked and when click in the x button remove-item is one of the classes
 * To filter we can check if the parent of the item we clicked has this class remove-item
 * so first check if the e.target.parentElement.classList.contains('remove-item') if so procede with the e.target.parentElement.parentElement.remove()
 * Now before remove show an alert to the user asking for confirmation if(confirm('Are you sure?')) then procede with the remove
 * Now create a const clearBtn and get the element id clear
 * Create a clearBtn addEventListener click and call a function called clearItems that we will create next
 * Now create a function callse clearItems
 * And while listItem.firstChild remove the itemList.removeChild(itemList.firstChild)
 * Create a const itemFilter and get element id filter * 
 * Create a function checkUI, this function will check if there is items in the UI if no item is present we'll not show clear button
 * Inside the function first get the items, create a const items and get the itemList all li's
 * Then check if items.lenght is iqual to zero make the clear button invisible 
 * with clearBtn.style.display = 'none' and do the same to itemFilter else make display block
 * Then call the function at a global scope like in the end of the filter
 * Now call the function checkUI inside the function addItem also to update when an item is added
 * And also right after remove item in the function removeItem call the function checkUI
 * And also in the clearItems function call the function checkUI
 * Now create a itemFilter addEventListener input and call a function filterItems
 * Now above the checkUI let's create this function filterItems getting the e event object
 * Inside the function create a const items and querySelectorAll li
 * Then create a const text and get the e.target.value toLowerCase 
 * Test with console.log text to see if you're getting what is typed
 * Now items foreach item and inside create a const itemName and get the item.firstChild.textContent.toLowerCase()
 * Console log itemName you'll see that it will return all the names inside the li
 * Then if itemName.indexOf(text) != -1 
 * Test just console log true if != -1 else false
 * Then if true just make the display flex else make the display none
 * 
 */