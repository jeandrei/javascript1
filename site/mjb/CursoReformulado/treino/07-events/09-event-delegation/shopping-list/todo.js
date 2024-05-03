/*
Create a const listItems and get all lis
Then do the listItems for each item adding a item addEventListener click getting the e event object and then e target remove.
Notice: It is not the correct way but for demonstration purpose it is good to know.

The correct way is to youse event-delegation
Create a const list and get the ul
Create a list addEventListener clic getting the e event object
First just console log e.target
You'll see that when we click in an element it is shown in the console, event if it is a div, ul, li etc.
What wee need to do is just check if it is an li and then just remove it
So check if the e.target.tagName is iqual to LI
Then remove it
As a bonus create another list addEventListener on mouse over check for the tagName if is LI
And if so change the e target style color to red
*/