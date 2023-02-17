//ARRAY
//Create array empty
//const arr = array();
//or
//let arr = new Array();
//console.log(arr);

//using squaire bracket[]
///const arr = [];
//console.log(arr);

//CREATE ARRAY WITH VALUE
const fruits = ['banana', 'avocado', 'berry'];
document.getElementById("array-1").innerHTML = "with number : " + fruits.length;

//ARRAY WITH ANY DIFFERENT DATA TYPES
const mySelf = [
    'Albi',
    20,
    true, 
    {country : 'Wakanda', city:'springbot'},
    {skill : ['html', 'css', 'js', 'react']}
]
document.getElementById("array-2").innerHTML ="any data types : " + mySelf;

//ARRAY WITH METHOD SPLIT
let javascript = 'JavaScript';
let charToArray = javascript.split('');
document.getElementById("array-3").innerHTML ="char to array : " + charToArray;

let tech = 'Google, AWS, OpenAI, Apple, Microsoft, Linux'
const charTechToArray = tech.split(',');
document.getElementById("array-4").innerHTML = "char tech to array : " + charTechToArray;


//ACCESS ARRAY ITEM USE INDEX[?]
const mySkill = ['html', 'css', 'js', 'react', 'tailwind'];
// number :        0       1     2      3           4
let accessMyskill = mySkill[2]; //access 'js'
document.getElementById("array-5").innerHTML = "access skill with number : " + accessMyskill;

let lastIndexSkill = mySkill.length -1;
let accessLastIndexSkill = mySkill[lastIndexSkill];
document.getElementById("array-6").innerHTML = "last index skill : " + accessLastIndexSkill;

let westjava = [
    'Bandung',
    'Cimahi',
    'Lembang',
    'Ciwidey',
    'Pangalengan'
];
document.getElementById("array-7").innerHTML = "The Center West Java is : " + westjava[0];

//MODIFYING ARRAY
const numberInt = [1, 2, 3, 4 ,5];
numberInt [0] = 10; //change 1 = 10
numberInt  [2] = 30; //change 3 = 30
document.getElementById("array-8").innerHTML = "change number : " + numberInt;

const programmingLanguage = [
    'JavaScript ',
    'Pyhton ',
    'PHP ',
    'C++'
];

programmingLanguage [2] = 'Java';
document.getElementById("array-9").innerHTML = "change PHP to Java : " + programmingLanguage;

//METHODS TO MANIPULATE ARRAY
//method : constructor
const arrEmpty1 = Array();
const useConstructor = Array(8);
document.getElementById("array-10").innerHTML = "create value with constructor : " + useConstructor;

//method : fill, creating static values
const arrEmpty2 =Array();
const useFill = Array(3).fill('Hello'); //add hello 3x
document.getElementById("array-11").innerHTML = "method fill, static values : " + useFill;

//method :  concat, concatenating array JOIN
var firstNum = [1, 2, 3];
var lastNum = [4, 5, 6];
var joinNum = firstNum.concat(lastNum);
document.getElementById("array-12").innerHTML = "concat method : " + joinNum;

//method : length, getting array length
var myPc = ['Mouse','Monitor','Keyboard','headset'];
document.getElementById("array-13").innerHTML = "getting length my pc : " + myPc.length;

//check item in list use condition
const listMenu = ['V60','Tea','Mojito','Lemonade','Cappucino'];
let checkIndeXMenu = listMenu.indexOf('Mojito');

if (checkIndeXMenu === -1){
    document.getElementById("array-14").innerHTML ="check item list : The menu " + checkIndeXMenu + " is not ready";
} else {
    document.getElementById("array-14").innerHTML = "check item list : The menu " + checkIndeXMenu + " is ready";
}

//using ternary
// checkIndeXMenu === -1 
// ? document.getElementById("array-15").innerHTML ="check with ternary true: " + checkIndeXMenu;
// : document.getElementById("array-15").innerHTML ="check with ternary false : " checkIndeXMenu;

//Method : lastindexof
const webTech = [
    'html',
    'css',
    'javascript',
    'mongoDB',
    'react',
    'node JS'
];

document.getElementById("array-16").innerHTML ="method lastidexof : " + webTech.lastIndexOf('node JS');

//method : includes
var webLanguange = [
    'PHP',
    'JavaScript',
    'Pyhton'
];
var checkWebLanguage = webLanguange.includes('JavaScript');
document.getElementById("array-17").innerHTML = "method include (JavaScript) : " + checkWebLanguage;

//method : checkin
var myNumber = [11, 12, 13, 14, 15];
var checkMyNumber = Array.isArray(myNumber);
document.getElementById("array-17").innerHTML = "check the number in array : " + checkMyNumber;

//method : toString(), convert array to string
const catName = ['Meong', 'Chimo', 'Oren'];
var catNameToString = catName.toString();
document.getElementById("array-18").innerHTML = "array to string : " + catNameToString;