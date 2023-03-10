//OBJECT
//global scope
let a1 = 'JavaScript'
let b1 = 10;

function letsLearnScope (){
    console.log(a1, b1);
    if (true){
        let a1 = 'Pyhton'
        let b1 = 100;
        console.log(a1, b1);
    };
    console.log(a1, b1);
};
letsLearnScope();
document.getElementById("globalScope-1").innerHTML ="global scope : " + a1 + b1;
console.log(a1, b1);

//local scope
//case 1
var a2 = 'JavaScript'; //global scope
var b2 = 10; //global scope

function letsLearnScope2(){
    //can access from the function and outside the function
    //variables declared inside the if will not be accessed outside block
    document.getElementById("localScope-1").innerHTML ="case 1 : " + a2 + b2;
    console.log("-" + a2, b2); //JavaScript 10, accessible
    let value = false;
    //block scope
    if (true){
        let a2 ='Pyhton';
        let b2 = 20;
        let c2 = 30; //c2, on if blok
        let d2 = 40;
        value = !value;
        document.getElementById("localScope-2").innerHTML ="case 2, if block  : " + a2 + b2 + c2 + value;
        console.log("--" + a2, b2, c2, value); //pyhton 20, 30 true
    };
    //cannot access c2 cause is scope only in if block
    console.log("-" + a2, b2, value); //c2, d2 and value false
    document.getElementById("localScope-2").innerHTML ="case 3, outside if block  : " + a2 + b2 + value;
};
letsLearnScope2 ();
console.log("-" + a2, b2);//Javascript 10, accessible
document.getElementById("localScope-3").innerHTML ="case 3, outside functoin block : " + a2 + b2;

//block in javascript using two curly brackets {}
//case 2 : with function block
function letsLearnScope3 (){
    var gravity = 9.81;
    console.log("case 1 gravitiy function: " + gravity);
};
//but we call gravity in out scope 
//console.log(gravity);//will referenceError : gravity is not defined
letsLearnScope3();

//case 3 : with if block
if (true){
    var gravity = 10;
};
console.log("case 2 gravity, out of if block : "+ gravity);

//case 3 : with loop block
for (let i = 0; i < 3; i++){
    console.log("case 3, in loop block" + i);
};
//but we call (i) in out scope 
//console.log(i); //will referenceError : cause not define

//OBJECT 
//Creating an empty object
//const person = {};

//Creating an object with values
//case 1
const rectangle = {
    case : 'case 1',
    learn : 'object',
    length : 20,
    width :10
};
console.log(rectangle);
document.getElementById('object-1').innerHTML = 'on console.log()';

//case 2
const person  = {
    case : 'case 2',
    firstName : 'Albi',
    lastName : 'Mudakar',
    hobi : 'learning',
    skill : [
        'HTML',
        'CSS',
        'JavaScript'
    ],
    isMarried : false,
};
console.log(person);
document.getElementById('object-1').innerHTML = 'on console.log(object-1)';

//case 3, getting value from object
// - using . followed by key name if the key-name is a one word
// - using square bracket and a quote
const person2  = {
    case : 'case 3',
    firstName : 'Albi',
    lastName : 'Mudakar',
    hobi : 'learning',
    skills : [
        'HTML',
        'CSS',
        'JavaScript'
    ],
    isMarried : false,
    getFullName : function () {
        return `${this.firstName} ${this.lastName}`
    },
    'phone number' : '+09990337494'
};
console.log(person2);
document.getElementById('object-2').innerHTML = 'on console.log(object-2)';
    // accessing values using
    console.log(person2.case);
    console.log(person2.firstName);
    console.log(person2.skills);

    // accessing values quare bracket and a quote
    console.log(person2['case']);
    console.log(person2['lastName']);
    console.log(person2['hobi']);

    // for instance to access the phone number we only use the square bracker method
    console.log(person2.case);
    console.log(person2['phone number']);

// case 4 
// Creating object methods
console.log(person2.case);
console.log(person2.getFullName());//accees value inside function

