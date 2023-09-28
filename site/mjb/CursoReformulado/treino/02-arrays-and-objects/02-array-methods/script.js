let x

const arr = [28, 38, 44, 29, 109]

// push() - Push a value on to the end of the array
// push into arr the number 100

// pop() - Take the last value off
// remove the last value of an array
// remove the last item of arr

// unshift() - Add a value to the beginning of the array
// add 99 to the beginning of arr

// shift() - Remove first value
// remove the first value of array arr

// reverse() - Reverse an array

// includes() - Check to see if something is in the array
// check if arr includes the number 445

// indexOf() - Return the index of the first match
// -1 means that the value was not found
// x = the index of the number 28

// Return array as a string toString and join
// x = arr to string
// x = arr join

// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array. If pas just the first argument it will return an array from the first index until the end of the array. Attention: it does not change the original array
// x = array from index 1 to index 4

// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not thus it change the original array.
// x = arr 4 items from first index

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
// x = arr 1 item from the forth element it will result as an array only with the last value

// Chaining methods - Some methods can be chained depending on the return value.
// x = arr from index one to index 4, reverse, change to string and get chart index 0

console.log(x)
