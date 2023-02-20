//JAVASCRIPT LOOPING

//FOR LOOP
//structure
document.getElementById("structure-forloop").innerHTML = "for (initialization, condition, increamtent/decrement){ " + "<br>" + "//code here " + "<br>" + "};";
document.getElementById("structure-forloop").style.fontWeight = "600";
document.getElementById("structure-forloop").style.textAlign = "left";
//for (initialization, condition, increamtent/decrement){ 
//code here  
//};
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

//WHILE LOOP
//structure
document.getElementById("structure-whileloop").innerHTML = "initialization" + "<br>" + "while(conditions){" + "<br>" + "//code here"+ "<br>" + "increament/decrement" + "<br>" +"};";
document.getElementById("structure-whileloop").style.fontWeight = "600";
document.getElementById("structure-whileloop").style.textAlign = "left";

//case 1 : while loop
let i = 0;
while(i <= 10){
    document.getElementById("whileloop-1").innerHTML = "whileloop-1 : " + i;
    i++
};

//case 2 : while loop 
let c = 0;
while (c <= 5){
    var calExNum = `${c} * ${c} =  ${c * c}`;
    document.getElementById("whileloop-2").innerHTML = "whileloop-2, use arithmetic: " + calExNum;
    c++
};

//case 3 : while loop with array
const numArrW = [1,2,3,4,5];
let sumArrW = 0;
let x = 0;
while (x < numArrW.length){
    sumArrW = sumArrW + numArrW[x];
    x++
};
document.getElementById("whileloop-3").innerHTML = "whileloop-3, sum array : " + sumArrW;

//DO WHILE LOOP
//structure
document.getElementById("structure-dowhileloop").innerHTML = "initialization" + "<br>" + "do {" + "<br>" + "//code here" + "<br>" + "increment/decrement" + "<br>" + "} while (condition)" ;
document.getElementById("structure-dowhileloop").style.fontWeight = "600";
document.getElementById("structure-dowhileloop").style.textAlign = "left";

//case 1 : while loop
let d = 0;
do {
    document.getElementById("dowhileloop-1").innerHTML = 'dowhileloop-1 : ' + d;
    d++
} while (d <= 5);

//case 2 : use arithmetic
let e = 0;
do {
    var calculateNumE = `${e} * ${e} = ${e * e}`;
    document.getElementById("dowhileloop-2").innerHTML ="dowhileloop-2 : " + calculateNumE;
    e++
} while (e <= 5);

//case 3 : sum array with while loop
const numX = [1,2,3,4,5];
let sumX = 0;
let j = 0;
do {
    sumX += numX[j];
    document.getElementById("dowhileloop-3").innerHTML = "dowhileloop-3, sum array : " + sumX;
    j++
} while (j < numX.length);

