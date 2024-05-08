/*  
First get the items
create a const itemForm and get the element id item-form
create a const itemInput and get the element id item-input
create a const itemList and get the element id item-list
Then add the addEventListeners
Create a addEventListener to itemForm submit and call a function called onAddItemSubmit
Then above the addEventListeners create the function onAddItemSubmit passing the e event object and prevent the default
Inside the function create a const newItem and pass the itemInput.value to it
Then check if the newItem is iqual to ' ' then alert please add an item then return
Then below the if statement create the listItem as it is not an ' '
Now outside the function onAddItemSubmit create another function addItemToDOM(item)
Inside the function addItemToDOM create a const li and assignt a element li to it
In li created above appendchild the document.createtextnode item
Then inside the function onAddItemSubmit after the validation call the funciton addItemToDOM(newItem);
To be more functional let's create a function to add button
Above addEventListener create a function createButton(classes)
Inside the function create a const button and create an element button assigned to it
Then set button.className to the classes
Then return button
Now lets create a function to create the icon
Create a new function called createIcon(classes)
inside create a const icon and create an element i on it
then set to the const icon className the classes
then return the icon
Now inside the create button function create a const icon and set the function createIcon whit the classes fa-solid fa-xmark
then still in the button function append the icon button.appendchild(icon)
Now inside the create newItem function to create a button
Create a const button and createButton('remove-item btn-link text-red')
Then li.appendchild button
Then just append the li to the itemList.appendchild
And then itemInput.value = '' to clear
*/
