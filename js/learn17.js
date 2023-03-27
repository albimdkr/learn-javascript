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