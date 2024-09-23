/**Seção 17 Aula 206
 * Create a new folder and inside create three files app.js Person.js and utils.js
 * First lets create a class Person in the Person.js
 * Create a class Person with name and age then create a method greet that console log Hello, my name is name and I am age
 * finaly exports the module Person
 * 
 * Now in the utils.js create a method capitalizeWords(str) this method must return the str with all words capitalized in first letter
 * lowarcase and with the first letter in toUpperCase
 * in the lesson he made it first making all lowercase, then he split the word by ' '
 * then he maps the word making the word[0] toUpperCase + the rest of the word using substr
 * finely he join the word by ' ' 
 * 
 * Now create another method makeMoney(amount) just returning the number with a $ in front of it
 * now exports the capitalizeWords and makeMoney methods, when you have more than one method you need to put it in curly braces as an object
 * 
 * Now at the app.js destructor creating a const capitalizeWords and makeMoney require from utils.js * 
 * now create a const Person and require it from Person.js
 * now console log capitalizeWords hello world
 * console log makeMoney 100
 * create a person1 new Person name John and age 30
 * then person1 greet
 * 
 */
const { capitalizeWords, makeMoney } = require('./utils');
const Person = require('./Person');

console.log(capitalizeWords('hello world'));
console.log(makeMoney(100));

const person1 = new Person('John', 30);
person1.greet(); 
