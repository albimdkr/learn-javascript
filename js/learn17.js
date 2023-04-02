//Destructing Arrays
//case : 1
const numbers = [1,2,3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne,numTwo,numThree);
document.getElementById('destructuring-1').innerHTML = "console.log()";

//case : 2
const names = ['Alex', 'John', 'Brook', 'David'];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

//case : 3
const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants
console.log(e,pi,gravity, bodyTemp, boilingTemp)

//case : 4
const fullstack = [
    ['HTML5', 'CSS3', 'JavaScript', 'React'],
    ['Node', 'Express', 'MongoDB']
];
const [frontEnd, backEnd] = fullstack;
console.log(frontEnd);
console.log(backEnd);

//case 5 : skip the number one
const number = [1,2,3];
let [numOnee, ,numThreee] = numbers;
console.log(numOnee, numThreee);

//case 6 : We can use default value in case the value of array for that index is undefined:
const namess = [undefined, 'Brook', 'David']
let [
  firstPersonn = 'Asabeneh',
  secondPersonn,
  thirdPersonn,
  fourthPersonn = 'John'
] = namess
console.log(firstPersonn, secondPersonn, thirdPersonn, fourthPersonn)  

//case 7 : We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).
const nums = [1,2,3,4,5,6,7,8,9,10];
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3);
console.log(rest);

//Destructuring during iteration
//case 8
const countries1 = [['Finland', 'Helnski'], ['Sweden', 'Stocholm'], ['Norway', 'Oslo']];
for (const [country, city] of countries1){
  console.log(country, city);
};

//case 9
const fullstack1 = [
    ['HTML5', 'CSS3', 'JavaScript', 'React'],
    ['Node', 'Express', 'MongoDB']
];
for (const [first,second, third] of fullstack1){
  console.log(first, second, third);
};

//Destructuring Object
//When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.
const rectangle = {
  width : 20,
  heigth : 10,
  area : 200
};
let {width, heigth, area, perimeter } = rectangle;
console.log(width, heigth, area, perimeter); //20 10 200

//Renaming during structuring
const rectangle2 = {
  width : 20,
  height : 10,
  area : 200
}
let {width: w, height: h, area: a, perimeter: p } = rectangle2
console.log(w,h,a,p); //20 10 200

//Object parameter without destructuring
//without destucturing
const rect = {
  width : 20,
  height: 10
};
const calculatorPerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
};
console.log(calculatorPerimeter(rect)); //60

//another example
const person = {
  firstName : 'Albi',
  lastName : 'Mudakar',
  age : 19,
  country : 'Indonesia',
  status : 'Student',
  skills : [
    'HTMLS',
    'CSS3',
    'JavaScript',
    'NodeJs',
    'MySql'
  ],
  languanges : ['Indonesian', 'English', 'Sundanese']
};
//let us create a function with give information about the person wihtout destructuring
const getPersonInfo = obj => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(',');
  const languanges = obj.languanges;
  const formattedLanguanges = languanges.slice(0, -1).join(', ');

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${obj.age} years old. He is an ${obj.status}. He learn ${formattedSkills} and ${skills[skills.length - 1]}. He speak ${formattedLanguanges} and a little bit of ${languanges[2]}`;
  return personInfo;
};
console.log(getPersonInfo(person));

//Object Parameter with destucturing
const rect1 = {
  width : 20,
  height: 10
};
const calculatorPerimeter1 = ({width, height }) => {
  return 2 * (width + height);
};
console.log(calculatorPerimeter1(rect1)); //60

//let use create function which give information about the person object with desructuring
const getPersonInfo1 = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languanges
}) => {
  const formattedSkills = skills.slice(0, -1).join(', ');
  const formattedLanguanges = languanges.slice(0, -1).join(',');

  personInfo1 = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He learn ${formattedSkills} and ${skills[skills.length - 1]}. He Speak ${formattedLanguanges} and a little bit of ${languanges[2]}.`
  return personInfo1;
}
console.log(getPersonInfo1(person));

//Destructuring object during iteration
const todoList = [
  {
    task:'Prepare JS Test',
    time:'4/1/2020 8:30',
    completed:true
  },
  {
    task:'Give JS Test',
    time:'4/1/2020 10:00',
    completed:false
  },
  {
    task:'Assess Test Result',
    time:'4/1/2020 1:00',
    completed:false
  }
];
for (const {task, time, completed} of todoList){
  console.log(task, time, completed);
}

// Spread or Rest Operator
const numss = [1,2,3,4,5,6,7,8,9,10];
let [numss1, numss2, numss3, ...restt] = numss;
console.log(numss1, numss2, numss3);
console.log(restt);


const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
];
let [gem, fra, , ...nordicCountries] = countries;
console.log(gem);
console.log(fra);
console.log(nordicCountries);

// Spread operator to copy array
const evens = [0,2,4,6,8,10];
const evenNumbers = [...evens];

const odds = [1,3,5,7,9];
const addNumbers = [...odds];
const wholeNumbers = [...evens, ...odds];
console.log(evenNumbers);
console.log(addNumbers);
console.log(wholeNumbers);

//example 2 spread copy array
const frontEnd1 = ['HTML', 'CSS', 'JS', 'React'];
const backEnd1 = ['Node', 'Express', 'MongoDB'];
const fullStack = [...frontEnd1, ...backEnd1];
console.log(fullStack);

//Spread operator to copy object
const users = {
  name : 'Albi',
  title : 'Programmer',
  country : 'Indonesian',
  city : 'Bandung'
};
const copiedUsers = {...users};
console.log(copiedUsers);

//Modifying or changing the object while copying
const ModifyingUsers = {...users, title : 'cyber security'};
console.log(ModifyingUsers);

//Spread operator with arrow function
const sumAllNums = (...args) => {
  console.log(args);
}
sumAllNums(1,2,3,4,5);



