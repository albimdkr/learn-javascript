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