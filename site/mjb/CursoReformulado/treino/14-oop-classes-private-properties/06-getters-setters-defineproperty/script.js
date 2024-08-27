/**
 * Last lesson we learned how to define get and set in a class
 * Now we are gonna see how to do the same in constructor function and in object literal
 * as previous create a constructor function Person with firstName and lastName
 * to define a property in the object constructor we can do with Object.defineProperty 
 * it takes three things, the object itself this, 
 * the property we want to add a getter or a setter and it takes an object with getter and setter function
 * Object.defineProperty(1 - this,2 - 'property',3 - {get: function()...
 * Create the getter and the setter for the Person object
 * Do the same for lastName
 * Create a new person1 ('john','doe')
 * and console log person1.firstName and lastName
 * 
 * Add a prototype capitalizedFirst that returns the value with first letter uppercase
 * now change the getter and setter to set and get with capitalizeFirst
 * 
 * Now create a get fullName
 * 
 * Now to do the same with object literal
 * create a const PersonObj with firstName and lastName
 * Note: With object literal it will be one single object, we can't create multiple objects like using class
 * create a get firstName() note that we can use the Person constructor prototype to capitalizeFirst the value
 * Create a set firstName
 * Do tha same with lastName
 * Finely create a get fullName
 * Create a person2 object like:
 * const person2 = Object.create(PersonObj);
 * console log firstName
 * console log lastName
 * console log fullName
 */
