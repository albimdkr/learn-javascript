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


