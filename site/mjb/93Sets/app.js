// SETS - Store uniqui values of any type
const set1 = new Set();

// Add values to set 
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);

// If you try to add a value that already exists it will ignore
// and keep the one that already exists
set1.add(100);//won't add because it already exists

console.log(set1);

// It can be assigned like this
const set2 = new Set([1, true, 'string']);
console.log(set2);

// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100));//if there is a value of 100 will return true
console.log(set1.has(50 + 50));//same thing the result will be 100

//return false because it is a reference value 
// it points to a diferent location in memory
console.log(set1.has({name: 'John'}));
// the same as 
console.log({name: 'John'} === {name: 'John'});//also returns false 
//because it points to a diferent location in memory

// Delete from set
set1.delete(100);
console.log(set1);


//Iterating through sets

// For..of
console.log('list items of set1 with for');
for(let item of set1){
  console.log(item);
}

// ForEach loop
console.log('list items of set1 with forEach');
set1.forEach((value)=>{
  console.log(value);
});

// Convert set to array
const setArr = Array.from(set1);
console.log(setArr);