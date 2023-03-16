//HIGHER ORDER FUNCTION
//case 1 : callback
// a callback function, the name of the function could be any name
const callBack = (n) => {
    return n ** 2;
};

//function date take other function as a callback
function cube (callBack, n){
    return (n) * n;
};

//console.log("case-1 : " + cube(callBack, 20));
document.getElementById("callback-1").innerHTML = "callback, case-1 : " + (cube(callBack, 20));

//Returning Funtion
//normal function
var normalFunction = (n,m,t) => {
    return 2 * n + 3 * m + t;
    //proses
    // 2*2=4, 3*3=9, 9+4=(13)+10=23; 
};
console.log("normal function : "+ normalFunction(2,3,10));
document.getElementById("returningFunction-1").innerHTML = "normal function : " + normalFunction(2,3,10); 

//Higher order functions return function as a value ​
var highOrderr = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t;
        };
        return doWhatEver;
    };
    return doSomething;
};
console.log("hight order function : " + highOrderr(2)(3)(10));
document.getElementById("returningFunction-2").innerHTML = "returning function : " + normalFunction(2,3,10); 

//Method : forEach
const numbers = [1,2,3,4,5];
const sumArray = arr => {
    let sum = 0;
    const callback = function(element){
        sum += element
    };
    arr.forEach(callback);
    return sum
};
console.log("method forEach sumArray : " + sumArray(numbers));
document.getElementById("returningFunction-3").innerHTML = "method forEach : " + sumArray(numbers);

//can be simplified
const numberss = [1,2,3,4,5];
const sumArrayy = arr => {
    let sum = 0;
    arr.forEach(function(element){
        sum += element
    });
    return sum;
};
console.log("forEach simplified : " + sumArrayy(numberss));
document.getElementById("returningFunction-4").innerHTML = "forEach simplified : " + sumArrayy(numberss);


//Setting Time
// setInterval
function sayHallo(){
    console.log('Hello');
    document.getElementById("settingTime-1").innerHTML = "setInterval 1000";
};
setInterval(sayHallo, 10);


// setTimeout
function halloWorld (){
 console.log('Hello World');
 document.getElementById("settingTime-2").innerHTML = "setTimeout 2000";
};
setTimeout(halloWorld, 10);


//FUNCTIONAL PROGRAMMING
// In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.

//forEach
//Iterate array element We use forEach only with arrays
//strukture
// arr.forEach(function (element, index, arr){
//     console.log(index, element, arr);
// });
//example
var sum = 0;
var numberArray = [
    'forEach',
    1,
    2,
    3,
    4,
    5
];
numberArray.forEach(num => console.log(num));
console.log(sum);
document.getElementById("functionalProgramming-1").innerHTML = "forEach method : console.log";
// with operator +=
var sum1 = 0;
var numOfArray = [1,2,3,4,5];
numOfArray.forEach(num => sum1 += num);
console.log(sum1); 
//with toUpperCase()
var countries = ['Findland', 'Denmark', 'Indonesia', 'Japan'];
countries.forEach((element) => console.log(element.toUpperCase()));

//MAP
//Iterate an array elements and modify the array elements. callback element array params and return new array
//strukture
// var modifiedArray = arr.map(function(element, index, arr){
//     return element;
// });
//example
var numbers2 = [1,2,3,4,5];
var numbersSquare = numbers2.map((num) => num * num);
console.log(numbersSquare);
document.getElementById("functionalProgramming-2").innerHTML = 'map method : console.log';
//with toUpperCase
var os = ['macOS', 'centOS', 'Android', 'Linux', 'Windows',];
var osToUpperCase = os.map((osName) => osName.toUpperCase());
console.log(osToUpperCase);
//with slice
var osFirstThreeLetters = os.map((osName) => 
    osName.toUpperCase().slice(0, 3)
)
console.log(osFirstThreeLetters);

//FILTER
// Filter out items which full fill filtering condition and return a new array
var osContainingOS = os.filter((os) => 
    os.includes('OS')
);
console.log(osContainingOS);//output is macOS and centOS cause filter 'OS'
document.getElementById('functionalProgramming-3').innerHTML = 'filter method : ' + osContainingOS ;
//with endWith 'ia'
var countryAsia = ['indonesia', 'malayasia', 'brunei', 'thailand', 'singapure'];
var countryEndsByIa = countryAsia.filter((countryAsia) => countryAsia.endsWith('ia'));
console.log(countryEndsByIa);//ouput indonesIA and malaysIA
//with length
var countriesNineLetters = countryAsia.filter(
    (countryAsia) => countryAsia.length === 9
)
console.log(countriesNineLetters);//ouput indonesia, malayasia and singapure
//with object in array and operator comparation
var scores = [
    {name: 'Adi', score:80 },
    {name: 'Idi', score:90 },
    {name: 'Udi', score:100},
    {name: 'Edi', score:70 },
    {name: 'Odo', score:67 }
];
var scoreGreaterNighty = scores.filter((score) => score.score > 70)
console.log(scoreGreaterNighty);
