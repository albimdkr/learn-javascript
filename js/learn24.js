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

