/* // Iterator Example
function nameIterator(names){
  let nextIndex = 0;

  return {
    next: function(){
      return nextIndex < names.length ? 
      { value : names[nextIndex++], done: false } : 
      { done: true }
    }
  }
}


// Create an array of names
const namesArr = ['Jean', 'Dex','Mari'];

// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value); */

//GENERATOR EXAMPLE o asterisco fala para o javascript que é uma generator
/* function* sayNames(){
  yield 'Jean';
  yield 'Dex';
  yield 'Mari';
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value); */

// ID CREATOR
function* createIds(){
  let index = 1;
  while(true){
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
