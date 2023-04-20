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


