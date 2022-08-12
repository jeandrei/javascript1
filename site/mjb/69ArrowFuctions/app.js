/* const sayHello = () => {
  console.log('Hello');
} */

//One line function does not need braces
//const sayHello = () => console.log('Hello inline');

//Onle line return value
//const sayHello = () => 'Hello';

//Return Object tem que colocar entre parenteses ({ msg: 'Hello'}) 
//se não retorna undefined
//const sayHello = () => ({ msg: 'Hello'});

//Single param does not need parenthesis
//const sayHello = name => console.log(`Hello ${name}`);

//More than one param needs parenthesis
/* const sayHello = (name,lastName) => console.log(`Hello ${name} ${lastName}`); */

const users = ['Nathan', 'John', 'William'];
//Regular
/* const nameLenghts = users.map(function(name){
  return name.length;
}); */

//Arrow function Shorter
/* const nameLenghts = users.map((name)=>{
  return name.length;
}); */

//Arrow function Shortest
const nameLenghts = users.map(name => name.length);


console.log(nameLenghts);

//sayHello('Jeandrei','Walter');