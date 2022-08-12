// Destructuring Assignment

let a, b;
/**
 * faz a associação primeira variável primeiro valor a = 100
 * segunda variável segundo valor b = 200
 */
[a, b] = [100, 200];
// console vai retornar 100
console.log(a);

// ...rest vai peegar o que sobra a=100 b=200 rest o que sobra
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(a, b);
console.log(rest);


// Array Destructuring
const people = ['John', 'Beth', 'Mike'];

const [person1, person2, person3] = people;//mesma coisa faz a associação

console.log(person1, person2, person3);

// Parse array returned from function
function getPeople(){
  return ['John', 'Beth', 'Mike'];
}

let person4, person5, person6;
[person4, person5, person6] = getPeople();//associa pelo retorno da função
console.log(person4, person5, person6);

// Object Destrucuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function(){
    console.log('Hello');
  }
}

// Old ES5
/* const name = person.neme,
      age = person.age,
      city = person.city; */

// New ES6 Destructuring
const { name, age, city, sayHello } = person;
console.log(name, age, city);

sayHello();//vem lá de person
