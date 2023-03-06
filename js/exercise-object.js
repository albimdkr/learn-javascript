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