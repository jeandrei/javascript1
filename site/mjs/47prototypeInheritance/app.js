// AULA 47 Object.prototype
// Person.prototype

// Person constructor
function Person(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;  
}

// Greeting prototype
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}


const person1 = new Person('John', 'Doe');
//console.log(person1.greeting());

function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person Prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototye return Costumer()
Customer.prototype.constructor = Customer;

// Create cstomer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555','Standard');
console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());

