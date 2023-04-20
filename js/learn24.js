//PROMISE
var space = "===============";

//Callbacks
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    callback('It did not go well', skills)
  }, 2000)
}

const callback = (err, result) => {
  if (err){
    return console.log(err)
  }
  return console.log(result)
}
doSomething(callback);

//Promise Constructor 
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    if (skills.length > 0){
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise.then((result) => {
  console.log(result)
}).catch((err) => console.log(err))

// Promise if wrong
// const doPromise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     if (skills.includes('Node')) {
//       resolve('fullstack developer')
//     } else {
//       reject('Something wrong has happened')
//     }
//   }, 2000)
// })

// doPromise1
//   .then(result => {
//     console.log(result)
//   })
//   .catch(error => console.error(error))

//Fetch API
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
.then(response => response.json())//accessing API as JSON
.then(data => {
    //getting data
    console.log(data);
}).catch(error => console.error(error))//handling error if somehting wrong


//Async and Await
const square = async function(n){
  return n * n
}
console.log(square(2));// output : Promise {<resolved>: 4}

//How do we access the value from the promise? To access the value from the promise, we will use the keyword await.
// const square = async function(n){
//   return n * n
// }
// const value = await square(2)
// console.log(value)//output : 4

//Fetch API using both promise method and async
// Promise
const url1 = 'https://restcountries.com/v2/all';
fetch (url1)
.then(response => response.json())
.then(data => {
  console.log(data);
}).catch(error => console.error(error));

//Async and await
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json()
    console.log(countries)
  }catch (err){
    console.log(err)
  }
}
console.log('====== async and await');
fetchData()