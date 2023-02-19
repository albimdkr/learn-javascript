//JAVASCRIPT LOOPING
//structur
//for (initialization, condition, increamtent/decrement){ 
//code here  
//};

//case 1
for (let varX = 0; varX <= 5; varX++){
    document.getElementById("loop-1").innerHTML = 'loop-1, print varX 10 : ' + varX;
};

// case 2 : use operator aritmethic
for (let varY = 0; varY <= 5; varY++){
    var calculateVarY = `${varY} * ${varY} = ${varY * varY}`;
    document.getElementById("loop-2").innerHTML = 'loop-2, use arithmetich : ' + calculateVarY;
};

//case 3 : print array with add element array toUppercase()
var learnJS = ['data','condition','array','loop'];
const newLearnJS = [];
for (let i = 0; i <= learnJS.length; i++){
    newLearnJS.push(learnJS[i].toUpperCase());
    document.getElementById("loop-3").innerHTML = 'loop-3, print array with element array toUppercase : ' + newLearnJS;
};

//if numberintZ 
const numberIntZ = [1,2,3,4,5];
let sumArrNum = 0;
for (let z = 0; z < numberIntZ.length; z++){
    //sumArrNum = sumArrNum + numberIntZ[z];
    //shorthand
    sumArrNum += numberIntZ[z]
};
document.getElementById("loop-4").innerHTML = 'loop-4, print array numberIntZ : ' + sumArrNum;