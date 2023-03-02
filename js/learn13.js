//FUNCTION
//Declaraton
// function nameFaction(){
// };
// functionName()
document.getElementById("functionDeclaration-1").innerHTML = "function nameFunction(){"+"<br>"+"//code here"+"<br>"+"};"+"<br>"+"nameFunction() //to call";
document.getElementById("functionDeclaration-1").style.fontWeight = "600";
document.getElementById("functionDeclaration-1").style.textAlign = "left";

//function : without(no) a paramater and return
//case 1
function square(){
    let a = 10;
    let c = a * a;
    document.getElementById("functionNoParamsReturn-1").innerHTML ="no params : " + c;
};
square(); //call result

//case 2
function printFullName (){
    let firstName = 'albi';
    let lastName = 'mudakar';
    let space = ' ';
    let fullName = firstName + space + lastName;
    document.getElementById("functionNoParamsReturn-2").innerHTML = "print fullname without params : " +fullName;
};
printFullName();

//Function : With a return
// case 1
function withReturn1 (){
    let a = 10;
    let b = 12;
    let total = a + b;
    return total;
};
document.getElementById("functionWithReturn-1").innerHTML = "with return total : " + withReturn1();

//case 2
function withReturn2 (){
    let firstName = 'albi';
    let lastName = 'mudakar';
    let space = ' ';
    let fullName = firstName + space + lastName;
    return fullName;
};
document.getElementById("functionWithReturn-2").innerHTML = "with return fullname : " + withReturn2();

//Funtion : With Paramater
//case 1 : one argument/params
function withParamsOne1 (numA){
    var total;
    total = numA * numA;
    return total;
};
document.getElementById("functionWithParams-1").innerHTML = "with one params, case 1 : " + withParamsOne1(2);

//case 2 : with math.PI
function withParamsOne2 (m){
    var area = Math.PI * m;
    return area;
};
document.getElementById("functionWithParams-2").innerHTML = "with one params, case 2 : " + withParamsOne2(5);

//function : with paramaters
// case 1 : one parameter
function withParamsTwo1 (numX, numY){
    var resultXY;
    resultXY = numX + numY;
    return resultXY;
};

document.getElementById("functionWithParamsTwo-1").innerHTML = "with two params : " + withParamsTwo1(10, 40);

//case 2 : two paramater
function withParamsTwo2 (firstName, lastName){
    return `${firstName} ${lastName}` 
};
document.getElementById("functionWithParamsTwo-2").innerHTML = "with two params string : " + withParamsTwo2('albi', 'mudakar');


//case 3 : tre paramater
function withParamsTre1 (firstname, lastName, age){
    return `${firstname} ${lastName} ${age}`
};

document.getElementById("functionWithParamsTre-1").innerHTML = 'with tre params string : ' + withParamsTre1('Albi', 'Mudakar', 18);

function withParamsTre2 (numA, numB, numC){
    var result ;
    result = numA + numB + numC;
    return result;
};
document.getElementById("functionWithParamsTre-2").innerHTML = 'with params tre calculate : ' + withParamsTre2(10,20,30);

//case 4 : with many paramater
function sumArray(arr){
    let sum = 0;

    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    };
    return sum;
};

const numArr = [1,2,3,4,5];
document.getElementById("functionWithManyParams-1").innerHTML ="with many params, sum : " + sumArray(numArr);


//case 4 : with argument
function withArgument (){
    let sumA = 0;
    for (var i = 0; i < arguments.length; i++){
        sumA += arguments[i];
    };
    return sumA;
};
document.getElementById("functionWithArgument-1").innerHTML = "With arguments : " + withArgument(1,2,3,4,5);

//UNLIMITED FUNCTION 
//case 1 : Unlimited number of parameters in regular function
function sumAllNums1(arguments) {
    var num1 = 10;
    var cal = (num1 + arguments);
    //var called = arguments;
};
document.getElementById("functionUnlimited-1").innerHTML = "case 1 : " + sumAllNums1(1, 2, 3, 4);

//case 2 : function declaration
function sumAllNums2() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
};
document.getElementById("functionUnlimited-2").innerHTML = "case 2 : " + sumAllNums2(1, 2, 3, 4);

//case 3 : Unlimited number of parameters in arrow function
const sumAllNums3 = (...args) => {
 console.log(args)
}
document.getElementById("functionUnlimited-3").innerHTML = "case 3 : " + sumAllNums3(1, 2, 3, 4);

