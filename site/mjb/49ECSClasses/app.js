// AULA 49 ESC Classes

class Person{
  constructor(firstName, LastName, dob){
    this.firstName = firstName;
    this.LastName = LastName;
    this.birthday = new Date(dob);
  }


  greeting(){
    return `Hello there ${this.firstName} ${this.LastName}`;
  }

  calculateAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getFullYear() - 1970);
  }


  getsMarried(newLastName){
    this.LastName = newLastName;
  }

  static addNumbers(x, y){
    return x + y;
  }

  
}


const mary = new Person('Mary', 'Williams', '11-13-1989');
mary.getsMarried('Sousa');
console.log(mary);

console.log(Person.addNumbers(1,2));