/**
 * 
 * Gettes and setters are methods we used to get or set properties for that object
 * we can use with classes, constructors and even with object object literals
 * Reasons to use: 
 *  1 - You might wanna do something to the value before return as example turn it to uppercase
 *  2 - When use private properties, when you have a privete property and you don't wanna the user to access it directly 
 *  you can use getter and setter
 * 
 * 
 * Create a class Person with firstName and lastName
 * create a new parson1 'john', 'doe'
 * Then console log person1.firstName
 * Now imagine that you want to do something with the value befor it return
 * Let's say you want to always make the first letter uppercase before return
 * In that case we create a getter
 * In the Person class create a get firstName and just return firstName
 * we will get an error because of the naming because the name of the property and the getter are the same 'firstName'
 * to fix this in the property put an _ underscore before, what it does is tell the javascript that it is a private property
 * in the get also return this._firstName
 * now in the get return the name with first letter with uppercase use charAt zero index then concatenate with slice(1)
 * this way you don't need to call a method every time you want to return a correct value
 * Now let's create a set
 * create a set firstName(value) - set always need to have a value
 * set the firstName to value first letter uppercase
 * now you can set name like this object.property = 'value'
 * Create a method capitalizeFirst(value) that returns the value with the first letter capitalized
 * now in get and set just call the this.capitalizeFirst(value);
 * now do the same get and set for lastName
 * now create a get fullName
 * 
 * set firstName
 * set lastName
 * console log person1
 * console log person1.fullName
 * see that in the object/prototype we can see the get and set method created
 * 
 * 
 */