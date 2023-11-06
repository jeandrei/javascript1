// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

/**Create a cons x function */

//Check x and if Truthy console log This is truthy else This is falsy

// console log Boolean(x)

// Truthy and falsy caveats
// Create a const children = 3

// Checking for literal 0
// if is informed 0 children it will cause a problem becaus 0 is falsy
// check children and console log You have ${children} children else Please enter number of children

// Solution when you need to accept zero
/* Check if children is a number and then console log You have ${children} children else Please enter number of children: Hint isNaN is a function that return if a value is Not a Number*/

// Checking for empty arrays
// create a const post array with post one and post two

// Always true even when empty
/* check if posts then console log List Posts else No Posts To List if you make posts empty it still return list posts as it has posts because an amtpy array is truthy that way you can check by the array.lenth*/

// Solution
/* check if posts lenth is grater than zero than console log List Posts else No Posts To List*/

// Checking for empty objects
/*Create a const user with name Brad */

// Always true, even when no properties
/**Check if user than console log List User else No User it will always retur true*/

// Solution check
/**Check if there is in the object if you use user.length even when empty you get undefined so the solution is to use Object.keys(user).length so check if there is objects console List User else No User*/

// Loose Equality (==) always use ===
console.log(false == 0) // true
console.log('' == 0) // true
console.log(null == undefined) // true

// Strict Equality
console.log(false === 0) // false
console.log('' === 0) // false
console.log(null === undefined) // false
