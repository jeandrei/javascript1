// Create a symbol
//const sym1 = Symbol();
//const sym2 = Symbol('sym2');

// console.log(typeof sym2);

// console.log(Symbol('123') === Symbol('123')); //returns false always
// console.log(`Hello ${sym1.toString()}`);

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

/* console.log(myObj[KEY1]);
console.log(myObj[KEY2]); */

// sYMBOLS ARE NOT ENUMERABLE IN for...in
/* for(let i in myObj){
  console.log(`${i}: ${myObj[i]}`);//will only return key3 and key4 because Symbols are not enumerable
} */

// Symbols are ignore by JSON.strignify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));//symbos doesn't parse