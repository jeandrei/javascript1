// AULA 48 Object.create

//Cria o prototype
const personPrototypes = {
  greeting: function(){
    return `Hello tehre ${this.firstName} ${this.lastName}`;
  },
  getsMerried: function(newLastName){
    this.lastName = newLastName;
  }
}

// cria um objeto herdando um prototype
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

//acessa os metodos do objeto criado e prototype herdado
mary.getsMerried('Thompson');
console.log(mary.greeting());





const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
});

console.log(brad);
console.log(brad.greeting());