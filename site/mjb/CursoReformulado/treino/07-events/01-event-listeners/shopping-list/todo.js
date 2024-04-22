/*
Create a const clearBtn and get the element with the ID of clear
*/


/*
Create a function onClear()
in that function create a const itemList with ul tag
create a const items with all the itemList li tag
then check eatch option to remove all the items in the lu li
first use the innerHTML option to set the itemList to ''
second use forEach and then make item.remove()
and then with while exist itemList.firstChild remove the itemList.firstChild with itemList.removeChild

*/


// JavaScript Event Listener
/*
This is not best practice but just to know it is possible
create a function clearBtn.onclic ant just alert Clear items
*/

/*
Again create a function clearBtn.onClear that console log Clear items
*/


// addEventListener()
/*
The correct way adding with addEventListener you can have as many events you want, we will have in this example two events, this function to alert Clear Items 
and the next to console.log Clear Item
Create a clearBtn addEventListener it must have two arguments the type of event in this case click and the function
so in here the event is click and use the arrow function to alert Clear Items
*/


// Use named function
/*
Create another clearBtn.addEventListener on click event and call the function onClear set in the above code
*/


// removeEventListener()
/**
 Now inside a setTimeout function with 5000 miliseconds remove the event clearBtn click onClear that we set above and, the above function onClear shuld work
 just for 5 seconds and after that it should not be avaliable any more
 */


// Fire off event from JS
/*
We can make the code run an event as a human, example we can make the code to click in an button
so usin the setTimeout 5000 miliseconds make the code to execute the clearBtn click
*/
