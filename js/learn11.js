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

document.getElementById("array-15").innerHTML ="method lastidexof : " + webTech.lastIndexOf('node JS');

//method : includes
var webLanguange = [
    'PHP',
    'JavaScript',
    'Pyhton'
];
var checkWebLanguage = webLanguange.includes('JavaScript');
document.getElementById("array-16").innerHTML = "method include (JavaScript) : " + checkWebLanguage;

//method : checkin
var myNumber = [11, 12, 13, 14, 15];
var checkMyNumber = Array.isArray(myNumber);
document.getElementById("array-17").innerHTML = "check the number in array : " + checkMyNumber;

//method : toString(), convert array to string
const catName = ['Meong', 'Chimo', 'Oren'];
var catNameToString = catName.toString();
document.getElementById("array-18").innerHTML = "array to string : " + catNameToString;

//method : join
const nameOS = [
    'Windows',
    'Linux',
    'MacOS'
];

var joinNameOS = nameOS.join('/');
document.getElementById("array-19").innerHTML =" join method : " + joinNameOS;

//method : splice, removing
var linuxDistro = [
    'Kali linux',
    'ParrotOS',
    'Ubuntu',
];
var spliceMethod = linuxDistro.splice(0,1); //parrotOS and ubuntu
document.getElementById("array-20").innerHTML = "splice method : " + spliceMethod;


//method : push, adding item in array
var strItemPush = [
    'item-1 ',
    'item-2 ',
    ' item-3'
];
strItemPush.push('item-4');
document.getElementById("array-21").innerHTML = "method push : " + strItemPush;


//method : pop, removing item
var strItemPop = [
    'item1 ',
    'item2 ',
    ' item3'
];
strItemPop.pop('item1');
document.getElementById("array-22").innerHTML = 'method pop : ' + strItemPop;

//method : unshift, add element begining
var strItemUnshift = ['coffee2','coffee3'];
strItemUnshift.unshift('coffee1');
document.getElementById("array-23").innerHTML = 'method unshift : ' + strItemUnshift;

//method : reverse, reversing(mebalikan urutan)
var intItemReverse  = [1,2,3,4,5];
intItemReverse.reverse();
document.getElementById("array-24").innerHTML = 'method reverse : ' + intItemReverse;

//method : sort
var intItemSort = [11, 12, 13, 14, 15];
var toSort = intItemSort.sort();
document.getElementById("array-25").innerHTML = 'method sort : ' + toSort;
//from sort to reverse
var toReverse = intItemReverse.reverse();
document.getElementById("array-26").innerHTML = 'from sort to reverse : ' + toReverse;

//method : arrayOfArray, can store any data types and includes
//case1
const intNum1 = [1,2,3];
const intNum2 = [4,5,6];
var useMethodArrayOfArray = [[1,2,3], [1,2,3]];
document.getElementById("array-27").innerHTML = 'see case1 : ' + useMethodArrayOfArray[1];

//case2
const frontEnd = ['HTML','CSS','JavaScript','React JS'];
const backEnd = ['JavaScript','Node JS','MongoDB','API'];
const fullStack = [frontEnd, backEnd];

document.getElementById("array-28").innerHTML = 'Include with arrayOfArray method : '+ fullStack;
document.getElementById("array-29").innerHTML = 'see length fullstack : ' + fullStack.length;
document.getElementById("array-30").innerHTML = 'access frontEnd : ' + fullStack[0];
document.getElementById("array-31").innerHTML = 'access backEnd : ' + fullStack[1];


