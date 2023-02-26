//OBJECT
//global scope
let a1 = 'JavaScript'
let b1 = 10;

function letsLearnScope (){
    console.log(a1, b1);
    if (true){
        let a1 = 'Pyhton'
        let b1 = 100;
        console.log(a1, b1);
    };
    console.log(a1, b1);
};
letsLearnScope();
document.getElementById("globalScope-1").innerHTML ="global scope : " + a1 + b1;
console.log(a1, b1);

//local scope
//case 1
var a2 = 'JavaScript'; //global scope
var b2 = 10; //global scope

function letsLearnScope2(){
    //can access from the function and outside the function
    //variables declared inside the if will not be accessed outside block
    document.getElementById("localScope-1").innerHTML ="case 1 : " + a2 + b2;
    console.log("-" + a2, b2); //JavaScript 10, accessible
    let value = false;
    //block scope
    if (true){
        let a2 ='Pyhton';
        let b2 = 20;
        let c2 = 30; //c2, on if blok
        let d2 = 40;
        value = !value;
        document.getElementById("localScope-2").innerHTML ="case 2, if block  : " + a2 + b2 + c2 + value;
        console.log("--" + a2, b2, c2, value); //pyhton 20, 30 true
    };
    //cannot access c2 cause is scope only in if block
    console.log("-" + a2, b2, value); //c2, d2 and value false
    document.getElementById("localScope-2").innerHTML ="case 3, outside if block  : " + a2 + b2 + value;
};
letsLearnScope2 ();
console.log("-" + a2, b2);//Javascript 10, accessible
document.getElementById("localScope-3").innerHTML ="case 3, outside functoin block : " + a2 + b2;

//block in javascript using two curly brackets {}
//case 2 : with function block
function letsLearnScope3 (){
    var gravity = 9.81;
    console.log("case 1 : " + gravity);
};
//but we call gravity in out scope 
//console.log(gravity);//will referenceError : gravity is not defined
letsLearnScope3();

//case 3 : with if block
if (true){
    var gravity = 10;
    console.log("case 2, in if block : " + gravity);
};
console.log("case 2, out of if block : "+ gravity);

//case 3 : with loop block
for (let i = 0; i < 3; i++){
    console.log("case 3, in loop block" + i);
};
//but we call (i) in out scope 
//console.log(i); //will referenceError : cause not define

