//CONDITIONAL
//IF Statment
//Condition : "If Rainy, you must doing ?"
var isRaining = true;
if (isRaining){
    document.getElementById("IF-Statment-1").innerHTML = "IF Statment 1 (TRUE) : You must bring the raincoat";
    document.getElementById("IF-Statment-1").style.backgroundColor = "green";
    document.getElementById("IF-Statment-1").style.color = "white";
}

// IF ELSE Statement
//if else - example - 1 
//Condition : "If Rainy, you must doing ?"
var isRainingg = false;
if (isRainingg){
    document.getElementById("IF-ELSE-Statment-1").innerHTML = " IF (TRUE) : You need bring the raincoat";
    document.getElementById("IF-ELSE-Statment-1").style.backgroundColor = "green";
    document.getElementById("IF-ELSE-Statment-1").style.color = "white";
} else {
    document.getElementById("IF-ELSE-Statment-1").innerHTML = "ELSE (FALSE) : You don't need bring the raincoat";
    document.getElementById("IF-ELSE-Statment-1").style.backgroundColor = "red";
}

//if else - example 2
//Condition : are you age is adult ? 
var age = 18;
if (age < 18){
    document.getElementById("IF-ELSE-Statment-2").innerHTML = "IF (FALSE) : Not Allowed " + age;
    document.getElementById("IF-ELSE-Statment-2").style.backgroundColor = "red";
} else {
    document.getElementById("IF-ELSE-Statment-2").innerHTML = "ELSE (TRUE) : Continue " + age;
    document.getElementById("IF-ELSE-Statment-2").style.backgroundColor = "green";
    document.getElementById("IF-ELSE-Statment-2").style.color = "white";
}

//IF ELSEIF ELSE Statement
//Condition : Ceking the number 
var number = 100; //change value to create decision
if (number > 0){
    document.getElementById("IF-ELSEIF-ELSE-Statment-3").innerHTML = "This number is Positive : " + number;
    document.getElementById("IF-ELSEIF-ELSE-Statment-3").style.backgroundColor = "green";
    document.getElementById("IF-ELSEIF-ELSE-Statment-3").style.color = "white";
} else if (number < 0) {
    var resultNumber = "This number is Negative : " + number;
    document.getElementById("IF-ELSEIF-ELSE-Statment-3").innerHTML = resultNumber;
    document.getElementById("IF-ELSEIF-ELSE-Statment-3").style.backgroundColor = "orange";
    document.getElementById("IF-ELSEIF-ELSE-Statment-3").style.color = "white";
} else if (number == 0) {
    var resultNumber = "Sorry the value it's Zero: " + number;
    document.getElementById("IF-ELSEIF-ELSE-Statment-3").innerHTML = resultNumber;
    document.getElementById("IF-ELSEIF-ELSE-Statment-3").style.backgroundColor = "white";
    document.getElementById("IF-ELSEIF-ELSE-Statment-3").style.color = "blue";

} else {
    var resultNumber = "This is not number !!! : " + number;
    document.getElementById("IF-ELSEIF-ELSE-Statment-3").innerHTML = resultNumber;
    document.getElementById("IF-ELSEIF-ELSE-Statment-3").style.backgroundColor = "red";
    document.getElementById("IF-ELSEIF-ELSE-Statment-3").style.color = "white";
}

//SWITCH CASE
function getValue() {
  const numberValue = document.getElementById("fetchValue").value;

  switch (true){
    case numberValue > 100:
        var resultSwitchCaseValue = "Damn, your number is very big ";
        document.getElementById("SWITCH-CASE-Statment-2").innerHTML = resultSwitchCaseValue;
        document.getElementById("SWITCH-CASE-Statment-2").style.backgroundColor = "black";
        document.getElementById("SWITCH-CASE-Statment-2").style.color = "white";
    break;
    case numberValue > 0:
        var resultSwitchCaseValue = "This is number Positive, your value is = " + numberValue;
        document.getElementById("SWITCH-CASE-Statment-2").innerHTML = resultSwitchCaseValue;
        document.getElementById("SWITCH-CASE-Statment-2").style.backgroundColor = "green";
        document.getElementById("SWITCH-CASE-Statment-2").style.color = "white";
    break;
    case numberValue == 0:
        var resultSwitchCaseValue = "Sorry, your value is zero, Please enter again :( ";
        document.getElementById("SWITCH-CASE-Statment-2").innerHTML = resultSwitchCaseValue;
        document.getElementById("SWITCH-CASE-Statment-2").style.backgroundColor = "orange";
        document.getElementById("SWITCH-CASE-Statment-2").style.color = "white";
    break;
    case numberValue < 0:
        var resultSwitchCaseValue = "This number is Negative, your number is = " + numberValue;
        document.getElementById("SWITCH-CASE-Statment-2").innerHTML = resultSwitchCaseValue;
        document.getElementById("SWITCH-CASE-Statment-2").style.backgroundColor = "gray";
        document.getElementById("SWITCH-CASE-Statment-2").style.color = "white";
    break;
    default :
    var resultSwitchCaseValue = "Holy shit! what wrongs with you dude come on, this is not a number !!!";
    document.getElementById("SWITCH-CASE-Statment-2").innerHTML = resultSwitchCaseValue;
    document.getElementById("SWITCH-CASE-Statment-2").style.backgroundColor = "red";
    document.getElementById("SWITCH-CASE-Statment-2").style.color = "white";
  }



  //document.getElementById("SWITCH-CASE-Statment-2").innerHTML = numberValue;

}
