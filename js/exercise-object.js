//EXERCISE OBJECTS
//Level 1
//case 1 :Create an empty object called dog
const dog = {};

//case 2 : Print the the dog object on the console
const dog2 = {};
console.log(dog2);

//case 3 : 
//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
var dog3 = {
  name : 'scoobydu',
  legs : 4,
  color : 'black, gray and white',
 	age : 5,
  bark : function (){
   	return "woof woof";
  }
};

//case 4 : Get name, legs, color, age and bark value from the dog object
console.log(dog3.name);
console.log(dog3.legs);
console.log(dog3.color);
console.log(dog3.age);
console.log(dog3.bark());


//case 5 : Set new properties the dog object: breed, getDogInfo
dog3.breed = 'Alaska Malamute'
dog3.getDogInfo = function (){
  var firstName = 'scoo ';
  var lastName = 'bydu ';
  var age = 5 ;
  var ras = 'alaska ';
  var food = 'like a beef '
  return firstName+lastName+age+ras+food;
};
console.log(dog3.breed);
console.log(dog3.getDogInfo());

//EXERCISE : LEVEL 2 

var users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

//case 1 : Find the person who has many skills in the users object.
console.log(users.Asab);


//case 2 : Count logged in users, count users having greater than equal to 50 points from the following object.
var login = 0;
var count = 0;
for (user in users){
  if (users[user].isLoggedIn){
    login++;
  }if(users[user].points < 50){
     count++;
  };
};
console.log(`user loggedIn is : ${login}`);
console.log(`user haver grater 50 points is : ${count}`);


//case 3 : Find people who are MERN stack developer from the users object
var userSkills = users[user].skills;
if (userSkills.includes("CSS", "HTML", "React", "Redux")){
  console.log(`${user} is developer MERN stack`);
};

//case 4 : Set your name in the users object without modifying the original users object
var copyUsers = Object.assign({}, users);
copyUsers.albi;
copyUsers.email = 'albi@gmail.com';
copyUsers.skills = ['HTML', 'CSS', 'JS'];
copyUsers.age = 29;
copyUsers.isLoggedIn = true;
copyUsers.points = 50;
console.log(copyUsers);

//case 5 : Get all keys or properties of users object
var copyUsers2 = Object.keys(copyUsers);
console.log(copyUsers2);

//case 6 : Get all values of users object
var newValues = Object.values(copyUsers);
console.log(newValues);


//case 7 : Use the countries object to print a country name, capital, populations and languages.
users.countries = 'Indonesia';
console.log(users);

users.countries = function (){
  var country = 'Indonesia';
  var capital = 'Jakarta';
  var population = '273.8 Millions';
  var languages = 'Bahasa Indonesia';
  return `country : ${country}  capital : ${capital}  population : ${population}  languages : ${languages}`;
};
console.log(users.countries());

// LEVEL  : 3
// case 1 :  Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

var personAccount = {
  firstName : 'Albi',
  lastName : 'Mudakar',
  incomes : 25000,
 	expense : 20000,
  accountInfo : {
    username : 'albi',
    address : 'wakaland'
  },
  totalIncomeExpense : function (){
    return `${this.incomes} + ${this.expense}`;
  },
  isTrial : false,
};
console.log(personAccount);
console.log(personAccount.totalIncomeExpense());


// case 2 : **** Questions:2, 3 and 4 are based on the following two arrays:users and products
//a : Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
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


// case 2 : **** Questions:2, 3 and 4 are based on the following two arrays:users and products
//a : Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

userss.signUp = function (){
  var signUp = 0;
  for (user in userss){
   if (user == userss._id){
     console.log('Denied, user has already!');
   } else {
     userss.push(newObj);
     //console.log(userss);
     console.log('Signup Success');
     signUp++;
   };
   console.log(userss);
  };
  };
  var newObj = {
      _id : 'ghderc',
      name : 'UJANGGG',
      email : 'thomas@thomas.com',
      password : '123333',
      createdAt : '08/01/2020 10:00 AM',
      isLoggedIn : true
   };
  console.log(userss.signUp(newObj));

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