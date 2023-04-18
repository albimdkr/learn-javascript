//WEB STORAGES
var space = "===============";

//Web Storages Have two
// - sessionStorage
// - localStorage

//sessionStorage
// sessionStorage is only available within the browser tab or window session. 
// It’s designed to store data in a single web page session. 
// That means if the window is closed the session data will be removed. Since sessionStorage and localStorage has similar methods, 
// we will focus only on localStorage.

//localStorage
// The HTML5 localStorage is the para of the web storage API which is used to store data on the
// browser with no expiration data. The data will be available on the browser even after the browser is closed. 
// localStorage is kept even between browser sessions. This means data is still available when the browser is closed and reopened, 
// and also instantly between tabs and windows.
// Web Storage data is, in both cases, 
// not available between different browsers. 
// For example, storage objects created in Firefox cannot be accessed
// in Internet Explorer, exactly like cookies. There are five methods to work on local 
// storage: setItem(), getItem(), removeItem(), clear(), key()

//Use case of Web Storages
// - store data temporarily
// - saving products that the user places in his shopping cart
// - data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
// - can be used offline completely using localStorage
// - Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent requests. Even images can be stored in strings using Base64 encoding.
// - can be used for user authentication method

//HTML5 Web Storage Objects
// window.localStorage - stores data with no expiration date
// window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

// Web Storage objects:
//  - localStorage - to display the localStorage object
//  - localStorage.clear() - to remove everything in the local storage
//  - localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
//  - localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
//  - localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
//  - localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.

//Setting item to the localStorage
// localStorage.setItem('key', 'value')

//Storing string in a localStorage
localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)

//Storing number in a local storage
localStorage.setItem('age', 200)
console.log(localStorage)

//Storing an array in a localStorage. 
//If we are storing an array, an object or object array, we should stringify the object first. See the example below.
const skills = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)


//Storing an object in a localStorage. 
//Before we storage objects to a localStorage, the object has to be stringified
const user = {
  firstName: 'Asabeneh',
  age: 250,
  skills: ['HTML', 'CSS', 'JS', 'React']
}

const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)

//Getting item from localStorage
localStorage.getItem('key');

let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills1 = localStorage.getItem('skills')
console.log(firstName, age, skills1)

let skills2 = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills2, undefined, 4)
console.log(skillsObj)

//Clearing the localStorage
localStorage.clear()







