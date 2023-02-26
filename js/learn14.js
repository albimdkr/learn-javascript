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
console.log(a1, b1);

//local scope
//case 1
var a2 = 'JavaScript'; //global scope
var b2 = 10; //global scope

function letsLearnScope2(){
    //can access from the function and outside the function
    //variables declared inside the if will not be accessed outside block
    console.log("-" + a2, b2); //JavaScript 10, accessible
    let value = false;
    //block scope
    if (true){
        let a2 ='Pyhton';
        let b2 = 20;
        let c2 = 30; //c2, on if blok
        let d2 = 40;
        value = !value;
        console.log("--" + a2, b2, c2, value); //pyhton 20, 30 true
    };
    //cannot access c2 cause is scope only in if block
    console.log("-" + a2, b2, value); //c2, d2 and value false
};
letsLearnScope2 ();
console.log("-" + a2, b2);//Javascript 10, accessible

//case 2
function letsLearnScope3 (){
    var gravity = 9.81;
    console.log("case 1 : " + gravity);
};
//but we call gravity in out scope 
//console.log(gravity);//will referenceError : gravity is not defined
letsLearnScope3();

//case 3
if (true){
    var gravity = 10;
    console.log("case 2, in if block : " + gravity);
};
console.log("case 2, out of if block : "+ gravity);

