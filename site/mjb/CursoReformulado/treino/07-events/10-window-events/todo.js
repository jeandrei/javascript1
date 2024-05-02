/*
When we put to load our script.js in the header tag in the index.html we might face some problems on loading the document
Let's say we furst read our script.js in the header thag and in the script we hava e const = document.querySelector('ul')
As the script is read before the ul is created we might face some problems
The way to solve this is to wait to the document to be Loaded
Wen use onload we wait untill the entire page is Loaded
So create a window onload fnction and inside it
Select the h1 textContent and set it to Hello World
If you want try to do the code outside the onload to see the result
After thet comment the code above and make the same but this time using window.addEventListener load and just consolo log Page Loaded this inculdes images and all other resources
Now do the same as above but using the window addEventListener DOMContentLoaded and just console log DOM Loaded this is related just the DOM and is loaded before page
Below the code above just console log Run me and you'll see that first is gona run the Run me then DOMContentLoaded and then load
Now create an window addEventListener resize and get the h1 and set it's innerText to Resized to ${window.innerWidth} x ${window.innerHeight}
So every time that the window is resize it will fire the resize event listener
Now do the same above but in this time add a window.addEventListener scroll and just console log Scrolled: ${window.scrollX} x ${window.scrollY}
Then check if window.scrollY is greater than 70 if so make the document.body.style.backgroundColor to black and document.body.color to white else backgroundColor to white 
and color to black
Now createa window addEventListener focus and inside it get all p element and forEach them making p.style.color blue
Right above create another one but on blur event turnig the p to black again
*/
// On Page Load
// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };