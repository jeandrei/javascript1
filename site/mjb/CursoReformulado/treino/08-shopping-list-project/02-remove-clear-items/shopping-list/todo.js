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
 * Now call the function checkUI inside the function onAddItemSubmit also to update when an item is added
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
 * LocalStorage
 * Create a function addItemToStorage(item)
 * Inside the function first check if isen't there any item in the LocalStorage
 * To do so create a let itemsFromStorage;
 * Then check if localStorage.getItem('items') === null
 * If it is null let's set the itemsFromStorage to an empty array
 * else then we need to load the items from LocalStorage
 * itemsFromStorage = JSON.parse(LocalStorage.getItem('items'))
 * Then we can get the new item and push it to the array
 * itemsFromStorage.push(item)
 * And then set to LocalStorage 
 * localStorage.setItem('items', JSON.stringify(itemsFromStorage))
 * Display the items from localStorage on load the page
 * Create a function getItemsFromStorage()
 * Inside the function first check if isen't there any item in the LocalStorage
 * To do so create a let itemsFromStorage;
 * Then check if localStorage.getItem('items') === null
 * If it is null let's set the itemsFromStorage to an empty array
 * else then we need to load the items from LocalStorage
 * itemsFromStorage = JSON.parse(LocalStorage.getItem('items'))
 * then return itemsFromStorage
 * now create a document addEventListener 'DOMContentLoaded' and call the function dysplayItems that we will create next
 * Now create the function dysplayItems() that will load the items to the page
 * inside the function create a const itemsFromStorage and use the function getItemsFromStorage() to get the items
 * then itemsFromStorage foreach item  addItemToDOM(item)
 * then call the function checkUI
 * And to make the code more structured instead of all the eventListeners be in the global scop create a function init and put all the 
 * eventListeners in there and then as the last line call the function init
 * Create another itemList addEventListener click and call the function onClickItem for now comment the other itemList eventListener
 * Create the above function onClickItem getting the e object event
 * first check if the e.target.parentElement.classList.contains('remove-item') if so procede with the call the function removeItem(e.target.parentElement.parentElement);
 * Update the function removItem(item) to just check for confirmation like are you shure? and then item.remove
 * Now call the function removeItemFromStorage(item.textContent);
 * We will now create the function removeItemFromStorage(item)
 * Create a let itemsFromStorage = getItemsFromStorage();
 * then itemsFromStorage = itemsFromStorage.filter(i) !== item
 * and then reset the localStorage
 * localStorage.setItem('items', json stringify itemsFromStorage) * 
 * and then checkUI
 * now in the clearItems lets clear the localStorage
 * localStorage.removeItem('items');
 * Edit item
 * First let's create a class in the css file to edit mode
 * In css create a class edit-mode and set color: #ccc
 * at the top create a let isEditMode = false;
 * now in the function onClickItem put an else statemant calling the function setItemToEdit(e.target) in the if so that if it is not clicked in the x button else set to editmode
 * now let's create the function
 * function setItemToEdit(item)
 * isEditMode set to true
 * item.classList.add('edit-mode');
 * Now lets deal with the button
 * create a const formBtn = itemForm querySelector 'button'
 * now in the function setItemToEdit lets change the button to edit
 * formBtn.innerHTML   = '<i class="fa-solid fa-pen"></i> Update Item'
 * formBtn.style.backgroundColor = '#228B22'
 * then set itemInput.value to item.textContent
 * Now after the isEditMode line let's turn all the li to black
 * itemList.querySelectorAll('li').forEach((i) => i.classList.remove('edit-mode'));
 * Now on onAddItemSubmit we need to check if it is on editMode otherwise wen editing and click to update the app will add the item
 * instead of edit. In onAddItemSubmit befor add to the DOM lets check if it is in aditMode
 * What we need to do now is just remove the old item and add the new one 
 * so check if it is in editMode if (isEditMode) if so create a const itemToEdit = itemList.querySelector class 'edit-mode'
 * remove the item from local storage itemToEdit.textContent
 * remove the class itemToEdit.classList.remove('edit-mode')
 * and then remove from the DOM itemToEdit.remove();
 * set isEditMode to false
 * At checkUI we need to change the update button to default 
 * at the and the checkUI formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
 * and formBtn.style.backgroundColor = '#333';
 * and in the checkUI at the end we need to set isEditMode to false
 * and finely still at checkUI at the beggining set itemInput.value = '';
 * now let's create a function to check if the item already exists
 * create a function checkIfItemExists(item)
 * get all the items from localStorage
 * create a const itemsFromStorage = getItemsFromStorage();
 * then just return itemsFromStorage.includes(item) it returns true or false
 * now on onAddItemSubmit on the line if (isEditMode) put the else statement and 
 * then if checkIfItemExists(newItem) then alert This item already exists 
 * and stop code with return;
 * 
 */