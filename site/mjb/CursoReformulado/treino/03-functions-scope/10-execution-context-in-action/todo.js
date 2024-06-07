/**
 * 
 * Create a const x with value of 100
 * Create a const y with a value of 50
 * 
 * Create a function getSum that return a const sum with the sum of the values
 * 
 * Create a const sum1 with getSum of x and y
 * 
 * Create a const sum2 with getSum of 10 and 5
 * 
 * Console log sum1 and sum2
 * 
 * 
 * 
 * Memory Creation Phase
 * This lesson is just to see the phases of the execution
 * 1. Create the global object(browser = window)
 * 2. Create 'this' object and bind it to lobal object
 * 3. Setup memory heap for storing vriables and fuction references
 * 4. Store functions and variables in global execution context and set to "undefined"
 * 
 * Line 1: x variable is allocated memory and stores "undefined"
 * Line 2: y variable is allocted memory and stores "undefined"
 * Line 3: getSum() function is allocated memory and sotores all the code
 * Line 7: sum1 variable is allocated memory and stores "undefined"
 * Line 8: sum2 variable is allocated memory and sotores "undefined"
 * 
 * Execution Phase
 * 1. Execute code line by line
 * 2. Create a new execution context for each function call
 * 
 * Line 1: Places the value of 100 into the x variable
 * Line 2: Places the value of 50 into the y variable
 * Line 3: Skips the function because there is nothing to execute
 * Line 7: Invokes the getSum() function and creates a new function execution context
 * 
 * Function EC Creation Phase:
 * Line 3: n1 and n2 variables are allocated memory and stores "undefined"
 * Line 4: sum variable is allocated memory and stores "undefined"
 * 
 * Function EC Execution Phase:
 * Line 3: n1 and n2 are assigned to 100 and 50
 * Line 4: Calculation is done and 150 is put into the sum variable
 * Line 5: return tells the functionEC to return to the global EC with value of sum (150)
 * Line 7: Returned sum value is put into sum1 variable
 * Line 8: Open another function execution context and do the same thing with different parameters
 * 
 * 
 */