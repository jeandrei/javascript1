/**
 * Create a setTimeout with 2000ms and just console log Hello from callback
 * Then right after the setTimeout function just console log Hello from global scope
 * You'll see that the setTimeout function is gonna run after the global console log
 * 
 * Now create a function changeText and just select the h1 and change the textContent to Hello from callback
 * and then create a const timerId iqual to another setTimeout and in this time runs the changeText function with 2000ms
 * in the timerId we will get the id of the timer that we will need to clearTimeout
 * 
 * now select the id cancel and addEventListener click then create a callback and console log timerId
 * then clearTimeout(timerId)
 * and console log Timer Cancelled
 * this way if clicked on the button cancel it will not run the the timeout function
 */