// Person constructor
function Person(name, dob){
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}


const brad = new Person('Brad', '09-10-1980');
console.log(brad.calculateAge());