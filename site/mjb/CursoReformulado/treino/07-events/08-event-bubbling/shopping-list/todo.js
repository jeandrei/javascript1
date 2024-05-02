/*
Create a const button to get the form button element
Create a const div to get the form div second child
Create a const form to get the form element
Then create a button addEventListener click and just alert Button was clicked
Then create a div addEventListener and just alert div was clicked
Then create a form addEventListener and just alert form was clicked
The event bubbling effect is that the elements are in the order form, div, button
Form parent of div and div parent of button and so if you click on the parent the addEventListener that will fire is just the parent 
if you click in the child all other addEventListener in parents will fire
Try it out.
If you want to prevent it you cant get the e object event and just do e.stopPropagation
do it at the button addEventListener and see the result
*/

