/**
 * Create a const strLit with value of Hello
 * Now create a const strObj and set it to new String Hello
 * Then console log both cases the const and the typeof the const to see results
 * Boxing: Now see as javascript turns a string into an object behind the scenes the toUpperCase method works in string
 * so console log strLit toUpperCase and also clg the strLit zero index.
 * Unboxing: console log strObj valueOf and also the typeof strObj valueOf valueOf is basically the value of the object
 * Now console log strLit and strObj constructor you'll see that both are iqual because javascript converted the 
 * string literal into a String object behind the scenes. This is called boxing.
 * Now console log if strLit and strObj is an instance of String
 * You'll see that the strLit is not an instance of String and tha strObj is
 * We have constructors for other types of objects like numbers, boolean, array, even functions and object
 * Create a const numLit and set it to 20
 * Now create a numObj and set to a nes Number 20
 * console log numLit, typeof numLit
 * console log numObj, type of numObj
 * do the same with boolean:boolLit, boolObj set to true
 * Note that array are both objects create create arrLit and arrObj set to 1,2,3,4,5 and console log the type of
 * Regular function: create a const funcLit function(x) returnin x * x
 * console log funcLit, type of funcLit
 * console log funcLit(5)
 * Creating a function using the constructor: create a const funcObj = new Function
 * note that the parameter and the function body must be passed into string
 * console log funcObj(3)
 * 
 * Now create a ampty const obj1 = {}
 * Now create const obj2 as new Object
 * then console log obj1, type of obj1 and do the same for obj2
 * you'll see that both are the same if we use {} or use new Object() the result is the same
 * when use {} java script adds the new key word and use the Object constructor
 */