// case 5
// An object is a mutable data structure and we can modify the content of an object after it gets created.
person2.age = '12'
person2.title = 'student'
person2.country = 'waka land'
person2.skills.push('Nodejs')
person2.skills.push('Bootstrap')
person2.getPersonInfo = function() {
   let withoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(', ');
   let lastSkills = this.skills.splice(this.skills.length - 1)[0];
   let skills = `${withoutLastSkill} and ${lastSkills}`;
   let fullName = this.getFullName();
   let statement =  `${fullName} is a ${this.title}. \nHe live in ${this.country}.\nHe Learn ${skills}.`;
   return statement;
};
console.log(person2);
console.log(person2.getPersonInfo());

// case 6
//OBJECT METHOD
const person3 = {
    case : 'case 6',
    firstName : 'Albi',
    lastName : 'Mudakar',
    age : 24,
    country : 'waka land',
    city : 'numerouno',
    skils : ['HTML', 'CSS', 'JavaScript'],
    title : 'student',
    address : {
        street : 'jl.wano',
        pobox : 2020,
        city : 'numereuno'
    },
    getPersonInfo : function (){
        return `i am an ${this.firstName} and i live in ${this.city}, ${this.country}. I an ${this.age}.`
    }
};


//Object method : object.assign, object.keys, object.values, object.entries
//hasOwnProperty
const copyPerson = Object.assign({}, person3);
console.log(copyPerson);
document.getElementById('object-6').innerHTML = 'on console.log(object-6)';

//case 7
//Getting object keys using Object.keys()
//Object.keys : to get the keys or properties of an obejct as an array
const keys = Object.keys(copyPerson);
console.log(keys);
document.getElementById('object-7').innerHTML = 'on console.log(object-7)';
const address = Object.keys(copyPerson.address);
console.log(address)
document.getElementById('object-8').innerHTML = 'on console.log(object-8)';

//case 8
//Getting object values using Object.values()
//Object.values : To get values of as an array 
const values = Object.values(copyPerson);
console.log(values);
document.getElementById('object-9').innerHTML = 'on console.log(object-9)';

//case 9
//Getting object keys and values using Object.entries()
//Object.entries : to get the keys and values in array
const entries = Object.entries(copyPerson);
console.log(entries);

//case 10
//Checking properties using hasOwnProperty()
//hasOwnProperties() : to check if a specific key or properties exist in a object
console.log(copyPerson.hasOwnProperty('firstName')); 
console.log(copyPerson.hasOwnProperty('score'));


// case 2 : **** Questions:2, 3 and 4 are based on the following two arrays:users and products

var userss = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: true
    }
    ];

//a : Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

userss.signUp = function (){
  
  var newObj = {
    _id : '1212',
    username : 'albi',
    email : 'albi@gmail.com',
    password : 'pas123',
    createdAt : '08/01/2020 10:00 AM',
    isLoggedIn : false
 };

var signUp = 0;
for (user in userss){
 if (user != userss._id){
   userss.push(newObj);
   console.log(userss);
   console.log('Signup Success');
 } else {
   console.log('Denied, user has already!');
 };
};
};

// userss.signUp = function (id, username, email, password, createdAt, isLoggedIn){
//   var addId = userss.id;
//   var addUsername = userss.username;
//   var addEmail = userss.email;
//   var addPassword = userss.password;
//   var addCreatedAt = userss.createdAt;
//   var addIsLoggedIn = userss.isLoggedin;
//   var all = addId + addUsername + addEmail + addPassword + addCreatedAt + addIsLoggedIn;
//   return all;
// };
// console.log(signUp('1212', 'Albi', 'albi@gmail.com', '131313', '08/01/2020 10:00 AM', 'false'));

// var user = 0;
// var signUp = 0;

// for (user in userss){
//   if (userss[user].isLoggedIn){
//     signUp++;
//   };
// };
// console.log(`${signUp}`);

//b : Create a function called signIn which allows user to sign in to the application