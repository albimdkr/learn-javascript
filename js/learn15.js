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