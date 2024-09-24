/**
 * In modules folder we have utils.js and a class Person inside Person.js
 * In es modules we export and import it differently
 * to export we use the sintax export default module if one module
 * export {module1, module2, module3} if more than one mudule
 * to import we don't use require
 * we use import from
 * like 
 * import module from "path" when one module
 * import {module1, module2, module3} from path when more than one module
 * and so at app.js import capitalizeWords, makeMoney 
 * then import Person
 * then 
 * console.log(capitalizeWords('hello world'));
 * console.log(makeMoney(100));
 * const person = new Person('Mark', 29);
 * person.greet();
 * 
 * 
 */