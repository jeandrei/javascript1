/*****************************CONSOLE******************* */
console.log('Hello World');

//Uma maneira muito legal de verificar os valores de um array
//vai ser apresentado no console em forma de tablea
console.table({a:1,b:2});

//Mensagem de erro
console.error('This is some error');

//Limpar o console
console.clear();

//Aviso
console.warn('This is a warning');

//
/**
 * Time mostra o tempo que demorou para executar um código entre duas
 * marcações sempre usa console.time e console.timeEnd a marcação aqui
 * é o Hello então entre essas duas marcações vai mostrar o tempo que
 * demorou para executar o código
 */
console.time('Hello');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
console.timeEnd('Hello');

/************************VARIAVEIS****************************** */
//var, let, const
let name = 'John Doe';
console.log(name);

// Init a var quando não passa valor fica como undefined
let greeting;
console.log(greeting);

// Multi word var use Camel case
let firstName = 'John';

// CONST
const NAME = 'John';

// In arrays and objects you can change values
const person = {
  name: 'John',
  age: 30
}
person.name = 'Sara';
console.log(person);

/**
 *  -Pripitive Data Types * 
 * String
 * Number - inteiro ou decimal
 * Boolean
 * Null - intencionamente com valor nullo
 * Undefine - quando declaramos uma variável e não atribuimos nenhum valor
 * Symbols (ES6)
 */

// String
const name2 = 'John Doe';
console.log(typeof name2);

// Number
const age2 = 45;

// Boolean
const hasKids = true;

// Null
const car = null;

//Undefine
let test;

// Symbol
const sym = Symbol();



/* 
 *  -REFERENCE TYPES - OBJECTS * 
 * Arrays
 * Object Literals
 * Functions
 * Dates
 * Anything Else
 * 
 */

// Array
const hobbies = ['movies', 'music'];

// Object Literal
const address = {
  city: 'Boston',
  state: 'MA'
}

/**
 * TYPE CONVERTION
 */
let val;

// Number to string
val = String(555);
val = String(4+4);//vai retornar uma string com o número 8

// Boolean to string
val = String(true); //vai retornar uma string true

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4]);

// método toString()
val = (5).toString();


// String to number
val = Number('5');
console.log(val.toFixed(2));//imprime número com casas decimais
val = Number('hello');//vai retornar NaN Not a Number
console.log(val);

val = parseInt('100.30');//retorna o número 100 pq parse int vai retornar número inteiro
val = parseFloat('100.30');//retorna o número 100.30


// Output
console.log(val);
console.log(typeof val);
console.log(val.length);//length funciona apenas em strings

// MAth Object
val = Math.PI;

//Arredonda 3
val = Math.round(2.8);

//Arredonda para cima 3
val = Math.ceil(2.4);

//Arredonda para baixo 2
val = Math.floor(2.8);

//Raiz quadrada 8
val = Math.sqrt(64);

//Número absoluto retorna o valor positivo no caso 3
val = Math.abs(-3);

//Número elevado a potência 8 elevado a 2 = 64
val = Math.pow(8,2);

//Mínimo retorna o valor mínimo aqui 1
val = Math.min(2,33,4,1,55,3);

//Retorna o maior valor no caso 55
val = Math.max(2,33,4,1,55,3);

//Gera um número aleatório
val = Math.random();
//Gera um número entre 0 e 20
val = Math.floor(Math.random() * 20 + 1);

console.log(val);


/**
 * STRINGS AND CONCATENATION
 */
const firstName3 = 'William';
const lastName3 = 'Johnson';
const age3 = 36;

val = 'Hello, my name is ' + firstName3 + ' and I am ' + age3;

// Escaping como colocar aspas simples dentro da string
val = 'That\'s awesome, I can\'t wait';

// Tamanho da string
val = firstName3.length;

// concat() é o mesmo que usar o +
val = firstName3.concat(' ', lastName3);

// Texto para letra maiúscula
val = firstName3.toLocaleUpperCase();

// Texto para letra minúscula
val = firstName3.toLocaleLowerCase();

// Retorna o index de um caractere em uma string
val = firstName3.indexOf('l'); //vai retornar o indice da primeira ocorrencia da letra l
val = firstName3.lastIndexOf('l'); //vai retornar o indice da ultima ocorrencia da letra l

// Retorna o caractere de uma posição
val = firstName3.charAt(2);//qual o caractere na posição 2 da string no caso l

// Get last char at a string último caractere de uma string
val = firstName3.charAt(firstName3.length -1);

// Pegar um pedaço de uma string
val = firstName3.substring(0, 4);

// Slice mesma coisa que substring porém pode ser usado em arrays
// Slice com número negativo retorna a partir do final da string 
//firstName3.slice(-1); retornaria o último caractere da string
val = firstName3.slice(0 ,4);

// Split cortar uma string toda vez que encontrar um caractere
// O código abaixo vai retornar um array com o texto dividido em cada virgula
const str3 = 'web design,web development,programming';
val = str3.split(',');

// Replace() substitui um texto por outro na string
const str4 = 'Hello there my name is Brad';
val = str4.replace('Brad', 'Dex');

// Includes() retorna true ou false se encontra um texto na string
val = str4.includes('Brad');


// Template strings ()
const name5 = 'John';
const age5 = 30;
const job5 = 'Web Developer';
const city5 = 'Miami';
let html5;
//inline if statemant if mesma linha
html5 = `
  <ul>
    <li>Name: ${name5}</li>
    <li>Name: ${age5}</li>
    <li>Name: ${job5}</li>
    <li>Name: ${city5}</li>
    <li>${2 +2}</li>
    <li>${age5 > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;
document.body.innerHTML = html5;
console.log(val);

/**
 * ARRAYS
 */

// Create some arrays
// Metodo 1
const numbers = [43,56,33,23,44,36,5];
// Metodo 2
const numbers7 = new Array(22,45,33,76,54);
const fruit7 = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed7 = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
console.log(mixed7);


// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Find index of value
val = numbers.indexOf(36);

//Manipulando arrays
// Add to end
numbers.push(250);
// Add to front
numbers.unshift(120);
// Take of from end
numbers.pop();//remove o último valor do array
// Take of from front
numbers.shift(); //remove o primeiro valor do array
// Splic values exclui os valores de um array entre dois indices
// exemplo splice(2,5) vai remover o que tem do indice 2 ao 5
numbers.splice(1,3);
// Reverter a ordem do array
numbers.reverse();
// Concatenate arrays
val = numbers.concat(numbers7);//junta o array numbers com numbers7
// Sorting arrays colocar em ordem alfabetica
val = fruit7.sort();
val = numbers.sort();//usando direto o metodo sort com números não funciona
//a função abaixo ordena os números dentro de um array
val = numbers.sort(function(x, y){
  return x - y;
});
// a funçao abaixo ordena os números dentro de um array de forma decrescente
val = numbers.sort(function(x, y){
  return y - x;
});


// Find de first number under 50 in an array
function under50(num){
  return num < 50;
}
val = numbers.find(under50);

//console.log(numbers);
console.log(val);

/**
 * Object literals
 */
const person8 = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    let date = new Date();
    currentYear = date.getFullYear();
    return currentYear - this.age;
  }
}
val = person;
//Get a specif value
val = person8.firstName;
val = person8['lastName'];
val = person8.age;
val = person8.hobbies[1];
val = person8.address.state;
val = person8.address['city'];
val = person8.getBirthYear();
console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}
