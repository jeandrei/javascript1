// ||= assigns the right side value only if the left is a falsy value.

let a = null

// if (!a) {
//   a = 10;
// }

// a = a || 10;

a ||= 10

// will console 10 because a is falsy null
console.log(`will console 10 because a is falsy null (result = ${a})`)

// &&= assigns the right side value only if the left is a truthy value.

let b = 10

b = b && 20

console.log(
  `will console 20 because b is iqual to 10 a truthy value (result = ${b})`
)

// ??= assigns the right side value only if the left is null or undefined.

let c = null

c = c ?? 20

console.log(`will console 20 because c is null (result = ${c}`)
