// AULA 50 Sub Classes

class Person {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership){
    super(firstName, lastName);//Calls the parent constructor in this case Person

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershiipCost(){
    return 500;
  }
}


const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

// Como Customer extends Person temos acesso aos metodos de Person
console.log(john.greeting());

// Quando é static executamos diretamente Classe.metodo()
console.log(Customer.getMembershiipCost());