//Exercises: Level 1
//case 1 : Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
var constants = [2.72, 3.14, 9.81, 37, 100];
let [e,pi,gravity,humanBody,waterBoilingTemp] = constants;
console.log(e,pi,gravity,humanBody,waterBoilingTemp);

//case 2 : Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
let [fin,est,sw,den,nor] = countries;
console.log(fin, est, sw, den, nor);

//case 3 : Destructure the rectangle object by its properties or keys.
const rectangle1 = {
  width : 20,
  height : 10,
  area : 200,
  perimeter : 60
}
let {width, height, area, perimeter} = rectangle1;
console.log(width, height, area, perimeter);

//EXERCISE LEVEL 2
//case 1 : Iterate through the users array and get all the keys of the object using destructuring
var user = {
  name : 'Albi',
  status : 'Student',
  age : 29,
  skill : 'HTML, CSS, JavaScript',
  hoby : 'Learn something new'
}; 
let {name, status, age, skill, hoby} = user;
console.log(name, status, age, skill, hoby);