//case 4 : in arrow function
const sumAllNums4 = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

//console.log(sumAllNums(1, 2, 3, 4)) // 10
//console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
document.getElementById("functionUnlimited-4").innerHTML = "case 4 : " + (sumAllNums4(15, 20, 30, 25, 10, 33, 40))  // 173


//ANONYMOUS FUNCTION
//case 1 : 
const anonymousFunction = function (){
    console.log("Im anonymous function")
    //document.getElementById("anonymousFunction-1").innerHTML = "Im anonymous function";
};
document.getElementById("anonymousFunction-1").innerHTML = "Anonymous Function : " +  anonymousFunction;

//EXPRESSION FUNCTION
//case 1 : 
const square1 = function(n){
    return n * n;
};
document.getElementById("expressionFunction-1").innerHTML ="Expression Function : "  + square1(2);

//SELF INVOKING FUNCTION
//case 1 : Self invoking functions are anonymous functions which do not need to be called to return a value.
let squareNum = (function(n){
    return n * n;
});(10)
document.getElementById("selfInvokingFunction-1").innerHTML = "self invoking function : " + squareNum(5);

//ARROW FUNCTION
//case 1 : alternative to write function default
const squareNum2 = n => {
    return n * n;
};
document.getElementById("arrowFunction-1").innerHTML = "arrow function : " + squareNum2(3);

//case 2 : change to uppercase 
const changeToUpperCase = arr => {
    newArr = [];
    for (const element of arr){
        newArr.push(element.toUpperCase());
    };
    return newArr;
};
const os = ['Windows', 'Linux', 'MacOS'];
document.getElementById("arrowFunction-2").innerHTML ="arrow function to uppercase : " + changeToUpperCase(os);

//case 3 : print full name
const printFullNameSinger = (firstName, lastName) => {
    return `${firstName} ${lastName}`
};
document.getElementById("arrowFunction-3").innerHTML ="print full name use arrow function : " + printFullNameSinger('Kurt','Cobain');

//DEFAULT PARAMATER
//case 1 : print name
const printMyName =  (name = 'Albi Mudakar') => {
    let message = `Hello My Name is ${name}`;
    return message;
};
document.getElementById("defaultParameter-1").innerHTML ="default params : " + printMyName();


//studycase : function with loop
//case 1
function generatePass(){
    var valueUser = document.getElementById("fetchValueUser").value;
    var allChar = 'abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*';
    var length = allChar.length;
    var result = '';

    let i = 0;
    while (i < valueUser){
        result += allChar.charAt(Math.floor(Math.random() * length));
        i += 1;

        if (valueUser < 5){
            document.getElementById("valuePass").innerHTML = "Your Pass length is short, the length must greater than 5. Oke try again!";
            document.getElementById("valuePass").style.backgroundColor = "red";
            document.getElementById("valuePass").style.color = "white";
        }else {
            document.getElementById("valuePass").innerHTML ="Your Password Result Is : " + "<br>" + result;
            document.getElementById("valuePass").style.backgroundColor = "green";
            document.getElementById("valuePass").style.color = "white";
    
        }
    };
    return result;
};

//case 2
function setValue (){
    var total = document.getElementById("fetchValue").value;
    var output = '';

    for (var i = 1; i <= total; i++ ){
        for (var j = 1; j <= i; j++){
            output += j + ' ';
        };
        document.getElementById("resultValue").innerHTML = output;
        output = '';
    };
};

//case 3 : with arrow function
var printLoop = n => {
    var result = '';
    for (var i = 1; i <= n; i++){
        for (var j = 1; j <= i; j++){
            result += '*';
        };
        console.log(result);
        result = '';
    };
};
console.log(printLoop(10));

//case 3 : with arrow function
const randomPass = length => {
    var chars = 'abcefghijklmnopqrstuvwxyz';
    var toLength = chars.length;
    resultValue = '';

    let c = 0;
    while (c < length){
        resultValue += chars.charAt(Math.floor(Math.random() * toLength));
        c += 1;
    };
    return resultValue;
};

document.getElementById("studycase-4").innerHTML ="with arrow function random char : a" + randomPass(10);

//case 15 : Writ a function which generates a randomUserIp.
ipRandom = () => {
    var ip = +(Math.floor(Math.random() * 255)+1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
    console.log(ip);
    
  };
  
  console.log(ipRandom());
  