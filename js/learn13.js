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
    return total
};
document.getElementById("functionWithReturn-1").innerHTML = "with return total : " + withReturn1();

//case 2
function withReturn2 (){
    let firstName = 'albi';
    let lastName = 'mudakar';
    let space = ' ';
    let fullName = firstName + space + lastName;
    return fullName
};
document.getElementById("functionWithReturn-2").innerHTML = "with return fullname : " + withReturn2();

//Funtion : With Paramater 
function withParams (){

};