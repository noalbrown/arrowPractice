// Maps = key value pairs and can use any type

const map1 = new Map();

// Set keys
const key1 = 'some string',
  key2 = {},
  key3 = function () { }

// Set map values by key
map1.set(key1, 'Value of key1')
map1.set(key2, 'Value of key2')
map1.set(key3, 'Value of key3')

// Get values by key
// console.log(map1.get(key1))

// Count values in map
// console.log(map1.size)

// Iterate through maps
// Loop using for...of to get keys and values
// for (let [key, value] of map1) {
//   // console.log(`${key} = ${value}`)
// }

// // Iterate keys only
// for (let key of map1.keys) {
//   console.log(key)
// }

// // Iterate values only
// for (let key of map1.values()) {
//   console.log(values)
// }

// Loop with forEach
// map1.forEach(function (value, key) {
//  console.log(`${key} = ${value}`)
// })

// Convert to arrays
// Create an array of key value pairs
// const keyValArr = Array.from(map1)
// console.log(keyValArr)

// Create an array of values
// const valArr = Array.from(map1.values())
// console.log(valArr)

// // Create an array of keys
// const keyArr = Array.from(map1.keys())
// console.log(keyArr)


// Sets store a unique value of any type
const set1 = new Set()

// Add values to set
set1.add(100)
set1.add('a string')
set1.add({ name: 'John' })
set1.add(true)

// const set2 = new Set([1, true, 'string'])

//  console.log(set1)

//  Get count
// console.log(set1.size)

// Check for values
// console.log(set1.has(100))

// delete from set
set1.delete(100)

// console.log(set1)

// iterate through sets
// for...of
// for(let item of set1){
//   console.log(item)
// }

// // for each loop
// set1.forEach((value) => {
//   console.log(value)
// })

// convert set to array
const setArr = Array.from(set1)
console.log(setArr)


