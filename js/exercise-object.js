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
