/**
 * First create a const intervalID and set an Interval to reapeat a task like setInterval(myCallback, 1000) 
 * In this example we want to pass a parameter also and so task like setInterval(myCallback, 1000, 'Hello') 
 * Then create a function myCallback passing a as parameter like function myCallback(a)
 * inside just console log a and the Date.now();
 * You'll see that as soon as the code runs the setInterval will run the function myCallback every second
 * To stop it we need to create a function stopChange that will simple clearInterval(intervalID)
 * To make it to happen just when click on the stop button just create an addEventListener click calling the stopChange function
 * Now comment the const intervalID and the function myCallback so that it does not take effect in the code
 * Nos just declare a let intervalID
 * Create a function startChange()
 * First check if !intervalID if so set intervalID to setInterval(changeColor, 1000) 
 * And then create the function changeColor
 * In the function just check if the document.body.style.backgroundColor != 'black' and set to black ane the color to white else the oposite
 * Create a addEventListener click on the id of start calling the function startChange
 * Now comment the changeColor function and create another function randomColor
 * with the code  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
 * and then document.body.style.backgroundColor = `#${randomColor}`;
 * call the function randomColor on function startChange
 *
 * 
 */