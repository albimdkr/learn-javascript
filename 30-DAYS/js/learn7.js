//CHANGES DATA TYPE (CASTING)

//String To Int
//parseInt
var numberA = '10';
var numberB = parseInt(numberA);
document.getElementById("stringToInt-1").innerHTML = " parseInt :  " + numberB;

//number
var numberC = '20';
var numberD = Number(numberC);
document.getElementById("stringToInt-2").innerHTML = "number : " + numberD;

//Plus +var
var numberE = '30';
var numberF = +numberE;
var numberG = `${numberF}`; 
document.getElementById("stringToInt-3").innerHTML = "Plus (+) : " + numberG;

//FLOAT TO INT 
var numberH = 10.1111
var numberI = parseInt(numberH);
document.getElementById("floatToInt-1").innerHTML = "Float 10.1111 To Int : " + numberI;