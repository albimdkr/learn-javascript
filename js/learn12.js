//JAVASCRIPT LOOPING
//structur
//for (initialization, condition, increamtent/decrement){ 
//code here  
//};

//FOR LOOP
//case 1 
for (let varX = 0; varX <= 5; varX++){
    document.getElementById("forloop-1").innerHTML = 'loop-1, print varX 10 : ' + varX;
};

// case 2 : use operator aritmethic
for (let varY = 0; varY <= 5; varY++){
    var calculateVarY = `${varY} * ${varY} = ${varY * varY}`;
    document.getElementById("forloop-2").innerHTML = 'loop-2, use arithmetich : ' + calculateVarY;
};

//case 3 : print array with add element array toUppercase()
const learnJS = ['data','condition','array','loop'];
const newJS = [];
for (let i = 0; i < learnJS.length; i++){
    newJS.push(learnJS[i].toUpperCase());
    document.getElementById("forloop-3").innerHTML = 'loop-3, print array with element array toUppercase : ' + newJS;
};

//case 4 : sum array 
const num = [1, 2, 3, 4, 5];
let sum = 0;
for (let a = 0; a < num.length; a++){
    sum = sum + num[a];
};
document.getElementById("forloop-4").innerHTML = "loop-4, sum array : " + sum;

//case 5 : create new array based array
const num1 = [1,2,3,4,5];
const numArr = [];
let sum1 = 0;
for (let i = 0; i < num1.length; i++){
    numArr.push(num1[i] ** 2);
}
document.getElementById("forloop-5").innerHTML = 'loop-5, creat array in array  : ' + numArr;


