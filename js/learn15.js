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

// Returning Funtion
//Higher order functions return function as a value ​