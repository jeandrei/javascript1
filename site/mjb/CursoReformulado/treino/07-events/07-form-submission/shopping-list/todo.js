/*
at the end of file create a form addEventListener submit with the function onSubmit

Create a const form and getElementById item-form
Create a function onSubmit gerring the e object event
Inside the function prevent de default behavior
Then create a const item geting the item-input value
Create a const priority getting the priority-input value
Then check if item iqual '' or priority iqual to zero
If so alert Please fill in all fields and stop the code
at the and just console log item and priority
*/


/*
The new way

Change the addEventListener submit to function onSubmit2
Create a function onSubmit2 getting the e object event
prevent the default behavior
create a const formData = new FormData(form) - form is created above
Then before continue just console log formData
You see there a lot of options and between them there is a get method
With get we can gat de value of an input by it's name not it's ID but it's name
So create a const item and get with get
Create a const priority and get with get
Console log both
Other nice way is using entries
Create a const entries = formData.entries()
then console log entries
Then to loop to all of them create a for loop of entries and console log entry[1]
*/


