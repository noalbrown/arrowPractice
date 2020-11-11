// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000)
//   })

//   const res = await promise; //Wait until promise is resolved
//   return res
// }

// myFunc()
//   .then(res => console.log(res))

// Best way to use is with Fetch
async function getUsers() {
  // await response of fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  // proceeds once promise is kept
  const data = await response.json()
  // proceeds when second promise is kept
  return data;
}

getUsers().then(users => console.log(users))