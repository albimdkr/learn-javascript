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
//const person = [];

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





