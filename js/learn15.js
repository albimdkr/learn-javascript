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
};
setInterval(sayHallo, 1000);
document.getElementById("settingTime-1").innerHTML = "setInterval 1000 : "+ setInterval(sayHallo, 1000);

// setTimeout
