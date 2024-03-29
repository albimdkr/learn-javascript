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
//setInterval(sayHallo, 10);


// setTimeout
function halloWorld (){
 console.log('Hello World');
 document.getElementById("settingTime-2").innerHTML = "setTimeout 2000";
};
//setTimeout(halloWorld, 10);


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

//REDUCE
// Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value.
// arr.reduce((acc, cur) => {
//     //some operations goes here before returnnong a value
//     return
// }, initialValue);
var numbersOfSum = [1,2,3,4,5];
var sumNumber = numbersOfSum.reduce((acc, cur) => acc + cur, 0);
console.log(sumNumber)
document.getElementById("functionalProgramming-4").innerHTML = 'reduce method : ' + sumNumber;

//EVERY
//Check if all the elements are similar in one aspect. It returns boolean
var namess = ['adel', 'adil', 'udal', 12];
var cekAllStr = namess.every((namee) => typeof namee === 'string')//all are string ??
console.log("every : "+ cekAllStr);//output false cause in array names have 12

//FIND
//Return the first element which satisfies the condition
var ages = [24, 22, 25, 32, 35, 18];
var cekAges = ages.find((cekAges) => cekAges > 30); //cek grater than 30?
console.log("find : " + cekAges);//output : yes it is 32
//with letter name
var allNames = ['Elliot', 'Darline', 'TyrelWellick', 'WhiteRose'];
var resultNames = allNames.find((allNames) => allNames.length == 6);//cek the length or letter has 6 ?
console.log(resultNames); //output : it is elliote, cause have length = 6

//FINDEINDEX
//Return the position of the first element which satisfies the condition
var namesAll = ['Elliot', 'Darline', 'TyrelWellick', 'WhiteRose'];
var ageAll = [24, 22, 25, 32, 35, 18];

var namesResult = namesAll.findIndex((namesAll) => namesAll.length > 7);
console.log("findIndex, nameResult : " + namesResult);
document.getElementById("functionalProgramming-5").innerHTML = "findIndex method : console.log";

var ageResult = ageAll.findIndex((ageAll) => ageAll < 20);
console.log("findIndex, ageResult : " + ageResult); 

//SOME
//Check if some of the elements are similar in one aspect. It returns boolean
var namess = ['Albi', 'Alen', 'Alun', 'Elon'];
var bools = [true, true, true, true];
var areSomeTrue = bools.some((c) => c === true );
console.log("method some : " + areSomeTrue); //output : true
document.getElementById("functionalProgramming-6").innerHTML = 'some method : ' + areSomeTrue;
//with typeof
var areAllString = namess.some((name) => typeof name === 'number')//are all string ?
console.log(areAllString);//output : false, because need the 'number'

//SORT
//The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.
//Sorting string values
var products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot'];
console.log('sort values : ' + products.sort());//output : ascending (A-Z) or discending(Z-A)
document.getElementById('functionalProgramming-7').innerHTML = 'sort method : ' + (products.sort()); 
//Sorting numeric 
var numbersRandom = [9.81, 3.14, 100, 37 ];
console.log('sort number : '+ numbersRandom.sort());
//using sort method to sort number items provide a worng result
numbersRandom.sort(function (a, b) {
    return a - b
});
console.log('sort with function : ' + numbersRandom);
//Sorting Object Arrays
//Whenever we sort objects in an array, we use the object key to compare. Let us see the example below.
//strukture
// objArr.sort(function(a, b){
//     if (a.key < b.key) return -1
//     if (a.key > b.key) return 1
//     return 0;
// });
// or ---------------
// objArr.sort(function (a, b){
//     if (a['key'] < b ['key']) return -1
//     if (a['key'] > b ['key']) return 1
//     return 0;
// });
// Example
var usersRandom = [
    {name: 'Albi', age: 150},
    {name: 'Crook',age: 50},
    {name: 'Byrell', age: 100},
    {name: 'Jack', age: 20}
];

usersRandom.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0;
});
console.log(usersRandom); //sorted ascending age 20 - 150

// END
// NEXT EXERCISE :)

